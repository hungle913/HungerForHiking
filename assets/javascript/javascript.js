$(document).ready(function(){

    $("#submit").on("click", event =>{
        $("#weather-results").empty()

        var zip = $("#zipCode").val().trim();
        console.log("Zip Code: " + zip);

        var queryURL = "https://api.openweathermap.org/data/2.5/weather?zip=" + zip + ",US&appid=7b989adbf1d292228e70f3311479d6e4";
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response){
            // console.log(response);

            var currentWeather = response.weather[0].description;
            console.log("Current Weather: " + currentWeather);

            var currentTemp = Math.round(((response.main.temp-273.15)*1.8)+32);
            console.log("Current Temperature: " + currentTemp + " Degrees F");

            var minTemp = Math.round(((response.main.temp_min-273.15)*1.8)+32);
            console.log("Minimum Temperature: " + minTemp + " Degrees F");

            var maxTemp = Math.round(((response.main.temp_max-273.15)*1.8)+32);
            console.log("Maximum Temperature: " + maxTemp + " Degrees F");

            var windSpeed = response.wind.speed;
            console.log("Wind Speed: " + windSpeed + " MPH");

            var weatherResults = $("<div>");

                weatherResults.append("<p> Current Weather: " + currentWeather + "</p>")
                weatherResults.append("<p> Current Temperature: " + currentTemp + " Degrees F </P>");
                weatherResults.append("<p> Minimum Temperature: " + minTemp + " Degrees F </p>");
                weatherResults.append("<p> Maximum Temperature: " + maxTemp + " Degrees F </p>");
                weatherResults.append("<p> Wind Speed: " + windSpeed + " MPH </p>");

            $("#weather-results").append(weatherResults);



        });
    });
});

