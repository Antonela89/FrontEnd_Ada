// ==========================================================================
// MÓDULO: TARJETAS DE PLANETAS INTERACTIVAS (flipCard.js)
// ==========================================================================
//
// Primero, renderiza dinámicamente las tarjetas de los planetas a partir de una fuente de datos; 
// segundo, añade la funcionalidad de "giro" (flip) a cada tarjeta.
// He decidido mantener ambas responsabilidades en este módulo porque están
// intrínsecamente ligadas: la funcionalidad depende directamente del HTML que se genera.

// --- IMPORTACIÓN DE DEPENDENCIAS ---
//
// Importo 'planetData' desde mi módulo de datos. Esta separación es clave
// en mi arquitectura: si necesito actualizar la información de un planeta,
// solo toco el archivo de datos, y este módulo renderizará automáticamente los cambios.
import planetData from '../data/planetData.js';

// --- FUNCIONES INTERNAS (ENCAPSULADAS) ---

/**
 * Adjunta los event listeners a los botones de giro.
 * Decidí hacer esta función separada para mejorar la legibilidad y porque
 * es CRUCIAL que se llame DESPUÉS de que el HTML de las tarjetas se haya inyectado en el DOM.
 * Si la llamara antes, los 'querySelectorAll' no encontrarían ningún botón.
 */
function attachFlipEventListeners() {
    const flipButtons = document.querySelectorAll('.js-flip-button');

    flipButtons.forEach(button => {
        // He implementado una salvaguarda con un atributo 'data-'. Esto evita que,
        // por error, se añada el mismo listener varias veces al mismo botón si esta
        // función se llamara de nuevo. Es una pequeña optimización y una buena práctica defensiva.
        if (!button.hasAttribute('data-listener-attached')) {
            button.addEventListener('click', (event) => {
                event.preventDefault(); // Evito que el enlace '#' mueva la página.
                
                // Uso 'closest()' para encontrar el contenedor '.flip-card-inner' padre.
                // Esta es una técnica robusta que no depende de una estructura de DOM fija
                // entre el botón y el contenedor que debe girar.
                const cardInner = button.closest('.flip-card-inner');
                if (cardInner) {
                    // La animación de giro la delego completamente a CSS. Mi única
                    // responsabilidad en JS es alternar ('toggle') una clase.
                    // Esta separación entre comportamiento (JS) y apariencia (CSS) es fundamental.
                    cardInner.classList.toggle('is-flipped');
                }
            });
            button.setAttribute('data-listener-attached', 'true');
        }
    });
}

/**
 * Genera el string de HTML para una única tarjeta.
 * Esta es una función "pura": recibe un objeto 'planet' y devuelve un string.
 * No tiene efectos secundarios, lo que la hace predecible y fácil de probar.
 * @param {object} planet - Un objeto de planeta del array planetData.
 * @returns {string} El string de HTML completo para la tarjeta.
 */
function generatePlanetCardHTML(planet) {
    // Para la tabla de datos en la cara trasera, he decidido generarla dinámicamente
    // iterando sobre el objeto de datos del planeta. Esto me permite añadir o quitar
    // datos en el futuro sin tener que tocar este template.
    let tableRows = '';
    for (const [key, value] of Object.entries(planet.data)) {
        tableRows += `<tr><td>${key}:</td><td>${value}</td></tr>`;
    }

    // He optado por template literals (backticks `) para construir el HTML.
    // Son mucho más legibles y mantenibles que la concatenación de strings.
    // La estructura HTML (flip-card, flip-card-inner, etc.) la diseñé específicamente
    // para la animación de giro en 3D con CSS.
    return `
        <div class="carousel-slide">
            <div class="flip-card" id="${planet.name.toLowerCase()}">
                <div class="flip-card-inner">
                    <!-- CARA FRONTAL -->
                    <div class="flip-card-front">
                        <div class="card has-background-dark has-text-white">
                            <div class="card-image"><figure class="image"><img src="${planet.image}" alt="${planet.name}"></figure></div>
                            <div class="card-content">
                                <p class="title is-4 has-text-white">${planet.name}</p>
                                <p class="subtitle is-6 has-text-grey-light">${planet.subtitle}</p>
                                <div class="content">${planet.description}</div>
                            </div>
                            <footer class="card-footer"><a href="#" class="card-footer-item button is-primary is-inverted is-outlined js-flip-button">Más Información</a></footer>
                        </div>
                    </div>
                    <!-- CARA TRASERA -->
                    <div class="flip-card-back">
                        <div class="card has-background-dark has-text-white">
                            <div class="card-content">
                                <p class="title is-4 has-text-white">Datos Clave</p>
                                <div class="content"><table class="table is-bordered is-narrow is-fullwidth has-background-dark has-text-white"><tbody>${tableRows}</tbody></table></div>
                            </div>
                            <footer class="card-footer"><a href="#" class="card-footer-item button is-light is-inverted is-outlined js-flip-button">Volver</a></footer>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// --- FUNCIÓN PÚBLICA (EXPORTADA) ---

/**
 * Esta es la función orquestadora del módulo.
 * Su flujo de trabajo es claro:
 * 1. Obtener el contenedor.
 * 2. Generar todo el HTML.
 * 3. Inyectarlo en el DOM.
 * 4. Adjuntar los manejadores de eventos.
 */
export function initializePlanetCards() {
    const planetsContainer = document.getElementById('planetas-container');
    if (!planetsContainer) {
        // Un console.warn es útil aquí para avisar durante el desarrollo si el punto de montaje no se encuentra.
        console.warn('Contenedor de planetas no encontrado. Saltando la inicialización de las tarjetas.');
        return;
    }

    // He elegido 'map()' seguido de 'join()' para generar el string HTML completo.
    // Es una forma funcional, concisa y generalmente más performante que un bucle 'forEach' con concatenación.
    const allCardsHTML = planetData.map(generatePlanetCardHTML).join('');
    
    // Inyecto el HTML de una sola vez con 'innerHTML'. Para una gran cantidad de elementos,
    // esto es mucho más rápido que crear y añadir cada nodo del DOM individualmente.
    planetsContainer.innerHTML = allCardsHTML;

    // El paso final y crucial: llamar a la función que da vida a los botones.
    attachFlipEventListeners();
}