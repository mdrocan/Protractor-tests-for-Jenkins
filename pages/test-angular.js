var ProtractorPage = function() {
  this.visit = function() {
    browser.get('http://www.protractortest.org/');
  };

};
module.exports = ProtractorPage;