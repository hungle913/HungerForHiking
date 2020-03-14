// use document ready
$(document).ready(function() {
  // declare variables

  // make on click event for submit button

  // call data from API

  var apiKey = "will have in comment";
  var lat = "";
  var lon = "";

  var form = new FormData();
  var settings = {
    url:
      "https://www.hikingproject.com/data/get-trails?lat=40.0274&lon=-105.2519&maxDistance=10&key=" +
      apiKey,
    method: "GET",
    success: function(result) {
      console.log(result);
    },
    error: function(error) {
      console.log(error);
    }
  };

  $.ajax(settings).done(function(response) {
    console.log(response);
  });

  // create variable for API

  // use GET function to call data from API

  // take input from zipcode to search trails

  // if undefined(?) take input from city/state/country search trails

  // loop through results for the functional logic

  // append variables to div with id="trail-card"

  // append trail card to "resultsTrails"
});
