// Define qué características quieres mostrar en la tabla y en qué orden
const featuresToShow = [
	{ key: 'Diámetro Ecuatorial', label: 'Diámetro Ecuatorial' },
	{ key: 'Distancia media al Sol', label: 'Distancia al Sol (mill. km)' },
	{ key: 'Período Orbital (Año)', label: 'Duración del Año' },
	{ key: 'Período de Rotación (Día)', label: 'Duración del Día' },
	{ key: 'Gravedad en la superficie', label: 'Gravedad (m/s²)' },
	{ key: 'Número de Lunas', label: 'Número de Lunas' },
];

// La función ahora ACEPTA los datos como un parámetro
export function renderComparativeTable(planetsToRender) {
	const container = document.getElementById('comparative-table-container');
	if (!container) return;

	// La lógica ahora usa 'planetsToRender'
	const tableHead = `
        <thead>
            <tr>
                <th><abbr title="Característica">Característica</abbr></th>
                ${planetsToRender
					.map((planet) => `<th>${planet.name}</th>`)
					.join('')}
            </tr>
        </thead>
    `;

	const tableBodyRows = featuresToShow
		.map((feature) => {
			const cells = planetsToRender
				.map(
					(planet) => `<td>${planet.data[feature.key] || 'N/A'}</td>`
				)
				.join('');
			return `<tr><th>${feature.label}</th>${cells}</tr>`;
		})
		.join('');

	const tableBody = `<tbody>${tableBodyRows}</tbody>`;

	// --- Ensamblar la Tabla Completa ---
	const fullTableHTML = `
        <div class="table-container">
            <table class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
                ${tableHead}
                ${tableBody}
            </table>
        </div>
    `;

	container.innerHTML = fullTableHTML;
}
