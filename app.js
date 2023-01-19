var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// ARCHIVOS A LLAMAR
var apiRouter = require('./routes/api/api');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// ARCHIVOS A EJECUTAR
app.use('/', indexRouter);
app.use('/api', apiRouter);
app.use('/users', usersRouter);

module.exports = app;
