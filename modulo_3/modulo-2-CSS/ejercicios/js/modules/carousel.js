export function initializeCarousel(containerSelector) {
    const container = document.querySelector(containerSelector);
    if (!container) return;

    const track = container.querySelector('#planetas-container');
    const prevButton = container.querySelector('.carousel-nav-left');
    const nextButton = container.querySelector('.carousel-nav-right');
    
    let currentIndex = 0;
    let slides;
    let slideWidth = 0; // Variable para almacenar el ancho medido

    /**
     * Mide el ancho de una tarjeta y establece el ancho total del riel.
     * Se ejecuta solo al inicio y al redimensionar la ventana.
     */
    function setupCarouselDimensions() {
        slides = track.querySelectorAll('.column');
        if (slides.length === 0) return;

        // Medimos el ancho de la primera tarjeta y lo guardamos
        slideWidth = slides[0].getBoundingClientRect().width;
        
        // Establecemos el ancho total del riel
        track.style.width = `${slideWidth * slides.length}px`;
    }

    /**
     * Aplica la transformación para mover el carrusel y actualiza los botones.
     * Usa el 'slideWidth' que ya hemos medido.
     */
    function updateCarouselState() {
        if (slides.length === 0) return;

        track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;

        prevButton.disabled = currentIndex === 0;
        
        const slidesVisible = Math.floor(container.querySelector('.carousel-viewport').clientWidth / slideWidth);
        nextButton.disabled = currentIndex >= slides.length - slidesVisible;
    }

    // --- Event Listeners ---
    nextButton.addEventListener('click', () => {
        currentIndex++;
        updateCarouselState();
    });

    prevButton.addEventListener('click', () => {
        currentIndex--;
        updateCarouselState();
    });

    window.addEventListener('resize', () => {
        // Al redimensionar, reseteamos todo para asegurar que las medidas son correctas
        currentIndex = 0;
        setupCarouselDimensions(); // Volvemos a medir
        updateCarouselState();   // Y actualizamos la posición
    });

    /**
     * Función que se devuelve para ser llamada desde main.js después de renderizar las tarjetas.
     */
    function initialSetup() {
        setupCarouselDimensions();
        updateCarouselState();
    }

    return { update: initialSetup };
}