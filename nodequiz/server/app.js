/*
============================================
; Title:  app.js
; Author: Professor Krasso
; Date:   22 September 2019
; Modified By: Jordan Hennessy
; Description: NodeQuiz Application
;===========================================
*/
const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const User = require('./models/user');

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended': false}));
app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, '../dist/nodequiz')));
app.use('/', express.static(path.join(__dirname, '../dist/nodequiz')));

// Global variables
const serverPort = 3000;

/************************* Mongoose connection strings go below this line  ***************/
const connString = 'mongodb+srv://admin:hasbyw-mudta2-sakZab@nodequiz-j6vwb.mongodb.net/NodeQuiz'

mongoose.connect(connString, {promiseLibrary: require('bluebird'), useNewUrlParser: true})
  .then(() => console.debug('Connection to the MongoDB was successful.'))
  .catch((err) => console.debug('MongoDB Error: ' + err.message));

/************************* API routes go below this line ********************/

//Validate Employee
app.get('/api/user/:id', function(req, res, next) {
  User.findOne({'employeeId': req.params.id}, function(err, user) {
    if (err) {
      console.log(err);
      return next(err);
    } else {
      console.log(user);
      res.json(user);
    }
  })
});

/**
 * Creates an express server and listens on port 3000
 */
http.createServer(app).listen(serverPort, function() {
  console.log(`Application started and listing on port: ${serverPort}`);
});
