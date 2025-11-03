// ==========================================================================
// MÓDULO: RENDERIZADOR DE LA TABLA COMPARATIVA (comparativeTable.js)
// ==========================================================================
//
// Renderiza una tabla comparativa de planetas.
// Decidí que este módulo no debería contener lógica de estado ni de eventos;
// es un módulo "tonto" (dumb component) que simplemente recibe datos ('planetsToRender')
// y los muestra en el DOM. La lógica de qué datos mostrar la he delegado
// a otro módulo ('tableFilter.js'), siguiendo el principio de responsabilidad única.

// --- CONFIGURACIÓN DE DATOS ---
//
// He definido las características a mostrar en una constante. Esto desacopla la
// configuración de la lógica de renderizado. Si en el futuro quiero añadir o quitar
// una fila de la tabla, solo necesito modificar este array, sin tocar el resto del código.
// He mapeado la 'key' del objeto de datos (ej. 'Diámetro Ecuatorial') a una 'label'
// más amigable para el usuario.
const featuresToShow = [
    { key: 'Diámetro Ecuatorial', label: 'Diámetro Ecuatorial' },
    { key: 'Distancia media al Sol', label: 'Distancia al Sol (mill. km)' },
    { key: 'Período Orbital (Año)', label: 'Duración del Año' },
    { key: 'Período de Rotación (Día)', label: 'Duración del Día' },
    { key: 'Gravedad en la superficie', label: 'Gravedad (m/s²)' },
    { key: 'Número de Lunas', label: 'Número de Lunas' },
];

// --- FUNCIÓN DE RENDERIZADO EXPORTADA ---
//
// Exporto una sola función, 'renderComparativeTable'. Su nombre es claro:
// renderiza la tabla. Al aceptar 'planetsToRender' como parámetro, la hago
// reutilizable y fácil de probar.

export function renderComparativeTable(planetsToRender) {
    const container = document.getElementById('comparative-table-container');
    if (!container) return; // Guarda de seguridad estándar.

    // --- LÓGICA DE RENDERIZADO CONDICIONAL ---
    //
    // Esta es la decisión de arquitectura más importante de este módulo.
    // En lugar de intentar forzar una tabla ancha en una pantalla pequeña con scroll,
    // he optado por renderizar una estructura de HTML completamente diferente para móviles.
    // He definido el breakpoint en 769px para que coincida con el breakpoint 'tablet' de Bulma.
    const isMobileView = window.innerWidth < 769;
    let fullTableHTML;

    if (isMobileView) {
        // --- VISTA MÓVIL: TABLAS TRANSPUESTAS ---
        //
        // Para móviles, decidí que una tabla por planeta, con las características en filas,
        // es infinitamente más legible. He utilizado `map` para iterar sobre los planetas
        // a renderizar y he creado un `div.box` para cada uno, agrupando visualmente sus datos.
        // El resultado es una vista de "tarjetas de datos" apiladas verticalmente.
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
        // --- VISTA DESKTOP/TABLET: TABLA HORIZONTAL ESTÁNDAR ---
        //
        // Para pantallas más anchas, genero la tabla comparativa tradicional.
        // He dividido la construcción del HTML en partes lógicas (head, body)
        // para mejorar la legibilidad del código.
        
        const tableHead = `
            <thead>
                <tr>
                    <th><abbr title="Características">Características</abbr></th>
                    ${planetsToRender.map(planet => `<th>${planet.name}</th>`).join('')}
                </tr>
            </thead>
        `;

        const tableBodyRows = featuresToShow.map(feature => {
            const cells = planetsToRender.map(planet => `<td>${planet.data[feature.key] || 'N/A'}</td>`).join('');
            return `<tr><th>${feature.label}</th>${cells}</tr>`;
        }).join('');

        const tableBody = `<tbody>${tableBodyRows}</tbody>`;

        // Finalmente, ensamblo la tabla completa, envolviéndola en el '.table-container' de Bulma.
        // Esta es la solución nativa de Bulma para la responsividad de tablas, aunque he decidido
        // no usarla en móvil en favor de la vista transpuesta, que considero superior para la UX.
        fullTableHTML = `
            <div class="table-container">
                <table class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
                    ${tableHead}
                    ${tableBody}
                </table>
            </div>
        `;
    }

    // --- INYECCIÓN EN EL DOM ---
    //
    // Una vez que el string HTML está construido, lo inyecto en el contenedor
    // de una sola vez con 'innerHTML'. Esto es generalmente más performante
    // que crear y añadir cada elemento del DOM uno por uno.
    container.innerHTML = fullTableHTML;
}