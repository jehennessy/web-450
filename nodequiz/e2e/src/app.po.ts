/*
============================================
; Title:  app.po.ts
; Author: Professor Krasso
; Date:   22 September 2019
; Modified By: Jordan Hennessy
; Description: NodeQuiz Application
;===========================================
*/
import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
    return element(by.css('app-root h1')).getText() as Promise<string>;
  }
}
