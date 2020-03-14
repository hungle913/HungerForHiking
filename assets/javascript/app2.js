// use document ready
$(document).ready(function() {
  // declare variables

  // make on click event for submit button (get working later)

  // call on tags to generate variables from input for city, state and zip code

  // IF zipcode, use this for conversion, ELSE use city and state
  // use Firebase database Jared made to convert input from city/state/zip code to lat and lon
  // for now, hard code in sample data set

  var apiKey = "200702695-d743746acbe4331b82eeffe769ec073d";
  var lat = "40.0274";
  var lon = "-105.2519";

  // create a GET function and input

  var form = new FormData();
  var settings = {
    url:
      "https://www.hikingproject.com/data/get-trails?lat=" +
      lat +
      "&lon=" +
      lon +
      "&maxDistance=10&key=" +
      apiKey,
    method: "GET",
    success: function(result) {
      console.log(result);
    },
    error: function(error) {
      console.log(error);
    }
  };

  // create variable for API
  $.ajax(settings).then(function(response) {
    // console.log(response);
    // console.log(response.trails[1].name);

    // loop through results for the functional logic
    for (var i = 0; i < response.trails.length; i++) {
      console.log(response.trails[i].imgSmallMed);
      console.log(response.trails[i].name);
      console.log(response.trails[i].length);
      console.log(response.trails[i].difficulty);
      console.log(response.trails[i].ascent);
      console.log(response.trails[i].descent);
      console.log(console.log(response.trails[i].url));

      // append variables to div with id="trail-card"

      var trailCard = $("<div>");
      // trailCard.setAttribute("trail-id", i);
      trailCard.append("<img src= '" + response.trails[i].imgSmallMed + "'>");
      trailCard.append("<p class='title'>" + response.trails[i].name + "</p>");
      trailCard.append(
        "<p class='details'>Length: " + response.trails[i].length + " miles</p>"
      );
      trailCard.append(
        "<p class='details'>Difficulty: " +
          response.trails[i].difficulty +
          "</p>"
      );
      trailCard.append(
        "<p class='details'>Ascent: " + response.trails[i].ascent + "</p>"
      );
      trailCard.append(
        "<p class='details'>Descent: " + response.trails[i].descent + "</p>"
      );
      trailCard.append(
        "<p class='details'>More info: " + response.trails[i].url + "</p>"
      );

      // append trail card to "resultsTrails"

      $("#resultsTrails").append(trailCard);
    }
  });
});
