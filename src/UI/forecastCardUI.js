import { getDayFromADate } from "../utils/dateUtils.js";

const createForecastCard = (forecastDay, temperatureUnit) =>{
    const div = document.createElement("div");
    div.classList.add("forecastCard");
    const day = document.createElement("h5");
    const dayFromDate = getDayFromADate(forecastDay.date)
    day.textContent = dayFromDate;
    div.appendChild(day);
    const hr = document.createElement("hr");
    hr.classList.add("line");
    div.appendChild(hr);
    const img = document.createElement("img");
    img.src = `${forecastDay.day.condition.icon}`;
    img.alt = "Clima"
    div.appendChild(img);
    const temperature = document.createElement("p");
    if (temperatureUnit == "celsius") {
        temperature.textContent = `${forecastDay.day.maxtemp_c}°/${forecastDay.day.mintemp_c}°`;
    }else{
        temperature.textContent = `${forecastDay.day.maxtemp_f}°/${forecastDay.day.mintemp_f}°`
    }
    div.appendChild(temperature);

    return div;
}

export const renderForecastInformation = (forecast, container, temperatureUnit) =>{
    const forecastArray = forecast.forecastday;
    container.replaceChildren();
    forecastArray.forEach((day) =>{
        const forecastDay = createForecastCard(day, temperatureUnit);
        container.appendChild(forecastDay);
    })
    
}