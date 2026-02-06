const createSpinner = () =>{
    const spinnerContainer = document.createElement("div");
    spinnerContainer.classList.add("absolutePosition");
    const spinner = document.createElement("div");
    spinner.classList.add("spinner-border", "spinnerSize");
    spinner.role = "status";
    const span = document.createElement("span");
    span.classList.add("visually-hidden");
    span.textContent = "Loading...";
    spinner.appendChild(span);
    
    spinnerContainer.appendChild(spinner);

    return spinnerContainer;
}

export const hideSpinner = (container) =>{
    //spinnerPosition es el contenedor de posición absoluta
    const spinner = container.querySelector(".absolutePosition");
    //Si existe el componente absolutePosition en el contenedor, lo elimina
    if (spinner) {
        spinner.remove();
    }
}

export const showSpinner = (container) =>{
    //Crea el spinner y lo agrega al contenedor deseado
    const spinner = createSpinner();
    container.appendChild(spinner);
}