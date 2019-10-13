/*
============================================
; Title:  employee.js
; Author: Professor Krasso
; Date:   27 September 2019
; Modified By: Jordan Hennessy
; Description: NodeQuiz Application
;===========================================
*/

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let employeeSchema = new Schema({
  employeeId: { type: String, required: true }
});

module.exports = mongoose.model('Employee', employeeSchema);
