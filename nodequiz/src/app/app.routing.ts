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
import { CumulativeSummaryComponent } from './pages/cumulative-summary/cumulative-summary.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AuthGuard } from './shared/auth.guard';
import { AuthLayoutComponent } from './shared/auth-layout/auth-layout.component';


export const AppRoutes: Routes = [
  {
    path: 'dashboard',
    component: BaseLayoutComponent,
    children: [
      {
        path: '',
        component: DashboardComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'cumulative-summary',
        component: CumulativeSummaryComponent,
        canActivate: [AuthGuard]
      }
    ]
  },
  {
    path: 'session',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'not-found',
        component: NotFoundComponent
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'session/not-found'
  }
];
