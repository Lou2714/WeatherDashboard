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
    const date = new Date(dateString);

}