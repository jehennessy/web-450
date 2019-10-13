/*
============================================
; Title:  presentation.component.ts
; Author: Professor Krasso
; Date:   10 October 2019
; Modified By: Jordan Hennessy
; Description: NodeQuiz Application
;===========================================
*/
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css']
})
export class PresentationComponent implements OnInit {

  presentationId: number;
  presentation: string;
  quizName: string;
  slideImages = [
    {"image": "Slide1.jpeg"},
    {"image": "Slide2.jpeg"},
    {"image": "Slide3.jpeg"},
    {"image": "Slide4.jpeg"},
    {"image": "Slide5.jpeg"},
    {"image": "Slide6.jpeg"},
    {"image": "Slide7.jpeg"},
    {"image": "Slide8.jpeg"},
    {"image": "Slide9.jpeg"},
    {"image": "Slide10.jpeg"},
    {"image": "Slide11.jpeg"},
    {"image": "Slide12.jpeg"},
    {"image": "Slide13.jpeg"},
    {"image": "Slide14.jpeg"}
  ]


  constructor(private route: ActivatedRoute) {
    this.presentationId = parseInt(this.route.snapshot.paramMap.get('id'));

    if (this.presentationId === 101) {
      this.presentation = "html";
      this.quizName = "HTML Basics";
    } else if (this.presentationId === 102) {
      this.presentation = "css";
      this.quizName = "CSS Basics";
    } else {
      this.presentation = "javaScript";
      this.quizName = "JavaScript Basics";
    }
  }

  ngOnInit() {
  }

}
