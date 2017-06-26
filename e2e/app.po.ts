import { browser, by, element } from 'protractor';

export class GenericViewerPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('gv-root h1')).getText();
  }
}
