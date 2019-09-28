/*
============================================
; Title:  app.module.ts
; Author: Professor Krasso
; Date:   22 September 2019
; Modified By: Jordan Hennessy
; Description: NodeQuiz Application
;===========================================
*/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule} from '@angular/router';
import { AppRoutes } from './app.routing';

import { AppComponent } from './app.component';
import { BaseLayoutComponent } from './shared';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BaseLayoutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClient,
    HttpClientModule,
    RouterModule.forRoot(AppRoutes, { useHash: true, enableTracing: false }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
