/*
============================================
; Title:  cumulative-summary.component.spec.ts
; Author: Professor Krasso
; Date:   10 October 2019
; Modified By: Jordan Hennessy
; Description: NodeQuiz Application
;===========================================
*/

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CumulativeSummaryComponent } from './cumulative-summary.component';

describe('CumulativeSummaryComponent', () => {
  let component: CumulativeSummaryComponent;
  let fixture: ComponentFixture<CumulativeSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CumulativeSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CumulativeSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
