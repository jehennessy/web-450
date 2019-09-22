/*
============================================
; Title:  app.routing.ts
; Author: Professor Krasso
; Date:   22 September 2019
; Modified By: Jordan Hennessy
; Description: NodeQuiz Application
;===========================================
*/
import {Routes} from '@angular/router';
import {BaseLayoutComponent} from './shared';

export const AppRoutes: Routes = [
  {
    path: '',
    component: BaseLayoutComponent,
    children: [
      /*
        New components go here...
       */
    ]
  }
];
