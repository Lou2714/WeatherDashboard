import { getCityName } from "./src/UI/searchBarUI.js";
import { getCurrentWeather, getForecast } from "./src/services/weatherService.js";
import { renderCityInformation, renderCurrentWeatherInformation } from "./src/UI/weatherInformationCard.js";
import { showSpinner, hideSpinner } from "./src/UI/spinnerUI.js";
import { showErrorAlert, clearErrorAlert } from "./src/UI/feedback.js";

const currentWeatherContainer = document.getElementById("currentWeatherContainer");
const forecastContainer = document.getElementById("forecastContainer");

document.addEventListener("DOMContentLoaded", () => {
    getCurrentWeatherInformation("San Salvador");
    getForescastInformation("San Salvador")
});

const getCurrentWeatherInformation = (city) =>{
    showSpinner(currentWeatherContainer);
    //San Salvador es por defecto, 
    getCurrentWeather(city, "es")
        .then((res) => {
            clearErrorAlert(currentWeatherContainer);
            renderCityInformation(res);
            renderCurrentWeatherInformation(res);
        })
        .catch((error) =>{
            showErrorAlert(currentWeatherContainer,error.message);
        })
        .finally(()=>{
            hideSpinner(currentWeatherContainer);
        })
}
const getForescastInformation = (city) =>{

}

const handlerCitySearch = (cityName) =>{
    //Cuando el usuario busque una ciudad se debe de ir a getWeatherInfo para que carge
    getWeatherInformation(cityName);
}
getCityName(handlerCitySearch);