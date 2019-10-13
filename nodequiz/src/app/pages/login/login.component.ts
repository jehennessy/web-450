/*
============================================
; Title:  login.component.ts
; Author: Professor Krasso
; Date:   10 October 2019
; Modified By: Jordan Hennessy
; Description: NodeQuiz Application
;===========================================
*/
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  errorMessage: string;

  constructor(private fb: FormBuilder, private router: Router, private cookieService: CookieService, private http: HttpClient) { }

  ngOnInit() {
    this.form = this.fb.group({
      employeeId: [null, Validators.compose([Validators.required, Validators.pattern('^[0-9]*$')])]
    });
  }

  login() {
    const employeeId = this.form.controls['employeeId'].value;

    this.http.get('/api/employees/' + employeeId).subscribe(res => {
      if (res) {
        this.cookieService.set('isAuthenticated', 'true', 1);
        this.router.navigate(['/dashboard']);
      } else {
        this.errorMessage = "The employee ID you entered was invalid!"
      }
    })
  }
}
