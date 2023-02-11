/* About: This "script.js" file fetches the openweathermap API and adds the parameters 
based on the city that the user typed in the search bar, as well as the imperial 
units for temperature (Fahrenheit). Then it modifies the HTML code with the weather
information the API had fetched within the given city. */
let weather = {
    "apiKey": "ebc78dd126821b40dc1edde358b2866c",
    // Fetches the weather if the city exists, else it returns an alert.
    fetchWeather: function(city) {
            fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + this.apiKey + "&units=imperial"
            ).then((response) => response.json())
            .then((data) => this.displayWeather(data))
            .catch(error => alert("We cannot find any data for this city: " + city))
    },
    displayWeather: function(data) {
         // data is a large JSON object fetched for the city in which the following variables are assigned below.
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        const country  = data.sys['country'];
        console.log(data);
        document.querySelector(".city").innerText = "Weather in " + name + ", " + country;
        document.querySelector(".temp").innerText = temp + "°F";
        document.querySelector(".country-flag").src = "https://countryflagsapi.com/png/" + country.toLowerCase();
        document.querySelector(".icon").src = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
        document.querySelector(".icon").height = 85;
        document.querySelector(".description").innerText = "Description: " + description;
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind-speed: " + speed + " km/h";
        // Removes the loading class that was set up in the style.css file
        document.querySelector(".weather").classList.remove("loading");
        // Changes the background image to something that represents the country based on the city the user inputs
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + "')";
    },
    // This fetches the value inputted by the user. 
    // This function is called after the search button is pressed.
    search: function() {
        //  If the user doesn't type a city name
        if (document.querySelector(".search-bar").value == "") {
            alert("Please enter a city name.")
            return;
        }
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
};
// This is the event that happens when the search button is pressed.
document.querySelector(".search-button").addEventListener("click", function() {
    weather.search();
});
document.querySelector(".search-bar").addEventListener("keyup", function(event){
if (event.key == "Enter") {
        weather.search();
    }
});
// API key from openweathermap.org. This site gives all the weather info and icons.