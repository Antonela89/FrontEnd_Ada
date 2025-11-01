export function initializeBackToTop() {
    const button = document.getElementById('back-to-top-button');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) { // Muestra el botón después de 300px de scroll
            button.classList.remove('is-hidden');
        } else {
            button.classList.add('is-hidden');
        }
    });
}