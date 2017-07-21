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
// 社内ipならtrueになる
let isYahooIp = false;
// 社内ipかの判定
app.use((req, res, next) => {
  const yahooIps = [
    '211.14.8.0/24',
    '211.14.26.0/23',
    '211.14.28.0/23',
    '203.141.54.0/24',
    '103.2.244.0/22',
  ];
  const ip = req.headers['x-forwarded-for'] || req.ip;
  isYahooIp = rangeCheck.inRange(ip, yahooIps);
  next();
});
// 社外ipの場合はbasic認証
if (!isYahooIp) {
  app.all('*', basicAuth(
    (user, password) => user === 'coeic' && password === 'hackday14',
  ));
}
/** *************************** アクセス制限ここまで *****************************/

// API routing（変更する場合はdev-server.jsも変更すること！）
app.use('/api', api);
// static file routing
app.use(serveStatic(path.join(__dirname, 'dist')));

app.listen(port);
console.log(`server started ${port}`);
