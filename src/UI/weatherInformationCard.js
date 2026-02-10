import { getCurrentDate } from "../utils/dateUtils.js";

export const renderCityInformation = (location) =>{
    const cityCountryName = document.getElementById("cityCountryName");
    const date = document.getElementById("date");

    cityCountryName.textContent = `${location.location.name}, ${location.location.country}`;
    date.textContent = getCurrentDate();

};

export const renderCurrentWeatherInformation = (current, temperatureUnit) =>{
    const temperatureContainer = document.getElementById("temperatureContainer");
    const temperatureH2 = temperatureContainer.querySelector("h2");

    const weatherConditionContainer = document.getElementById("weatherConditionContainer");
    const temperatureCondition = weatherConditionContainer.querySelector("h5");
    const temperatureFeelsLike = weatherConditionContainer.querySelector("p");

    const humidity = document.getElementById("humidity");
    const wind = document.getElementById("wind");
    const precipitation = document.getElementById("precipitation");

    if (temperatureUnit == "celsius") {
        //Es current.current.temp_c porque current es el parametro que contiene un objeto, dentro de ese objeto esta location y current, por eso el doble currente
        temperatureH2.textContent = `${current.current.temp_c}°C`;
        temperatureCondition.textContent = current.current.condition.text;
        temperatureFeelsLike.textContent = `Sensación térmica: ${current.current.feelslike_c}°C`;

        humidity.textContent = `${current.current.humidity}%`;
        wind.textContent = `${current.current.wind_kph} km/h`;
        precipitation.textContent = `${current.current.precip_mm}%`;
    } else {
        temperatureH2.textContent = `${current.current.temp_f}°F`;
        temperatureCondition.textContent = current.current.condition.text;
        temperatureFeelsLike.textContent = `Sensación térmica: ${current.current.feelslike_f}°F`;

        humidity.textContent = `${current.current.humidity}%`;
        wind.textContent = `${current.current.wind_mph} mph`;
        precipitation.textContent = `${current.current.precip_in}%`;
    }

    
};
