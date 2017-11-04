var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
var jasmineReporters = require('jasmine-reporters');                        
// var chromeDriver = process.env.chromedriver;
// var geckoDriver = process.env.geckodriver;

exports.config = {
  framework: 'jasmine',
  directConnect: true,
//  chromeDriver : process.env.chromedriver,
  getPageTimeout: 60000,
  allScriptsTimeout: 15000,
  jasmineNodeOpts: {defaultTimeoutInterval: 30000},
  suites: {
   angular: 'specs/test-angular.js',
   other: 'specs/spec3.js',
   all: ['specs/test-angular.js', 
   'specs/spec3.js']
  },

multiCapabilities: [
	{
		browserName: 'chrome',
		chromeOptions: {
			args: [ "--headless", "--disable-gpu", "--window-size=800,600", "no-sandbox" ]
		}
	}
/*	,
	{
		browserName: 'firefox',
		'moz:firefoxOptions': {
			'binary': "/usr/local/bin/geckodriver",
			'args': ['-headless', '--verbose']
              }
	}
*/	
],

  maxSessions: 1,

  onPrepare: function() {
    jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
      takeScreenshots: true,
      takeScreenshotsOnlyOnFailures: true,
      savePath: 'target/testreports',
      showConfiguration: true,
      reportFailedUrl: true,
      preserveDirectory: true
    }));
    jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
      consolidateAll: true,
      savePath: 'target/testreports',
      filePrefix: 'xmloutput'
    }));
  }
};
