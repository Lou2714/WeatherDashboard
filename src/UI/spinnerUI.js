const createSpinner = () =>{
    const spinnerContainer = document.createElement("div");
    spinnerContainer.classList.add("d-flex", "justify-content-center");
    const spinner = document.createElement("div");
    spinner.classList.add("spinner-border", "spinner", "m-5");
    spinner.role = "status";
    const span = document.createElement("span");
    span.classList.add("visually-hidden");
    span.textContent = "Loading...";
    spinner.appendChild(span);
    spinnerContainer.appendChild(spinner);

    return spinnerContainer;
}

export const hideSpinner = (container) =>{
    const spinner = container.querySelector(".spinner");
    //Si existe el componente spinner en el contenedor, lo elimina
    if (spinner) {
        spinner.remove();
    }
}

export const showSpinner = (container) =>{
    //Crea el spinner y lo agrega al contenedor deseado
    const spinner = createSpinner();
    container.appendChild(spinner);
}