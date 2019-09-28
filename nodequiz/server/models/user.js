/*
============================================
; Title:  user.js
; Author: Professor Krasso
; Date:   27 September 2019
; Modified By: Jordan Hennessy
; Description: NodeQuiz Application
;===========================================
*/

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema({
  employeeId: { type: String, required: true },
  firstName: { type: String },
  lastName: { type: String }
});

module.exports = mongoose.model('User', userSchema);
