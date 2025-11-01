// js/modules/planetCards.js

// Paso 1: Importamos los datos de los planetas desde nuestro módulo de datos.
// La ruta '../data/planetData.js' asume la estructura de carpetas que definimos.
import planetData from '../data/planetData.js';

// --- FUNCIONES INTERNAS (solo se pueden usar dentro de este archivo) ---

/**
 * Busca todos los botones de giro en el DOM y les añade el event listener 'click'.
 * Esta función es clave porque debe ser llamada DESPUÉS de que el HTML de las tarjetas
 * ha sido inyectado en la página.
 */
function attachFlipEventListeners() {
    const flipButtons = document.querySelectorAll('.js-flip-button');

    flipButtons.forEach(button => {
        // Usamos una variable para evitar añadir el mismo listener dos veces si la función se llama de nuevo.
        if (!button.hasAttribute('data-listener-attached')) {
            button.addEventListener('click', (event) => {
                event.preventDefault();
                const cardInner = button.closest('.flip-card-inner');
                if (cardInner) {
                    cardInner.classList.toggle('is-flipped');
                }
            });
            button.setAttribute('data-listener-attached', 'true');
        }
    });
}

/**
 * Genera el string HTML para una única tarjeta de planeta.
 * @param {object} planet - Un objeto de planeta del array planetData.
 * @returns {string} El string HTML completo para la tarjeta.
 */
function generatePlanetCardHTML(planet) {
    // Generamos las filas de la tabla de datos dinámicamente.
    // Object.entries(planet.data) convierte el objeto de datos en un array de [key, value].
    let tableRows = '';
    for (const [key, value] of Object.entries(planet.data)) {
        tableRows += `<tr><td>${key}:</td><td>${value}</td></tr>`;
    }

    // Usamos template literals (`) para construir el HTML de forma legible.
    return `
        <div class="column is-one-quarter-desktop is-half-tablet">
            <div class="flip-card" id="${planet.name.toLowerCase()}">
                <div class="flip-card-inner">
                    <!-- CARA FRONTAL -->
                    <div class="flip-card-front">
                        <div class="card has-background-dark has-text-white">
                            <div class="card-image">
                                <figure class="image">
                                    <img src="${planet.image}" alt="${planet.name}">
                                </figure>
                            </div>
                            <div class="card-content">
                                <p class="title is-4 has-text-white">${planet.name}</p>
                                <p class="subtitle is-6 has-text-grey-light">${planet.subtitle}</p>
                                <div class="content">${planet.description}</div>
                            </div>
                            <footer class="card-footer">
                                <a href="#" class="card-footer-item button is-primary is-inverted is-outlined js-flip-button">Más Información</a>
                            </footer>
                        </div>
                    </div>
                    <!-- CARA TRASERA -->
                    <div class="flip-card-back">
                        <div class="card has-background-dark has-text-white">
                            <div class="card-content">
                                <p class="title is-4 has-text-white">Datos Clave</p>
                                <div class="content">
                                    <table class="table is-bordered is-narrow is-fullwidth has-background-dark has-text-white">
                                        <tbody>${tableRows}</tbody>
                                    </table>
                                </div>
                            </div>
                            <footer class="card-footer">
                                <a href="#" class="card-footer-item button is-light is-inverted is-outlined js-flip-button">Volver</a>
                            </footer>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// --- FUNCIÓN PÚBLICA (la que se exporta y se llama desde main.js) ---

/**
 * Orquesta todo el proceso:
 * 1. Encuentra el contenedor en el HTML.
 * 2. Genera el HTML para todas las tarjetas.
 * 3. Inyecta el HTML en el contenedor.
 * 4. Llama a la función para activar los botones.
 */
export function initializePlanetCards() {
    const planetsContainer = document.getElementById('planetas-container');
    if (!planetsContainer) {
        console.warn('Contenedor de planetas no encontrado. Saltando la inicialización de las tarjetas.');
        return; // Salir de la función si el contenedor no existe en la página.
    }

    // Usamos map() para generar el HTML de cada tarjeta y join('') para unir todo en un solo string.
    const allCardsHTML = planetData.map(generatePlanetCardHTML).join('');
    
    // Inyectamos el HTML generado en el DOM.
    planetsContainer.innerHTML = allCardsHTML;

    // ¡Paso crucial! Ahora que las tarjetas existen en la página,
    // llamamos a la función que les añade la interactividad.
    attachFlipEventListeners();
}


// <div class="columns is-multiline">
//                 <div class="column is-one-quarter-desktop is-half-tablet">
//                     <!-- 1. Contenedor principal para la perspectiva 3D -->
//                     <div class="flip-card">
//                         <!-- 2. Contenedor interno que realizará la animación de giro -->
//                         <div class="flip-card-inner">

//                             <!-- 3. CARA FRONTAL DE LA TARJETA -->
//                             <div class="flip-card-front">
//                                 <div class="card has-background-dark has-text-white">
//                                     <div class="card-image">
//                                         <figure class="image">
//                                             <img src="https://content.nationalgeographic.com.es/medio/2022/07/31/el-planeta-mercurio_c7bafef8_1280x720.jpg"
//                                                 alt="Mercurio">
//                                         </figure>
//                                     </div>
//                                     <div class="card-content">
//                                         <div class="media">
//                                             <div class="media-content">
//                                                 <p class="title is-4 has-text-white">Mercurio</p>
//                                                 <p class="subtitle is-6 has-text-grey-light">El Mensajero Veloz</p>
//                                             </div>
//                                         </div>
//                                         <div class="content">
//                                             El planeta más pequeño y más cercano al Sol. Posee un terreno lleno de
//                                             cráteres, similar al de la Luna.
//                                         </div>
//                                     </div>
//                                     <footer class="card-footer">
//                                         <!-- Este botón activará el giro -->
//                                         <a href="#"
//                                             class="card-footer-item button is-primary is-inverted is-outlined js-flip-button">Más
//                                             Información</a>
//                                     </footer>
//                                 </div>
//                             </div>

//                             <!-- 4. CARA TRASERA DE LA TARJETA -->
//                             <div class="flip-card-back">
//                                 <div class="card has-background-dark has-text-white">
//                                     <div class="card-content">
//                                         <p class="title is-4 has-text-white">Datos Clave</p>
//                                         <div class="content">
//                                             <table
//                                                 class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth has-background-dark has-text-white">
//                                                 <tbody>
//                                                     <tr>
//                                                         <td>Diámetro:</td>
//                                                         <td>4,879 km</td>
//                                                     </tr>
//                                                     <tr>
//                                                         <td>Distancia al Sol:</td>
//                                                         <td>57.9 mill. km</td>
//                                                     </tr>
//                                                     <tr>
//                                                         <td>Duración del Día:</td>
//                                                         <td>59 días terrestres</td>
//                                                     </tr>
//                                                     <tr>
//                                                         <td>Duración del Año:</td>
//                                                         <td>88 días terrestres</td>
//                                                     </tr>
//                                                     <tr>
//                                                         <td>Gravedad:</td>
//                                                         <td>3.7 m/s²</td>
//                                                     </tr>
//                                                 </tbody>
//                                             </table>
//                                         </div>
//                                     </div>
//                                     <footer class="card-footer">
//                                         <!-- Este botón devolverá la tarjeta a su estado original -->
//                                         <a href="#"
//                                             class="card-footer-item button is-light is-inverted is-outlined js-flip-button">Volver</a>
//                                     </footer>
//                                 </div>
//                             </div>

//                         </div>
//                     </div>
//                 </div>