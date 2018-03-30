var Nightmare = require("nightmare");
var expect = require("chai").expect;

describe("Load Which-Language", function() {

  // Extend default test to 10 seconds to have time to load the pages
  this.timeout(10000);

  it("should load without error", function(done) {
    Nightmare({ show: true })
      .goto("http://localhost:3000/")
      .end()
      .then(function(result) { done() })
  });

    it("should present a link to start the quiz", function(done) {
    Nightmare({ show: true })
      .goto("http://localhost:3000/")
      .click("#start-quiz")
      .evaluate(document.querySelector('h1').innerText)
      // Asset the title is as expected
      .then(text => {
        expect(text).to.equal("Why do you want to learn programming?");
        done();
      });
  });

  // it("should present a link to course catalog after login", function(done) {
  //   new Nightmare({ show: true })
  //     .goto("https://www.codecademy.com/login")
  //     // Enter username.
  //     .type("#user_login", "ResilD")
  //     // Enter password.
  //     .type("#login__user_password", "dummy*password")
  //     // Click the login button
  //     .click("#user_submit")
  //     // Evaluate the following selector
  //     .evaluate(function() {
  //       // Assert the "learn" link can be found
  //       return document.querySelector("a[href='/learn']");
  //     })
  //     .then(function(link) {
  //       expect(link).to.not.equal(undefined);
  //       done();
  //     });
  // });

  // it("should throw an error for fun", function() {
  //   throw new Error("Failed on purpose, just to make the Mocha output more interesting.");
  // });
});
