import { getCityName } from "./src/UI/searchBarUI.js";
import { getCurrentWeather, getForecast } from "./src/services/weatherService.js";
import { showSpinner, hideSpinner } from "./src/UI/spinnerUI.js";

const currentWeatherContainer = document.getElementById("currentWeatherContainer");

document.addEventListener("DOMContentLoaded", () => {
    getWeatherInformation();
});

const getWeatherInformation = () =>{
    showSpinner(currentWeatherContainer);
    //San Salvador es por defecto, 
    getCurrentWeather("San Salvador", "es")
        .then((res) => console.log(res))
}

const handlerCitySearch = (cityName) =>{
    //Cuando el usuario busque una ciudad se debe de ir a getWeatherInfo para que carge
    return cityName;
}
getCityName(handlerCitySearch);