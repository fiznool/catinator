'use strict';

var express = require('express'),
    dotenv = require('dotenv'),
    messages = require('./messages'),
    errorHandler = require('./errorHandler');

// Load raven API key
dotenv.load();

// Create express app
var app = express();
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

// A single route
app.get('/', function(req, res) {
  messages(function(message) {
    // Render
    res.render('index', message);
  });
});

// Bind and start the express server.
app.listen(3000, function() {
  console.log('Listening on port 3000');
});

// Listen for exceptions.
errorHandler();
