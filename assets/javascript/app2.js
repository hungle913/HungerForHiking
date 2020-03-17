// // use document ready
// $(document).ready(function() {
//   // declare variables

//   var zipcode = "00601";
//   var spot;
//   // lat = "18.18004"
//   // lon = "-66.75218"

//   // make on click event for submit button (get working later)

//   // call on tags to generate variables from input for city, state and zip code

//   // IF zipcode, use this for conversion, ELSE use city and state
//   // use Firebase database Jared made to convert input from city/state/zip code to lat and lon

//   //First we intialize firebase
//   var firebaseConfig = {
//     apiKey: "AIzaSyAS69rSyD2JKuSdzXh4MyuMgZOm9IHN9tQ",
//     authDomain: "hunger-for-hiking.firebaseapp.com",
//     databaseURL: "https://hunger-for-hiking.firebaseio.com",
//     projectId: "hunger-for-hiking",
//     storageBucket: "hunger-for-hiking.appspot.com",
//     messagingSenderId: "1072732894647",
//     appId: "1:1072732894647:web:79aedcb9e81e6a2b7fa432"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);

//   //then ya reference database
//   var database = firebase.database();

//   database.ref().on("value", function(snapshot) {
//     var spot = snapshot.filter(function(element) {
//       return element[0] === zipcode;
//     });

//     console.log(spot);
//   });

//   //   console.log(snapshot.val());

//   //   for (var i = 1; i < snapshot.length; i++) {
//   //     console.log("running");
//   //     if (zipcode === snapshot.Array[i][0].val()) {
//   //       console.log("Latitude: " + snapshot.Array[i][1].val());
//   //       console.log("Latitude: " + snapshot.Array[i][2].val());
//   //       return;
//   //     } else {
//   //       console.log("incorrect");
//   //     }
//   //   }

//   // for now, hard code in sample data set

//   var apiKey = "200702695-d743746acbe4331b82eeffe769ec073d";

//   // create a GET function and input

//   var form = new FormData();
//   var settings = {
//     url:
//       "https://www.hikingproject.com/data/get-trails?lat=" +
//       lat +
//       "&lon=" +
//       lon +
//       "&maxDistance=10&key=" +
//       apiKey,
//     method: "GET"
//     // success: function(result) {
//     // console.log(result);
//     // },
//     // error: function(error) {
//     // console.log(error);
//     // }
//   };

//   // create variable for API
//   $.ajax(settings).then(function(response) {
//     // console.log(response);
//     // console.log(response.trails[1].name);

//     // loop through results for the functional logic
//     for (var i = 0; i < response.trails.length; i++) {
//       // console.log(response.trails[i].imgSmallMed);
//       // console.log(response.trails[i].name);
//       // console.log(response.trails[i].length);
//       // console.log(response.trails[i].difficulty);
//       // console.log(response.trails[i].ascent);
//       // console.log(response.trails[i].descent);
//       // console.log(console.log(response.trails[i].url));

//       // append variables to div with id="trail-card"

//       var trailCard = $("<div>");
//       // trailCard.setAttribute("trail-id", i);
//       trailCard.append(
//         "<img class='card-image' src= '" + response.trails[i].imgSmallMed + "'>"
//       );
//       trailCard.append("<p class='title'>" + response.trails[i].name + "</p>");
//       trailCard.append(
//         "<p class='details'>Length: " + response.trails[i].length + " miles</p>"
//       );
//       trailCard.append(
//         "<p class='details'>Difficulty: " +
//           response.trails[i].difficulty +
//           "</p>"
//       );
//       trailCard.append(
//         "<p class='details'>Ascent: " + response.trails[i].ascent + "</p>"
//       );
//       trailCard.append(
//         "<p class='details'>Descent: " + response.trails[i].descent + "</p>"
//       );
//       trailCard.append(
//         "<p class='details'>More info: " + response.trails[i].url + "</p>"
//       );

//       // append trail card to "resultsTrails"

//       $("#resultsTrails").append(trailCard);
//     }
//   });
// });
