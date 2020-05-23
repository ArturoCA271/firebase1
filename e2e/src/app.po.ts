import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

<<<<<<< HEAD
  getParagraphText() {
    return element(by.deepCss('app-root ion-content')).getText();
=======
  getPageTitle() {
    return element(by.css('ion-title')).getText();
>>>>>>> versionqr
  }
}
