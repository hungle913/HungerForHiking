//the purpose of this is to PULL THE ZIPCODE VALUE from blank in browser
//we then SEE IF ZIPCODE VALUE IS CONTAINED IN JSON OBJECT zipcodeArray.js
//if zip code is in zipcodeArray.js PULL LAT & LONG FROM JSON OBJECT zipcodeArray.js
//maybe pull city/state name from just zipcode
//STORE VALUE AS A VARIABLE TO USE IN BOTH APIS

//FOR PAST MVP STATUS
//BE ABLE TO PROVIDE CITY AND STATE AND GET LAT AND LONG FROM JSON OBJECT
//IF CITY HAS MULTIPLE RESULTS MAKE A PICK LIST
//BE ABLE TO PICK A STATE THEN LIST CITIES IN THAT STATE THEN THE ZIPS FOR THAT CITY

//First we intialize firebase
var firebaseConfig = {
    apiKey: "AIzaSyAS69rSyD2JKuSdzXh4MyuMgZOm9IHN9tQ",
    authDomain: "hunger-for-hiking.firebaseapp.com",
    databaseURL: "https://hunger-for-hiking.firebaseio.com",
    projectId: "hunger-for-hiking",
    storageBucket: "hunger-for-hiking.appspot.com",
    messagingSenderId: "1072732894647",
    appId: "1:1072732894647:web:79aedcb9e81e6a2b7fa432"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//then ya reference database

var database = firebase.database()


//Heard ya like variables so I made some variables
var state;
var city;
var zipcode;
var date;
var country;

//then we make a function to run on submit click that pulls matching data from query

//then we need to get the value of the zipcode blank



$("#submit").on("click", event => {
    event.preventDefault()

    state = $("#state").val().trim()
    console.log(state, "state")
    city = $("#city").val().trim()
    console.log("city", city)
    // zipcode = $("#zipCode").val().trim()
    zipcode = $("#zipCode").val().trim()
    console.log("zipcode", zipcode)
    // date = $("#date").val().trim()
    //     console.log("date" , date)
    // country = $("#country").val().trim() 
    //     console.log("country" , country)


    database.ref().on("value", function (snapshot) {
        console.log("snapshot", snapshot.val());


        database.ref().on("value", () => {

            //make reference to the database in variable
            const DB = snapshot.val()


            const result = DB.filter(info => {
                    console.log("info", info)
                    if (info.includes(zipcode)) {


                        var lat = info[1]
                        var lng = info[2]
                        var result = [lat, lng]
                        console.log(info, "info")
                        console.log(lat, "lat")
                        console.log(lng, "lon")

                        console.log(result, "result")


                        var apiKey = "200702695-d743746acbe4331b82eeffe769ec073d";

                        // create a GET function and input

                        var form = new FormData();
                        var settings = {
                            url: "https://www.hikingproject.com/data/get-trails?lat=" +
                                lat +
                                "&lon=" +
                                lng +
                                "&maxDistance=10&key=" +
                                apiKey,
                            method: "GET"
                            // success: function(result) {
                            // console.log(result);
                            // },
                            // error: function(error) {
                            // console.log(error);
                            // }
                        };

                        // create variable for API
                        $.ajax(settings).then(function (response) {
                            // console.log(response);
                            // console.log(response.trails[1].name);

                            // loop through results for the functional logic
                            for (var i = 0; i < response.trails.length; i++) {
                                // console.log(response.trails[i].imgSmallMed);
                                // console.log(response.trails[i].name);
                                // console.log(response.trails[i].length);
                                // console.log(response.trails[i].difficulty);
                                // console.log(response.trails[i].ascent);
                                // console.log(response.trails[i].descent);
                                // console.log(console.log(response.trails[i].url));

                                // append variables to div with id="trail-card"

                                var trailCard = $("<div>");
                                // trailCard.setAttribute("trail-id", i);
                                trailCard.append(
                                    "<img class='card-image' src= '" + response.trails[i].imgSmallMed + "'>"
                                );
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
                                    "<p class='details'><a href='" +
                                        response.trails[i].url +
                                    "' target='_blank'>More Info</a></p>"
                                );

                                // append trail card to "resultsTrails"

                                $("#resultsTrails").append(trailCard);
                            }
                        });
                    };



                }

                //zomato api


                //weather api



            )
            console.log(result, "result fancy")





        });
    })
});