/*
============================================
; Title:  app.component.ts
; Author: Professor Krasso
; Date:   22 September 2019
; Modified By: Jordan Hennessy
; Description: NodeQuiz Application
;===========================================
*/
import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { AuthGuard } from './shared/auth.guard';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent {
  title = 'Node Quiz';

  constructor(private cookieService: CookieService, private router: Router, private authGuard: AuthGuard) {
    let test = this.cookieService.get("isAuthenticated");
    console.log(test);
    if (!test) {
      router.navigate(['/session/login']);
    }
  }
}
