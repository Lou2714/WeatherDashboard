import { getCityName } from "./src/UI/searchBarUI.js";
import { getCurrentWeather, getForecast } from "./src/services/weatherService.js";
import { renderCityInformation, renderCurrentWeatherInformation } from "./src/UI/weatherInformationCard.js";
import { showSpinner, hideSpinner } from "./src/UI/spinnerUI.js";
import { showErrorAlert, clearErrorAlert } from "./src/UI/feedback.js";
import { renderForecastInformation } from "./src/UI/forecastCardUI.js";

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
    showSpinner(forecastContainer);
    getForecast(city,"es")
        .then((res) => {
            clearErrorAlert(forecastContainer);
            renderForecastInformation(res.forecast, forecastContainer);
        })
        .catch((error) => {
            showErrorAlert(forecastContainer, error.message);
        })
        .finally(() => {
            hideSpinner(forecastContainer);
        })
}

const handlerCitySearch = (cityName) =>{
    //Cuando el usuario busque una ciudad se debe de ir a getWeatherInfo para que carge
    getCurrentWeatherInformation(cityName);
    getForescastInformation(cityName);
}
//Callback para manejar el texto del searchbar, lo pongo aqui por la inicialización
getCityName(handlerCitySearch);