'use strict';

const express = require('express');
const path = require('path')
const os = require('os');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
  res.render('index', {hostname: os.hostname()})
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
