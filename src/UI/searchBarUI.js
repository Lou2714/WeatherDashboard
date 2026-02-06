export const getCityName = (onCitySearch) =>{
    const searchBar = document.getElementById("searchCity");
    
    searchBar.addEventListener("keydown",(e) =>{
        if (e.key == "Enter") {
            //Cuando el usuario de un enter se envía el texto a la función callback
            onCitySearch(e.target.value);
            //Limpia la barra de busqueda
            searchBar.value = "";
        }
        
    })
    
}