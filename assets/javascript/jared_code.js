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
    zipcode = "46113"
    console.log("zipcode", zipcode)
    // date = $("#date").val().trim()
    //     console.log("date" , date)
    // country = $("#country").val().trim() 
    //     console.log("country" , country)


    database.ref().on("value", function (snapshot) {
        console.log("snapshot", snapshot.val());


        database.ref().on("value", searchDB => {

            //make reference to the database in variable
            const DB = snapshot.val()


            DB.filter(info => {
                console.log("info" , info)
                if (info.includes(zipcode)) {
                    

                    var lat = info[1]
                    var lng = info[2]
                    console.log(info, "info")
                    console.log(lat, "lat")
                    console.log(lng, "lng")
                    return ;
                    

                } else {

                    console.log("better luck next time")


                }

 

            })
        });
    });
})