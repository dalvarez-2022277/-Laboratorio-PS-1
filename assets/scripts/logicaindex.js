// Función para abrir el popup
function openPopup(event, popupId) {
    event.preventDefault(); // Prevenir el comportamiento predeterminado del enlace
    var popup = document.getElementById(popupId);
    popup.style.display = "block";
}

// Función para cerrar el popup
function closePopup(popupId) {
    var popup = document.getElementById(popupId);
    popup.style.display = "none";
}
