export const openTemperatureMenu = (container) =>{
    container.classList.add("showTemperatureUnitOptionsContainer");
}
export const closeTemperatureMenu = (container) =>{
    container.classList.remove("showTemperatureUnitOptionsContainer");
}

export const getTemperatureUnitInputValue = (onUnitChange) =>{
    const temperatureUnitChecked = document.querySelector('input[name="temperatureUnit"]:checked');
    const temperatureUnitOptionsContainer = document.getElementById("temperatureUnitOptionsContainer");

    //Enviando valor por defecto
    if (temperatureUnitChecked) {
        onUnitChange(temperatureUnitChecked.value)
    }

    //Registando cambio de valor
    temperatureUnitOptionsContainer.addEventListener("change",(e) =>{
        if (e.target.name === "temperatureUnit") {
            const selectedUnit = e.target.value;
            onUnitChange(selectedUnit);
        }
    })
}