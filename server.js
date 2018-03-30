// Dependencies
var express = require("express");
var request = require("request");
var cheerio = require("cheerio");

// Initialize Express
var app = express();

// Scrape data from one site and place it into the mongodb db
app.get("/result/:id", function(req, res) {
  var link = req.params.id;
  console.log(link);
  console.log(req);
  console.log(res);
  // // Make a request for the news section of ycombinator
  // request("https://news.ycombinator.com/", function(error, response, html) {
  //   // Load the html body from request into cheerio
  //   var $ = cheerio.load(html);
  //   // For each element with a "title" class
  //   $(".title").each(function(i, element) {
  //     // Save the text and href of each link enclosed in the current element
  //     var title = $(element).children("a").text();
  //     var link = $(element).children("a").attr("href");

  //     // If this found element had both a title and a link
  //     if (title && link) {
  //       // Insert the data in the scrapedData db
  //       db.scrapedData.insert({
  //         title: title,
  //         link: link
  //       },
  //       function(err, inserted) {
  //         if (err) {
  //           // Log the error if one is encountered during the query
  //           console.log(err);
  //         }
  //         else {
  //           // Otherwise, log the inserted data
  //           console.log(inserted);
  //         }
  //       });
  //     }
  //   });
  });

  // Send a "Scrape Complete" message to the browser
  res.send("Scrape Complete");
});


// Listen on port 3000
app.listen(3001, function() {
  console.log("App running on port 3001!");
});
