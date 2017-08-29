import { browser, by, element } from 'protractor';

export class AngularSandboxPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
  getH3Text() {
    return element(by.css('app-root h3')).getText();
  }
}
