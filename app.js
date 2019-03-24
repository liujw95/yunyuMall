var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var searchRouter = require('./routes/search');
var sortRouter=require('./routes/sort');
var loginRouter=require('./routes/login');
var agreementRouter=require('./routes/agreement');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
app.use('/search', searchRouter);
app.use('/login', loginRouter);
app.use('/sort', sortRouter);
app.use('/agreement',agreementRouter);
module.exports = app;
