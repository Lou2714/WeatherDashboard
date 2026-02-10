import { getCityName } from "./src/UI/searchBarUI.js";
import { getCurrentWeather, getForecast } from "./src/services/weatherService.js";
import { renderCityInformation, renderCurrentWeatherInformation } from "./src/UI/weatherInformationCard.js";
import { showSpinner, hideSpinner } from "./src/UI/spinnerUI.js";
import { showErrorAlert, clearErrorAlert } from "./src/UI/feedback.js";
import { renderForecastInformation } from "./src/UI/forecastCardUI.js";
import { openTemperatureMenu, closeTemperatureMenu, getTemperatureUnitInputValue } from "./src/UI/temperatureMenuUI.js";
import { saveTemperatureUnitChecked, getTemperatureUnit } from "./src/utils/storage.js";

const currentWeatherContainer = document.getElementById("currentWeatherContainer");
const forecastContainer = document.getElementById("forecastContainer");
const btnShowTemperatureUnitsOptions = document.getElementById("btnShowTemperatureUnitsOptions");
const temperatureUnitOptionsContainer = document.getElementById("temperatureUnitOptionsContainer");

const cityTemperatureState = {
    currentCity: "san salvador",
    currentTemperatureUnit: getTemperatureUnit() || "celsius"
}

document.addEventListener("DOMContentLoaded", () => {
    loadWeatherInformation();
    
});
btnShowTemperatureUnitsOptions.addEventListener("click", () =>{  
    //Verifico si el menu de unidades ya está abierto o no, la clase me lo indica  
    if (temperatureUnitOptionsContainer.classList.contains("showTemperatureUnitOptionsContainer")) {
        closeTemperatureMenu(temperatureUnitOptionsContainer);
    }else{
        openTemperatureMenu(temperatureUnitOptionsContainer);
    }
})
document.addEventListener("click", (e) =>{
    //SI el click NO está dentro del menú Y el click NO está dentro del botón → entonces cerrar el menú
    if (!temperatureUnitOptionsContainer.contains(e.target) &&  !btnShowTemperatureUnitsOptions.contains(e.target) ) {
        closeTemperatureMenu(temperatureUnitOptionsContainer);
    }
    
})

const loadWeatherInformation = () =>{
    const { currentCity, currentTemperatureUnit } = cityTemperatureState;
    getCurrentWeatherInformation(currentCity, currentTemperatureUnit);
    getForescastInformation(currentCity, currentTemperatureUnit);
}

const getCurrentWeatherInformation = (city, temperatureUnit) =>{
    showSpinner(currentWeatherContainer);
    //San Salvador es por defecto, 
    getCurrentWeather(city, "es")
        .then((res) => {
            clearErrorAlert(currentWeatherContainer);
            renderCityInformation(res);
            renderCurrentWeatherInformation(res, temperatureUnit);
        })
        .catch((error) =>{
            showErrorAlert(currentWeatherContainer,error.message);
        })
        .finally(()=>{
            hideSpinner(currentWeatherContainer);
        })
}
const getForescastInformation = (city, temperatureUnit) =>{
    showSpinner(forecastContainer);
    getForecast(city,"es")
        .then((res) => {
            clearErrorAlert(forecastContainer);
            renderForecastInformation(res.forecast, forecastContainer, temperatureUnit);
        })
        .catch((error) => {
            showErrorAlert(forecastContainer, error.message);
        })
        .finally(() => {
            hideSpinner(forecastContainer);
        })
}

const handlerCitySearch = (cityName) =>{
    //Cuando el usuario busque una ciudad se actualiza el valor del estado y se carga la info del clima
    cityTemperatureState.currentCity = cityName;
    loadWeatherInformation();
}
//Función para guardar la unidad de temperatura en el localStorage cada que cambie
const handlerTemperatureUnitChange = (temperatureUnit) =>{
    cityTemperatureState.currentTemperatureUnit = temperatureUnit;
    saveTemperatureUnitChecked(temperatureUnit);
    loadWeatherInformation();
}
//Callback para manejar el texto del searchbar, lo pongo aqui por la inicialización
getCityName(handlerCitySearch);
//Callback para obtener el valor de la unidad de temperatura
getTemperatureUnitInputValue(handlerTemperatureUnitChange);