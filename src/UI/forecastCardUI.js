const createForecastCard = (forecastDay) =>{
    const div = document.createElement("div");
    div.classList.add("forecastCard");
    const day = document.createElement("h5");
    day.textContent = forecastDay.day;//Pendiente
    div.appendChild(day);
    const hr = document.createElement("hr"); //Crea una línea
    hr.classList.add("line");
    div.appendChild(hr);
    const img = document.createElement("img");
    img.src = `${forecastDay.icon}`;//Pendiente de revisar
    img.alt = "Clima"
    div.appendChild(img);
    const temperature = document.createElement("p");
    temperature.textContent = `${forecastDay.maxTemperature}°/${forecastDay.minTemperature}°`;
    div.appendChild(temperature);

    return div;
}

//Pendiente función para renderizar las forecastCards
export const renderForecastInformation = (forecast) =>{

}