import planetData from '../data/planetData.js';
import { renderComparativeTable } from './comparativeTable.js';

export function initializeTableFilter() {
	const filterContainer = document.getElementById('table-filters');
	if (!filterContainer) return;

	const filterButtons = filterContainer.querySelectorAll('button');

	filterButtons.forEach((button) => {
		button.addEventListener('click', () => {
			// Actualizar el estilo de los botones
			filterButtons.forEach((btn) => btn.classList.remove('is-primary'));
			button.classList.add('is-primary');

			const filter = button.dataset.filter;

			// Filtrar los datos
			const filteredPlanets =
				filter === 'all'
					? planetData
					: planetData.filter((planet) => planet.type === filter);

			// Volver a dibujar la tabla con los datos filtrados
			renderComparativeTable(filteredPlanets);
		});
	});

	// Carga inicial de la tabla con todos los planetas
	renderComparativeTable(planetData);
}
