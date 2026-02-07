export const getCurrentDate = () =>{
    const date = new Date();
    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    };
    return date.toLocaleDateString("es-ES", options);
}

export const getDayFromADate = (dateString) =>{
    //Creando un objeto date a partir de un string
    const date = new Date(`${dateString}T12:00:00`);
    const options = {
        weekday: "long"
    };
    const dateDay = date.toLocaleDateString("es-ES", options);
    return dateDay;
}