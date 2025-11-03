// ==========================================================================
// MÓDULO: CONTROLADOR DE FILTROS DE LA TABLA (tableFilter.js)
// ==========================================================================
//
// Es el "cerebro" detrás de la tabla comparativa.
// Gestiona el estado del filtro actual, escucho los eventos del usuario (clics en botones,
// redimensionamiento de la ventana) y decide que renderizar ('comparativeTable.js')
// Esta separación es clave: 'comparativeTable.js' solo sabe cómo dibujar, y este módulo
// solo sabe qué dibujar.

// --- IMPORTACIÓN DE DEPENDENCIAS ---

import planetData from '../data/planetData.js'; // Necesito acceso a la fuente de datos completa.
import { renderComparativeTable } from './comparativeTable.js'; // Importo la función "tonta" de renderizado.

// --- GESTIÓN DEL ESTADO DEL MÓDULO ---

// He decidido mantener el estado del filtro actual en una variable a nivel de módulo.
// Esto me permite "recordar" la selección del usuario entre diferentes eventos,
// como un clic y un posterior redimensionamiento de la ventana.
let currentFilter = 'all';

// --- FUNCIONES DE UTILIDAD INTERNAS ---

/**
 * Función Debounce: Decidí incluir una función 'debounce' aquí porque el evento 'resize'
 * puede dispararse muy rápidamente, y no quiero volver a renderizar la tabla cientos de veces.
 * Esta utilidad asegura que la función de renderizado solo se ejecute una vez que el usuario
 * ha terminado de redimensionar, mejorando drásticamente el rendimiento.
 * @param {Function} func La función a ejecutar con retraso.
 * @param {number} delay El tiempo de espera en milisegundos.
 * @returns {Function} La nueva función "debounced".
 */
function debounce(func, delay = 250) {
    let timeoutId;
    return (...args) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}

/**
 * He encapsulado la lógica de filtrado y renderizado en su propia función.
 * Esto sigue el principio DRY (Don't Repeat Yourself), ya que necesito ejecutar
 * esta misma lógica tanto en la carga inicial, como en un clic, como en un resize.
 */
function filterAndRender() {
    // Aplico el filtro basado en el 'currentFilter' guardado.
    // El operador ternario es una forma concisa de manejar el caso especial de "todos".
    const filteredPlanets =
        currentFilter === 'all'
            ? planetData
            : planetData.filter((planet) => planet.type === currentFilter);
    
    // Una vez que tengo los datos correctos, simplemente llamo a la función de renderizado
    // y le paso los datos filtrados. Le he delegado toda la responsabilidad de dibujar el DOM.
    renderComparativeTable(filteredPlanets);
}

// --- FUNCIÓN PÚBLICA (EXPORTADA) ---

export function initializeTableFilter() {
    const filterContainer = document.getElementById('table-filters');
    if (!filterContainer) return;

    const filterButtons = filterContainer.querySelectorAll('button');

    // --- LÓGICA DE EVENTOS ---

    // Añado un listener a cada botón de filtro.
    filterButtons.forEach((button) => {
        button.addEventListener('click', () => {
            // Lógica de UI: actualizo el estilo para dar feedback visual inmediato al usuario.
            filterButtons.forEach((btn) => btn.classList.remove('is-primary'));
            button.classList.add('is-primary');

            // Actualizo mi variable de estado con el nuevo filtro seleccionado.
            currentFilter = button.dataset.filter;

            // Y finalmente, llamo a mi función central para que actualice la tabla.
            filterAndRender();
        });
    });

    // He creado una versión "debounced" de la función de renderizado para el evento 'resize'.
    const debouncedRender = debounce(filterAndRender, 250);

    // Adjunto el listener a la ventana. Ahora, cuando el usuario redimensione la página,
    // la tabla se volverá a dibujar (cambiando entre vista móvil y de escritorio)
    // manteniendo el filtro que el usuario había seleccionado.
    window.addEventListener('resize', debouncedRender);

    // Hago la llamada inicial para renderizar la tabla por primera vez cuando la página carga.
    filterAndRender();
}