var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var diaryRouter = require('./routes/diary');

var app = express();



const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://127.0.0.1:27017', {
    useUnifiedTopology:true
})
    .then(client => {
        console.log('Connected to DB.');

        app.locals.db = client.db('diary');
    });



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/diary', diaryRouter);

module.exports = app;
