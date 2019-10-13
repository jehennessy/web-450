/*
============================================
; Title:  dashboard.component.ts
; Author: Professor Krasso
; Date:   10 October 2019
; Modified By: Jordan Hennessy
; Description: NodeQuiz Application
;===========================================
*/
import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  quizzes: any;

  constructor() {
    this.quizzes = [
      {"id": "101", "name": "HTML Basics", "image": "html-image.jpg"},
      {"id": "102", "name": "CSS Basics", "image": "css-image.jpg"},
      {"id": "103", "name": "JavaScript Basics", "image": "javascript-image.jpg"}
    ]
  }

  ngOnInit() {
  }

}
