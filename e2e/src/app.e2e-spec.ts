import { AppPage } from './app.po';

describe('new App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

<<<<<<< HEAD
  it('should be blank', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toContain('Start with Ionic UI Components');
=======
  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getPageTitle()).toContain('Tab 1');
>>>>>>> versionqr
  });
});
