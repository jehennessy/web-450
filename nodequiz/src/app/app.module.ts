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
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BaseLayoutComponent } from './shared/base-layout/base-layout.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AuthLayoutComponent } from './shared/auth-layout/auth-layout.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { CumulativeSummaryComponent } from './pages/cumulative-summary/cumulative-summary.component';

import { MatButtonModule, MatIconModule, MatMenuModule, MatToolbarModule, MatFormFieldModule, MatInputModule, MatCardModule, MatCard, MatListModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { AuthGuard } from './shared/auth.guard';
import { CookieService } from 'ngx-cookie-service';

import { QuizComponent } from './pages/quiz/quiz.component';
import { CarouselModule } from 'primeng/carousel';
import { PresentationComponent } from './pages/presentation/presentation.component';

@NgModule({
  declarations: [
    AppComponent,
    BaseLayoutComponent,
    AuthLayoutComponent,
    LoginComponent,
    DashboardComponent,
    NotFoundComponent,
    CumulativeSummaryComponent,
    QuizComponent,
    PresentationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(AppRoutes, { useHash: true, enableTracing: false }),
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    FormsModule,
    CarouselModule,
    MatListModule
  ],
  providers: [{
    provide: LocationStrategy, useClass: HashLocationStrategy},
    AuthGuard, CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
