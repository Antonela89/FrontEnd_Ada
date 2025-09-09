document.addEventListener('DOMContentLoaded', () => {
    const cardStack = document.getElementById('cardStack');
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        // Almacenar el z-index original para poder restaurarlo al deseleccionar
        // getComputedStyle es necesario porque z-index puede venir de CSS
        card.dataset.originalZIndex = window.getComputedStyle(card).zIndex;

        card.addEventListener('click', () => {
            // Si la carta clicada ya está seleccionada, la deseleccionamos
            if (card.classList.contains('is-selected')) {
                card.classList.remove('is-selected');
                cardStack.classList.remove('has-selected-card'); // Quita la clase del contenedor
                card.style.removeProperty('z-index'); // Restaura el z-index original
            } else {
                // Deseleccionar cualquier otra carta que pueda estar seleccionada
                const currentSelected = cardStack.querySelector('.card.is-selected');
                if (currentSelected) {
                    currentSelected.classList.remove('is-selected');
                    currentSelected.style.removeProperty('z-index'); // Restaura el z-index original
                }

                // Seleccionar la carta clicada
                card.classList.add('is-selected');
                cardStack.classList.add('has-selected-card'); // Añade una clase al contenedor para cambiar el comportamiento de las otras cartas
                card.style.zIndex = 1000; // Asegura que la carta seleccionada esté encima de todo
            }
        });
    });
});