ProtractorPage = require('../pages/test-angular.js');
AngularPage = require('../pages/AngularPage.js');
AngularIOPage = require('../pages/AngularIOPage.js');


describe('Access Protractor main page', function() {
  it('should access the main page of Protractor tool', function() {
    var page = new ProtractorPage();
    page.visit();
    browser.waitForAngular();
    expect(browser.getCurrentUrl()).toEqual('http://www.protractortest.org/#/');
  });
});

describe('Access AngularJS page', function() {
  it('should access AngularJS\'s main page', function() {
    var page = new AngularPage();
    page.visit();
    browser.waitForAngular();
    expect(browser.getCurrentUrl()).toEqual('https://www.angularjs.org/');
  });
});

/*
describe('Access the new AngularIO page', function() {
  it('should access the new AngularIO\'s main page', function() {
    var page = new AngularIOPage();
    page.visit();
    browser.waitForAngular();
    expect(browser.getCurrentUrl()).toEqual('https://angular.io/');
  });
});
*/
