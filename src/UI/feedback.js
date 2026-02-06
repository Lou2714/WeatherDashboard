const createErrorMessage = (errorMessage) =>{
    const errorMessageContainer = document.createElement("div");
    errorMessageContainer.classList.add("absolutePosition", "alertContainer");
    const divAlert = document.createElement("div");
    divAlert.classList.add("alert", "alert-danger", "text-center");
    divAlert.role = "alert"
    divAlert.textContent = errorMessage;

    errorMessageContainer.appendChild(divAlert);

    return errorMessageContainer;
}

export const showErrorAlert = (container, message) =>{
    const feedbackError = createErrorMessage(message);
    container.appendChild(feedbackError);
}

export const clearErrorAlert = (container) =>{
    const errorAlert = container.querySelector(".alertContainer");
    //Si existe el componente errorAlert en el contenedor, lo elimina
    if (errorAlert) {
        errorAlert.remove();
    }
}