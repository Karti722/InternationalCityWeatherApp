# InternationalCityWeatherApp

  This web application ultilizes HTML, CSS, and Javascript to display the weather 
of an international city that the user types in using the OpenWeatherMap API. The HTML handles the basic structure and layout
of the search card and background images. The CSS (style.css) code deals with the styling and positioning of the card as well as the text, 
search bar, and search button. The Javascript (script.js) code handles the HTTP requests made to the OpenWeatherMap.com website through their API.
The Javascript returns the information about the city the user inputted in the search bar as well as a corresponding weather icon. There is also
a second API that calls the Unsplash.com website which supplies a random image of the country in which the 
city weather data is being pulled from onto the background. (Example being Madrid, Spain so the UnSplash API changes the
background image to a random image of Spain). There is another API that I added which displays the flag icon of the country in which the city is from
(Example: if the city is Berlin, there would be a flag icon of Germany right above it).
I also added two alerts: one alert would tell the user if they didn't type a city after they pressed the search button, and another alert would tell
the user that there is no weather data for an invalid value they typed in after pressing the search button
(Example: The user types in "FGG" and pressed the search button, get an alert message). The Javascript also handles the loading function, so that
the user can see when the website is loading data.
