// ==========================================================================
// MÓDULO: TIMELINE DE MISIONES ESPACIALES (timeline.js)
// ==========================================================================
//
// Renderiza una línea de tiempo cronológica utilizando la extensión 'Bulma-Timeline'. 
// Este es un componente puramente presentacional; no contiene lógica de estado ni de eventos 
// complejos, simplemente toma datos y los convierte en HTML.

// --- IMPORTACIÓN DE DATOS ---
//
// Al igual que con mis otros componentes, importo los datos desde un archivo
// dedicado. Esto me permite actualizar, añadir o quitar hitos históricos
// fácilmente, simplemente editando el array 'timelineData.js'.
import timelineData from '../data/timelineData.js';

// --- FUNCIÓN DE INICIALIZACIÓN EXPORTADA ---
//
// La función principal que se llamará desde 'main.js'.
export function initializeTimeline() {
	const container = document.getElementById('timeline-container');
	if (!container) return; // Guarda de seguridad estándar.

    // --- LÓGICA DE RENDERIZADO ---
    //
    // Decidí construir el timeline en tres partes: cabecera, contenido y pie.
    // Esto hace que la lógica de renderizado sea más estructurada y fácil de seguir.

	// Primero, inyecto la cabecera del timeline. He decidido usar 'innerHTML'
    // para este primer paso porque limpia cualquier contenido previo que pudiera
    // existir en el contenedor.
	container.innerHTML = `<header class="timeline-header">
                            	<span class="tag is-medium is-primary">Inicio</span>
                          	</header>`;

	// Luego, genero el HTML para todos los items del timeline.
    // Utilizo 'map()' para iterar sobre mis datos y transformar cada objeto 'item'
    // en la estructura HTML que requiere la extensión Bulma-Timeline.
	const timelineHTML = timelineData
		.map(
			(item) => `
                <div class="timeline-item">
                    <div class="timeline-marker is-icon">
                        <i class="fas ${item.icon}"></i>
                    </div>
                    <div class="timeline-content">
                        <p class="heading">${item.year} - ${item.agency}</p>
                        <p class="title is-5">${item.title}</p>
                        
                        <!-- 
                            He añadido un 'max-width' con la unidad 'ch' (ancho de caracter)
                            al párrafo de descripción. Esta es una decisión consciente para mejorar la
                            tipografía y la legibilidad. Limitar el ancho de línea a unos 60-75 caracteres
                            es una práctica recomendada en diseño web.
                        -->
                        <p style="max-width: 60ch;">${item.description}</p>
                    </div>
                </div>
            `
		)
		.join('');

	// Finalmente, genero el HTML para el pie del timeline.
	const timelineFooter = `<header class="timeline-header">
                                <span class="tag is-medium is-primary">Presente</span>
                            </header>`;

	// Para añadir el contenido principal y el pie, he optado por 'insertAdjacentHTML'.
    // A diferencia de 'innerHTML = ...', este método no destruye y reconstruye el
    // contenido existente (la cabecera), sino que simplemente añade el nuevo HTML
    // al final del contenedor. Es ligeramente más performante en este caso.
	container.insertAdjacentHTML('beforeend', timelineHTML);
	container.insertAdjacentHTML('beforeend', timelineFooter);
}