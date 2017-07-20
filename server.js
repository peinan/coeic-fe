const express = require('express');
const path = require('path');
const serveStatic = require('serve-static');
const api = require('./src/api');
const config = require('./config');

// default port where dev server listens for incoming traffic
const port = process.env.PORT || config.dev.port;

const app = express();
// API routing（変更する場合はdev-server.jsも変更すること！）
app.use('/api', api);
// static file routing
app.use(serveStatic(path.join(__dirname, 'dist')));

app.listen(port);
console.log('server started ' + port);
