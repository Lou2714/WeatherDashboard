

export const getCurrentWeather = (location, language) =>{
    const request = fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${location}&lang=${language}`);
    const response = request.then((res) =>{
        return res.json();
    }).then((res) =>{
        if (res.error) {
            if (res.error.code === 1006) {
                throw new Error("No se encontró la ubicación ingresada");
            }else{
                throw new Error("No se pudo obtener los datos del clima");
            }
        }
        return res;
    })
    return response;
}

export const getForecast = (location, language) =>{
    const days = 4;
    const request = fetch(`http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${location}&days=${days}&lang=${language}`);
    const response = request.then((res) =>{
        return res.json();
    }).then((res) =>{
        if (condition) {
            if (res.error) {
                if (res.error.code === 1006) {
                    throw new Error("No es posible mostrar un pronóstico del clima");
                }else{
                    throw new Error("No se pudo obtener el pronóstico");
                }
            }
        }
        return res;
    })
    return response;
}