// ==========================================================================
// MÓDULO: CARRUSEL INTERACTIVO (carousel.js)
// ==========================================================================
//
// Gestiona toda la lógica de un carrusel responsivo.
// Decidí crear este componente desde cero en lugar de usar una librería externa
// para mantener el proyecto ligero y tener control total sobre el comportamiento y la apariencia.
// La arquitectura que elegí desacopla el cálculo de dimensiones de la actualización de estado,
// lo que ha demostrado ser la solución más robusta a los problemas de 'race condition'
// durante el redimensionamiento de la ventana.

// --- FUNCIÓN DE INICIALIZACIÓN ---
//
// Exporto una única función, 'initializeCarousel', que actúa como un 'constructor'.
// Acepta un 'containerSelector' para hacer el módulo reutilizable; podría tener
// múltiples carruseles en la misma página simplemente llamando a esta función con diferentes selectores.

export function initializeCarousel(containerSelector) {
    
    // --- SELECCIÓN DE ELEMENTOS DEL DOM ---
    //
    // Almaceno las referencias a los elementos del DOM una sola vez al inicio.
    // He incluido guardas de seguridad para evitar errores si algún elemento no se encuentra.
    const container = document.querySelector(containerSelector);
    if (!container) return;

    const track = container.querySelector('#planetas-container');
    const prevButton = container.querySelector('.carousel-nav-left');
    const nextButton = container.querySelector('.carousel-nav-right');
    const viewport = container.querySelector('.carousel-viewport');

    // --- GESTIÓN DEL ESTADO ---
    //
    // Defino las variables de estado en el scope de la función para encapsularlas.
    // 'currentIndex' rastrea la posición actual del carrusel (el slide en el extremo izquierdo).
    // 'slideWidth' almacenará el ancho calculado de cada slide, evitando recalcularlo constantemente.
    let currentIndex = 0;
    let slides;
    let slideWidth = 0;

    // --- FUNCIONES INTERNAS (LÓGICA PRINCIPAL) ---

    /**
     * Determina cuántos slides deben ser visibles.
     * He centralizado la lógica responsiva aquí. Los breakpoints (1024, 769)
     * los he elegido para que coincidan con los de Bulma (desktop, tablet).
     * Esta función es la "fuente de verdad" para el diseño responsivo del carrusel.
     */
    function getSlidesVisible() {
        if (window.innerWidth >= 1024) return 4;
        if (window.innerWidth >= 769) return 2;
        return 1;
    }

    /**
     * La función más crítica. Calcula y APLICA los anchos.
     * Mi decisión clave aquí fue dejar de MEDIR los slides y en su lugar CALCULAR
     * su ancho basándome en el viewport. Esto resolvió todos los problemas de 'race condition'.
     */
    function setupCarouselDimensions() {
        slides = track.querySelectorAll('.carousel-slide');
        if (slides.length === 0) return;

        const slidesVisible = getSlidesVisible();
        const viewportWidth = viewport.getBoundingClientRect().width;
        
        // El cálculo es simple y robusto: ancho_del_viewport / número_de_slides_visibles.
        slideWidth = viewportWidth / slidesVisible;

        // Aplico el ancho total al 'track' (riel) para que pueda desbordar correctamente.
        track.style.width = `${slideWidth * slides.length}px`;

        // Y crucialmente, aplico el ancho calculado a cada slide individualmente.
        // Esto fuerza su tamaño y evita que colapsen.
        slides.forEach(slide => {
            slide.style.width = `${slideWidth}px`;
        });
    }

    /**
     * Mueve el carrusel y actualiza el estado de los botones.
     * Esta función es muy rápida, ya que solo aplica una transformación CSS
     * y comprueba el estado de los botones.
     */
    function updateCarouselState() {
        if (!slides || slides.length === 0) return;

        const slidesVisible = getSlidesVisible();
        const offset = currentIndex * slideWidth;
        track.style.transform = `translateX(-${offset}px)`;
        
        // La lógica para deshabilitar los botones mejora la UX, evitando clics inútiles.
        prevButton.disabled = currentIndex === 0;
        nextButton.disabled = currentIndex >= slides.length - slidesVisible;
    }

    // --- EVENT LISTENERS ---
    
    // La lógica de los botones de navegación es simple: actualizan el 'currentIndex'
    // y llaman a la función que actualiza la UI.
    nextButton.addEventListener('click', () => {
        const slidesVisible = getSlidesVisible();
        if (currentIndex < slides.length - slidesVisible) {
            currentIndex++;
            updateCarouselState();
        }
    });

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarouselState();
        }
    });

    // He decidido usar 'debounce' para el evento 'resize'. Esto es una optimización
    // crucial para el rendimiento, evitando que la lógica de recalcular dimensiones
    // se ejecute cientos de veces mientras el usuario arrastra la ventana.
    function debounce(func, delay = 100) {
        let timeoutId;
        return (...args) => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => { func.apply(this, args); }, delay);
        };
    }

    const debouncedResize = debounce(() => {
        currentIndex = 0; // Reseteo a la primera slide para evitar estados extraños.
        setupCarouselDimensions();
        updateCarouselState();
    });

    window.addEventListener('resize', debouncedResize);

    // --- INTERFAZ PÚBLICA DEL MÓDULO ---

    /**
     * Esta es la función que expongo al 'main.js'.
     * La he diseñado para ser llamada DESPUÉS de que las tarjetas han sido
     * renderizadas en el DOM por otro módulo.
     */
    function initialSetup() {
        setupCarouselDimensions();
        updateCarouselState();
    }
    
    // Devuelvo un objeto con el método 'update'. Esto sigue el 'Revealing Module Pattern'
    // y me da una API clara y controlada para interactuar con el carrusel desde el exterior.
    return { update: initialSetup };
}