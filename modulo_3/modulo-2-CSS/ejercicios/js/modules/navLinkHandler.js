// js/modules/navLinkHandler.js

export function initializeNavLinkHandler() {
    // Seleccionamos solo los enlaces del menú que tienen nuestro prefijo 'show-'
    const navLinks = document.querySelectorAll('a.navbar-item[href^="#show-"]');

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Evita el salto de página brusco

            // 1. Extraer el ID del objetivo del href del enlace
            // Ejemplo: de "#show-asteroides" obtenemos "tab-asteroides"
            const targetTabId = link.getAttribute('href').replace('#show-', 'tab-');

            // 2. Encontrar la pestaña correspondiente por su ID
            const targetTab = document.getElementById(targetTabId);
            
            if (targetTab) {
                // 3. Simular un clic en esa pestaña.
                // Esto reutiliza toda la lógica que ya tienes en otherBodies.js
                targetTab.click();
            }

            // 4. (Opcional pero muy recomendado) Desplazar la vista a la sección
            const otherBodiesSection = document.getElementById('otrosCuerpos');
            if (otherBodiesSection) {
                otherBodiesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}