const TEMPERATURE_UNIT_KEY = "temperatureUnit";

export const saveTemperatureUnitChecked = (unit) =>{
    localStorage.setItem(TEMPERATURE_UNIT_KEY, unit);
}

export const getTemperatureUnit = () =>{
    return localStorage.getItem(TEMPERATURE_UNIT_KEY);
}