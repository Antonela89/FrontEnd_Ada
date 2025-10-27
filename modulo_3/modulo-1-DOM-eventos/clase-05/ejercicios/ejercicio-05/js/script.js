document.addEventListener('DOMContentLoaded', () => {
    // Selecciona todos los títulos/botones del acordeón
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    // Itera sobre cada uno para añadirle la funcionalidad
    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            // Selecciona el div de contenido que es hermano directo del botón
            const content = header.nextElementSibling;

            // Alterna la clase 'active' en el header (para la animación del ícono)
            header.classList.toggle('active');

            // Alterna la clase 'show' en el contenido para mostrarlo u ocultarlo
            content.classList.toggle('show');

            // --- COMPORTAMIENTO DE ACORDEÓN  ---
            // Si quieres que solo un item esté abierto a la vez, descomenta este bloque.
            
            accordionHeaders.forEach(otherHeader => {
                // Si este header no es el que acabamos de clickear...
                if (otherHeader !== header) {
                    const otherContent = otherHeader.nextElementSibling;
                    // ...y si su contenido está abierto, ciérralo.
                    if (otherContent.classList.contains('show')) {
                        otherContent.classList.remove('show');
                        otherHeader.classList.remove('active');
                    }
                }
            });
            
        });
    });
});