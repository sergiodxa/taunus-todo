'use strict';

// dependencies
var taunus        = require('taunus');
var taunusExpress = require('taunus-express');
var express       = require('express');
var path          = require('path');
var bodyParser    = require('body-parser');

// controllers
var createTodo = require('./controllers/home/create.js');
var updateTodo = require('./controllers/home/update.js');
var removeTodo = require('./controllers/home/remove.js');

// taunus config
var config = {
  routes: require('./controllers/routes.js'),
  layout: require('./.bin/views/layout.js')
};

// express app initialized
var app = express();

// express app config
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text({ type: 'text/html' }));
app.use(bodyParser.json());

app.use(express.static('./.bin/public'));


// express routes
app.post('/todo/create', createTodo);
app.post('/todo/update', updateTodo)
app.post('/todo/delete', removeTodo);

// taunux binded to express
taunusExpress(taunus, app, config);

// app listen port 3000
app.listen(Number(process.env.PORT || 5000));
