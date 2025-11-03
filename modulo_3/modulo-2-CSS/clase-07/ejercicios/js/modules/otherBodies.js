// ==========================================================================
// MÓDULO: PESTAÑAS INTERACTIVAS (otherBodies.js)
// ==========================================================================
//
// Renderiza un sistema de pestañas (tabs) para mostrar diferentes categorías de cuerpos celestes.
// He decidido que este módulo sea completamente autocontenido: él mismo genera su HTML a partir de datos,
// lo inyecta en el DOM y gestiona su propia lógica de eventos.

import otherBodiesData from '../data/otherBodiesData.js';

/**
 * Función principal que se exporta.
 * Orquesta todo el proceso de renderizado y activación.
 */
export function initializeOtherBodies() {
	const container = document.getElementById('other-bodies-container');
	if (!container) return;

	// --- GENERACIÓN DEL HTML DE LAS PESTAÑAS (NAVEGACIÓN) ---
	//
    // Construyo el HTML para los botones de las pestañas (los <li>).
    // Decidí incluir un icono y texto en cada pestaña para una mejor UX.
    // La lógica clave aquí es el uso de atributos 'id' y 'data-target'.
    // El 'id' (${body.tabId}) sirve como un ancla única para que otros módulos (como 'navLinkHandler')
    // puedan "apuntar" a una pestaña específica.
    // El 'data-target' (${body.id}) crea el vínculo entre la pestaña y su panel de contenido.
	const tabsHTML = `
        <div class="tabs is-centered is-boxed is-medium is-multiline">
            <ul>
                ${otherBodiesData.map((body, index) => `
                    <li id="${body.tabId}" class="${index === 0 ? 'is-active' : ''}" data-target="${body.id}">
                        <a>
                            <span class="icon is-small"><i class="fas ${body.icon} fa-bounce" aria-hidden="true"></i></span>
                            <span>${body.title}</span>
                        </a>
                    </li>
                `).join('')}
            </ul>
        </div>
    `;

	// --- GENERACIÓN DEL HTML DEL CONTENIDO ---
	//
    // Ahora construyo los paneles de contenido para cada pestaña.
    // He decidido usar el sistema de columnas de Bulma aquí, en lugar del Media Object,
    // porque me da un control proporcional sobre el ancho de la imagen y el texto,
    // lo que considero más robusto para el diseño responsivo.
	const contentHTML = `
        <div class="tab-content-container">
            ${otherBodiesData.map((body, index) => `
                <div id="${body.id}" class="tab-content ${index > 0 ? 'is-hidden' : ''}">
                    <div class="box">
                        <div class="columns is-vcentered">
                            <div class="column is-two-fifths">
                                <figure class="image is-16by9">
                                    <img src="${body.image}" alt="${body.title}">
                                </figure>
                            </div>
                            <div class="column">
                                <div class="content">
                                    <p>
                                        <strong class="title is-4">${body.title}</strong>
                                        <br>
                                        ${body.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>
    `;

	// --- INYECCIÓN EN EL DOM ---
	//
    // Inyecto ambos bloques de HTML de una sola vez para una renderización eficiente.
	container.innerHTML = tabsHTML + contentHTML;

	// --- LÓGICA DE INTERACTIVIDAD ---
	//
    // Una vez que el HTML está en la página, selecciono todas las pestañas y todos los paneles de contenido.
	const tabs = container.querySelectorAll('.tabs li');
	const contents = container.querySelectorAll('.tab-content');

	tabs.forEach((tab) => {
		tab.addEventListener('click', () => {
			// Obtengo el ID del contenido a mostrar desde el atributo 'data-target' que definí antes.
            // Esta es la clave que conecta la pestaña con su contenido.
			const targetId = tab.dataset.target;

			// MI ESTRATEGIA PARA CAMBIAR DE PESTAÑA ES SIMPLE Y ROBUSTA:
            // Ocultar todo: Elimino 'is-active' de todas las pestañas y añado 'is-hidden' a todo el contenido.
			tabs.forEach((t) => t.classList.remove('is-active'));
			contents.forEach((c) => c.classList.add('is-hidden'));

			// Mostrar lo seleccionado: Activo solo la pestaña a la que se le hizo clic
            // y muestro solo el panel de contenido correspondiente.
			tab.classList.add('is-active');
			const activeContent = document.getElementById(targetId);
			if (activeContent) {
				activeContent.classList.remove('is-hidden');
			}
		});
	});
}