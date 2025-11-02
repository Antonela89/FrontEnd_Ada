// js/modules/tableFilter.js

import planetData from '../data/planetData.js';
// Asegúrate de que el nombre del archivo sea correcto.
// En el paso anterior lo llamamos 'comparativeTable.js', así que lo uso aquí.
import { renderComparativeTable } from './comparativeTable.js';

// Variable para guardar el estado del filtro actual
let currentFilter = 'all';

/**
 * Función Debounce: Retrasa la ejecución de una función hasta que haya pasado
 * un tiempo determinado sin que se vuelva a llamar.
 * @param {Function} func - La función a ejecutar.
 * @param {number} delay - El tiempo de espera en milisegundos.
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
 * Función que se encarga de filtrar los datos y llamar a la función de renderizado.
 */
function filterAndRender() {
    const filteredPlanets =
        currentFilter === 'all'
            ? planetData
            : planetData.filter((planet) => planet.type === currentFilter);
    
    renderComparativeTable(filteredPlanets);
}


export function initializeTableFilter() {
    const filterContainer = document.getElementById('table-filters');
    if (!filterContainer) return;

    const filterButtons = filterContainer.querySelectorAll('button');

    filterButtons.forEach((button) => {
        button.addEventListener('click', () => {
            // Actualizar el estilo de los botones
            filterButtons.forEach((btn) => btn.classList.remove('is-primary'));
            button.classList.add('is-primary');

            // Actualizar el filtro actual
            currentFilter = button.dataset.filter;

            // Volver a dibujar la tabla con el nuevo filtro
            filterAndRender();
        });
    });

    // --- ¡AQUÍ ESTÁ EL LISTENER DE RESIZE! ---
    // Creamos una versión "debounced" de nuestra función de renderizado.
    const debouncedRender = debounce(filterAndRender, 250);

    // Añadimos el event listener a la ventana.
    window.addEventListener('resize', debouncedRender);

    // Carga inicial de la tabla con todos los planetas
    filterAndRender(); // Usamos la nueva función para la carga inicial
}