document.addEventListener('DOMContentLoaded', function () {
    // Obtener los elementos relevantes
    const infoIcons = document.querySelectorAll('.info-icon');
    const popupContainer = document.querySelector('.popup-container');
    const closePopupBtn = document.querySelector('.close-popup');

    // Agregar eventos de clic a los iconos de información
    infoIcons.forEach(icon => {
        icon.addEventListener('click', () => {
            // Mostrar el pop-up al hacer clic en el icono de información
            popupContainer.style.display = 'flex';
        });
    });

    // Agregar evento de clic para cerrar el pop-up
    closePopupBtn.addEventListener('click', () => {
        // Ocultar el pop-up al hacer clic en el botón de cerrar
        popupContainer.style.display = 'none';
    });
});
