// js/modules/carousel.js (VERSIÓN FINAL Y A PRUEBA DE BALAS)

export function initializeCarousel(containerSelector) {
    const container = document.querySelector(containerSelector);
    if (!container) return;

    const track = container.querySelector('#planetas-container');
    const prevButton = container.querySelector('.carousel-nav-left');
    const nextButton = container.querySelector('.carousel-nav-right');
    const viewport = container.querySelector('.carousel-viewport');

    let currentIndex = 0;
    let slides;
    let slideWidth = 0;

    /**
     * Determina cuántos slides deben ser visibles según el ancho de la ventana.
     * Esta función es la que define tu diseño responsivo.
     */
    function getSlidesVisible() {
        if (window.innerWidth >= 1024) {
            return 4; // Desktop: 4 tarjetas visibles
        }
        if (window.innerWidth >= 769) {
            return 2; // Tablet: 2 tarjetas visibles
        }
        return 1; // Mobile: 1 tarjeta visible
    }

    /**
     * Calcula el ancho correcto de un slide y el ancho total del riel,
     * y aplica esos tamaños directamente a los elementos.
     */
    function setupCarouselDimensions() {
        slides = track.querySelectorAll('.carousel-slide');
        if (slides.length === 0) return;

        const slidesVisible = getSlidesVisible();
        const viewportWidth = viewport.getBoundingClientRect().width;
        
        // ¡LA MAGIA! Calculamos el ancho del slide dividiendo el ancho de la ventana visible.
        // Ya no medimos el slide, evitamos la race condition.
        slideWidth = viewportWidth / slidesVisible;

        // Establecemos el ancho total del riel basándonos en este cálculo preciso.
        track.style.width = `${slideWidth * slides.length}px`;

        // Aplicamos el ancho calculado a cada slide individualmente para forzar el tamaño.
        // Esto es lo que soluciona el texto vertical.
        slides.forEach(slide => {
            slide.style.width = `${slideWidth}px`;
        });
    }

    /**
     * Mueve el carrusel a la posición correcta y actualiza los botones.
     */
    function updateCarouselState() {
        if (!slides || slides.length === 0) return;

        const slidesVisible = getSlidesVisible();
        const offset = currentIndex * slideWidth;
        track.style.transform = `translateX(-${offset}px)`;
        
        prevButton.disabled = currentIndex === 0;
        nextButton.disabled = currentIndex >= slides.length - slidesVisible;
    }

    // --- Event Listeners ---
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

    // --- Lógica de Redimensionamiento (Resize) ---
    function debounce(func, delay = 100) {
        let timeoutId;
        return (...args) => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => { func.apply(this, args); }, delay);
        };
    }

    const debouncedResize = debounce(() => {
        currentIndex = 0;
        setupCarouselDimensions(); // Volver a calcular y aplicar todos los anchos
        updateCarouselState();   // Mover a la posición inicial
    });

    window.addEventListener('resize', debouncedResize);

    /**
     * Función que se devuelve para ser llamada desde main.js después de renderizar las tarjetas.
     */
    function initialSetup() {
        setupCarouselDimensions();
        updateCarouselState();
    }

    return { update: initialSetup };
}