var Nightmare = require("nightmare");
var expect = require("chai").expect;
// var nightmare = Nightmare({show: true})

// TEST: Start quiz
new Nightmare({show: true})
  .goto("http://localhost:3000/")
  .click("#start-quiz")
  .evaluate(() => {
    document.getElementsByClassName('question-title').textContent;
  })
  .end()
  .then(text => {
    expect(text).to.equal("Why do you want to learn programming?");
    done();
  })
  .then(function() {
    console.log("Done!");
  })
  // Catch errors
  .catch(function(err) {
    console.log(err);
  });

// TEST: Button function
// new Nightmare({show: true})
//   .goto("http://localhost:3000/")
//   .evaluate(() => {
//     var buttons = document.querySelectorAll('.button');
//     buttons.forEach(button => button.click());
//   })
//   // End test
//   .end()
//   // Execute commands
//   .then(function() {
//     console.log("Done!");
//   })
//   // Catch errors
//   .catch(function(err) {
//     console.log(err);
//   });