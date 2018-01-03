import { browser, by, element } from 'protractor';
import { HomePage } from './app.po';

describe('search-filter App', () => {
  let page: HomePage;

  beforeEach(() => {
    page = new HomePage();
  });

  it('should have a title', function () {
    page.navigateTo();
    expect(browser.getTitle()).toEqual('Search Filter');
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to Search Filter');
  });
  
  it('should navigate to sign up page', () => {
    element(by.id('signup-nav')).click();
    expect(page.getParagraphText()).toEqual('Sign up to save your filters');
  });

});
