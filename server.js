const express = require('express');
const path = require('path');
const serveStatic = require('serve-static');
const basicAuth = require('basic-auth-connect');
const rangeCheck = require('range_check');
const api = require('./src/api');
const config = require('./config');

// default port where dev server listens for incoming traffic
const port = process.env.PORT || config.dev.port;

const app = express();

/** *************************** アクセス制限ここから *****************************/
// 環境変数によって利用する認証方法を切り替え
if (process.env.NODE_ENV === 'production') {
  if (process.env.AUTH === 'IP') {
    // 社内ipのみアクセス許可
    app.use((req, res, next) => {
      const yahooIps = [
        '211.14.8.0/24',
        '211.14.26.0/23',
        '211.14.28.0/23',
        '203.141.54.0/24',
        '103.2.244.0/22',
      ];
      const ip = req.headers['x-forwarded-for'] || req.ip;
      if (rangeCheck.inRange(ip, yahooIps)) {
        next();
      } else {
        res.status(403).send('403 Forbidden.');
      }
    });
  } else {
    // basic認証
    app.use(basicAuth('coeic', 'hackday14'));
  }
}
/** *************************** アクセス制限ここまで *****************************/

// https -> http へリダイレクト
app.all('*', (req, res, next) => {
  if (process.env.NODE_ENV !== 'production') {
    return next();
  }
  if (req.headers['x-forwarded-proto'] && req.headers['x-forwarded-proto'] === 'https') {
    res.redirect(`http://${req.headers.host}${req.url}`);
  }
  return next();
});

// API routing（変更する場合はdev-server.jsも変更すること！）
app.use('/api', api);
// static file routing
app.use(serveStatic(path.join(__dirname, 'dist')));
// どのパスにアクセスされても、index.htmlを開く（その先のルーティングはvue側で行う）
app.use('*', express.static('./dist/index.html'));

app.listen(port);
console.log(`server started ${port}`);
