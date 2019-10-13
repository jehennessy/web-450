/*
============================================
; Title:  quiz.js
; Author: Professor Krasso
; Date:   10 October 2019
; Modified By: Jordan Hennessy
; Description: NodeQuiz Application
;===========================================
*/

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let quizSchema = new Schema({
  quizId: String,
  name: String,
  question: [{
    number: String,
    content: String,
    answer: [{
      content: String,
      correct: {type: Boolean}
    }]
  }],
}, {collection: 'quiz'});

module.exports = mongoose.model('Quiz', quizSchema);
