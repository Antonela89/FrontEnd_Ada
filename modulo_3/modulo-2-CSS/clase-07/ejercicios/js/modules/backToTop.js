// ==========================================================================
// MÓDULO: BOTÓN "VOLVER ARRIBA" (backToTop.js)
// ==========================================================================

// --- FUNCIÓN DE INICIALIZACIÓN ---
export function initializeBackToTop() {

    // --- SELECCIÓN DEL ELEMENTO ---
    //
    // Primero, obtengo la referencia al botón en el DOM a través de su ID.
    // He optado por un ID porque sé que este botón será único en toda la página.
    const button = document.getElementById('back-to-top-button');

    // He añadido una guarda de seguridad (early return). Si por alguna razón
    // el botón no existe en el HTML, el script no continuará y evitará errores
    // en la consola. Es una buena práctica defensiva.
    if (!button) {
        // Podría añadir un console.warn aquí si quisiera ser más explícito durante el desarrollo.
        return;
    }
    // --- LÓGICA DE VISIBILIDAD BASADA EN SCROLL ---
    //  Añado un event listener al objeto 'window' que se disparará cada vez que el usuario haga scroll en la página.

    window.addEventListener('scroll', () => {
        // Dentro del listener, compruebo la posición vertical del scroll.
        // He elegido 'window.scrollY' por su amplia compatibilidad entre navegadores.
        
        // Decidí que 300px es una distancia razonable para empezar a mostrar el botón.
        // Es lo suficientemente lejos como para que el usuario ya haya navegado un poco,
        // pero no tanto como para que el botón aparezca demasiado tarde.
        if (window.scrollY > 300) {
            // Si el scroll ha superado los 300px, elimino la clase 'is-hidden' de Bulma.
            // Confío en las transiciones de CSS para que esta aparición sea suave si así lo defino.
            button.classList.remove('is-hidden');
        } else {
            // Si el usuario vuelve a subir por encima de los 300px, vuelvo a ocultar el botón.
            button.classList.add('is-hidden');
        }
    });

    // La funcionalidad de 'scroll hacia arriba' la he manejado directamente en el HTML con '<a href="#hero">'.
    // Aprovecho el comportamiento nativo del navegador, que junto con mi regla 'scroll-behavior: smooth'
    // en CSS, crea el efecto deseado sin necesidad de JavaScript adicional para la animación del scroll.
    // Esto mantiene mi JavaScript enfocado únicamente en la lógica de visibilidad.
}