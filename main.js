import { getCityName } from "./src/UI/searchBarUI.js";
import { getCurrentWeather, getForecast } from "./src/services/weatherService.js";
import { renderCityInformation, renderCurrentWeatherInformation } from "./src/UI/weatherInformationCard.js";
import { showSpinner, hideSpinner } from "./src/UI/spinnerUI.js";

const currentWeatherContainer = document.getElementById("currentWeatherContainer");

document.addEventListener("DOMContentLoaded", () => {
    getWeatherInformation("San Salvador");
});

const getWeatherInformation = (city) =>{
    //TODO: Arreglar el spinner, que tape la info, se anexa abajo del texto, que se sobreponga, replace no sale a cuento, quiza crear una capa con absolute donde aparezca el spinner y difuminar el fondo, representando que está cargando
    showSpinner(currentWeatherContainer);
    //San Salvador es por defecto, 
    getCurrentWeather(city, "es")
        .then((res) => {
            renderCityInformation(res);
            renderCurrentWeatherInformation(res)
            console.log(res)
        })
        .finally(()=>{
            hideSpinner(currentWeatherContainer);
        })
}

const handlerCitySearch = (cityName) =>{
    //Cuando el usuario busque una ciudad se debe de ir a getWeatherInfo para que carge
    getWeatherInformation(cityName);
}
getCityName(handlerCitySearch);