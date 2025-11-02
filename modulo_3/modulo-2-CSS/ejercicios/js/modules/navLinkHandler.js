// ==========================================================================
// MÓDULO: MANEJADOR DE ENLACES DE NAVEGACIÓN ESPECIALES (navLinkHandler.js)
// ==========================================================================
//
// Actuar como un "mediator" o "intermediario".
// Escucha eventos en un componente (el Navbar) y dispara acciones en otro
// componente (las Pestañas de "Otros Cuerpos").
// Decidí crear este módulo para mantener los otros dos ('navbar.js' y 'otherBodies.js')
// completamente desacoplados y sin conocimiento el uno del otro. Esta es una decisión
// de arquitectura clave para la mantenibilidad: si cambio la implementación de las pestañas,
// solo necesito ajustar este "pegamento", sin tocar el navbar.

export function initializeNavLinkHandler() {
    
    // --- SELECCIÓN DE ENLACES OBJETIVO ---
    //
    // No quiero afectar a todos los enlaces del menú, solo a los que necesitan
    // un comportamiento especial. Para ello, he establecido una convención:
    // cualquier enlace que deba controlar las pestañas tendrá un 'href' que comience
    // con "#show-".
    // Este selector de atributos CSS ('[href^=...]') es increíblemente potente y me permite
    // seleccionar precisamente estos enlaces sin necesidad de añadir clases adicionales.
    const navLinks = document.querySelectorAll('a.navbar-item[href^="#show-"]');

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            
            // --- GESTIÓN DEL EVENTO ---
            //
            // Es crucial prevenir el comportamiento por defecto del navegador. Sin esto,
            // el navegador intentaría saltar a un ancla que no existe, lo que podría
            // mover la página de forma inesperada.
            event.preventDefault();

            // --- LÓGICA DE "TRADUCCIÓN" Y ACCIÓN ---
            //
            // He establecido una segunda convención: el 'href' del enlace (ej. "#show-asteroides")
            // se corresponde directamente con el 'id' de la pestaña a activar (ej. "tab-asteroides").
            // Esta línea simplemente "traduce" un formato al otro.
            const targetTabId = link.getAttribute('href').replace('#show-', 'tab-');

            // Una vez que tengo el ID de la pestaña objetivo, la busco en el DOM.
            const targetTab = document.getElementById(targetTabId);
            
            if (targetTab) {
                // MI DECISIÓN MÁS IMPORTANTE AQUÍ: En lugar de replicar la lógica para
                // mostrar/ocultar pestañas (que ya existe en 'otherBodies.js'), simplemente
                // simulo un clic en la pestaña objetivo.
                // Esto es un ejemplo del principio DRY (Don't Repeat Yourself). Reutilizo
                // la funcionalidad existente, asegurando que si en el futuro cambio cómo
                // funcionan las pestañas, solo necesito cambiarlo en un lugar ('otherBodies.js'),
                // y este módulo seguirá funcionando sin modificaciones.
                targetTab.click();
            }

            // --- MEJORA DE LA EXPERIENCIA DE USUARIO (UX) ---
            //
            // Después de cambiar la pestaña, es muy probable que el usuario no la esté viendo
            // si estaba en otra parte de la página. Por eso, he decidido forzar un
            // desplazamiento suave hasta la sección de "Otros Cuerpos".
            // 'scrollIntoView' con 'behavior: smooth' proporciona una transición elegante
            // que le da al usuario un contexto claro de lo que acaba de suceder.
            const otherBodiesSection = document.getElementById('otrosCuerpos');
            if (otherBodiesSection) {
                otherBodiesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}