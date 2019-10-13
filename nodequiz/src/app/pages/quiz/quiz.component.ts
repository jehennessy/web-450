/*
============================================
; Title:  quiz.component.ts
; Author: Professor Krasso
; Date:   10 October 2019
; Modified By: Jordan Hennessy
; Description: NodeQuiz Application
;===========================================
*/
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  quizId: number;
  employeeId: number;
  quiz: any;
  quizResults: any;
  question: any;

  constructor(private route: ActivatedRoute, private http: HttpClient) {



    this.http.get('/api/quiz/' + 101).subscribe(res => {
      this.quiz = res;

    })
  }

  ngOnInit() {
  }


}
