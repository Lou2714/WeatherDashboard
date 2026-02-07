import { getDayFromADate } from "../utils/dateUtils.js";

const createForecastCard = (forecastDay) =>{
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
    temperature.textContent = `${forecastDay.day.maxtemp_c}°/${forecastDay.day.mintemp_c}°`;
    div.appendChild(temperature);

    return div;
}

//Pendiente función para renderizar las forecastCards
export const renderForecastInformation = (forecast, container) =>{
    const forecastArray = forecast.forecastday;
    container.replaceChildren();
    forecastArray.forEach((day) =>{
        console.log(day);
        const forecastDay = createForecastCard(day);
        container.appendChild(forecastDay);
    })
    
}