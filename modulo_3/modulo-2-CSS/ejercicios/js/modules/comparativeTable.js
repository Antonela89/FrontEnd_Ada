// js/modules/comparativeTable.js

const featuresToShow = [
    { key: 'Diámetro Ecuatorial', label: 'Diámetro Ecuatorial' },
    { key: 'Distancia media al Sol', label: 'Distancia al Sol (mill. km)' },
    { key: 'Período Orbital (Año)', label: 'Duración del Año' },
    { key: 'Período de Rotación (Día)', label: 'Duración del Día' },
    { key: 'Gravedad en la superficie', label: 'Gravedad (m/s²)' },
    { key: 'Número de Lunas', label: 'Número de Lunas' },
];

export function renderComparativeTable(planetsToRender) {
    const container = document.getElementById('comparative-table-container');
    if (!container) return;

    const isMobileView = window.innerWidth < 769;
    let fullTableHTML;

    if (isMobileView) {
        // --- VISTA MÓVIL (Transpuesta) ---
        fullTableHTML = planetsToRender.map(planet => `
            <div class="box mb-4">
                <h3 class="title is-4 has-text-dark">${planet.name}</h3>
                <table class="table is-fullwidth is-striped">
                    <tbody>
                        ${featuresToShow.map(feature => `
                            <tr>
                                <th>${feature.label}</th>
                                <td>${planet.data[feature.key] || 'N/A'}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        `).join('');
    } else {
        // --- VISTA DESKTOP (Tabla Original) - CÓDIGO RESTAURADO ---
        
        // 1. Construir el Encabezado (<thead>)
        const tableHead = `
            <thead>
                <tr>
                    <th><abbr title="Características">Características</abbr></th>
                    ${planetsToRender.map(planet => `<th>${planet.name}</th>`).join('')}
                </tr>
            </thead>
        `;

        // 2. Construir el Cuerpo (<tbody>)
        const tableBodyRows = featuresToShow.map(feature => {
            const cells = planetsToRender.map(planet => `<td>${planet.data[feature.key] || 'N/A'}</td>`).join('');
            return `<tr><th>${feature.label}</th>${cells}</tr>`;
        }).join('');

        const tableBody = `<tbody>${tableBodyRows}</tbody>`;

        // 3. Ensamblar la Tabla Completa
        fullTableHTML = `
            <div class="table-container">
                <table class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
                    ${tableHead}
                    ${tableBody}
                </table>
            </div>
        `;
    }

    container.innerHTML = fullTableHTML;
}