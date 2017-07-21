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

app.use((req, res, next) => {
  // prod環境ではアクセス制限をかける
  if (process.env.NODE_ENV !== 'production') {
    next();
    return;
  }
  const yahooIps = [
    '211.14.8.0/24',
    '211.14.26.0/23',
    '211.14.28.0/23',
    '203.141.54.0/24',
    '103.2.244.0/22',
  ];
  const ip = req.headers['x-forwarded-for'] || req.ip;
  // 社内ipの場合は許可
  if (!rangeCheck.inRange(ip, yahooIps)) {
    // 社外ipの場合はbasic認証
    app.use(basicAuth('coeic', 'hackday14'));
  }
  next();
});

// API routing（変更する場合はdev-server.jsも変更すること！）
app.use('/api', api);
// static file routing
app.use(serveStatic(path.join(__dirname, 'dist')));

app.listen(port, '127.0.0.1'); // ipv4を利用するため、第２引数を入れる
console.log('server started ' + port);
