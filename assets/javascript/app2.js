// use document ready
$(document).ready(function() {
  // declare variables

  // make on click event for submit button

  // call data from API

  var settings = {
    url: "https://www.benbrougher.tech/hiker/v1/trails/",
    method: "GET",
    timeout: 0,
    headers: {
      "Content-Type": "application/json"
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
