document.addEventListener('DOMContentLoaded', () => {
    // Selecciona todos los contenedores de mazos en la página
    const allCardStacks = document.querySelectorAll('.card-stack');

    // Itera sobre cada mazo para aplicar la lógica de forma independiente
    allCardStacks.forEach(stack => {
        const cards = stack.querySelectorAll('.card');

        cards.forEach(card => {
            // Almacena el z-index original para poder restaurarlo al deseleccionar
            card.dataset.originalZIndex = window.getComputedStyle(card).zIndex;

            card.addEventListener('click', () => {
                // Si la carta clicada ya está seleccionada, la deseleccionamos
                if (card.classList.contains('is-selected')) {
                    card.classList.remove('is-selected');
                    // Usamos 'stack' (el contenedor actual) en lugar de un ID fijo
                    stack.classList.remove('has-selected-card');
                    card.style.removeProperty('z-index');
                } else {
                    // Busca si ya hay una carta seleccionada DENTRO de este mazo
                    const currentSelected = stack.querySelector('.card.is-selected');
                    if (currentSelected) {
                        currentSelected.classList.remove('is-selected');
                        currentSelected.style.removeProperty('z-index');
                    }

                    // Seleccionar la carta clicada
                    card.classList.add('is-selected');
                    stack.classList.add('has-selected-card');
                    // Asigna un z-index alto para asegurar que esté al frente de todo
                    card.style.zIndex = 1000; 
                }
            });
        });
    });
});