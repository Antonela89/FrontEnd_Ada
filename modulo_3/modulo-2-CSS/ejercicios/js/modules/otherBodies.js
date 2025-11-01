// js/modules/otherBodies.js

import otherBodiesData from '../data/otherBodiesData.js';

/**
 * Función principal que se exporta.
 * Renderiza el sistema de pestañas y activa su funcionalidad.
 */
export function initializeOtherBodies() {
	const container = document.getElementById('other-bodies-container');
	if (!container) return;

	// --- 1. Generar el HTML para las pestañas de navegación ---
	const tabsHTML = `
        <div class="tabs is-centered is-boxed is-medium">
            <ul>
                ${otherBodiesData
					.map(
						(body, index) => `
                    <li id="${body.tabId}" class="${
						index === 0 ? 'is-active' : ''
					}" data-target="${body.id}">
                        <a>
                            <span class="icon is-small"><i class="fas ${
								body.icon
							} fa-bounce" aria-hidden="true"></i></span>
                            <span>${body.title}</span>
                        </a>
                    </li>
                `
					)
					.join('')}
            </ul>
        </div>
    `;

	// --- 2. Generar el HTML para el contenido de cada pestaña ---
	const contentHTML = `
    <div class="tab-content-container">
        ${otherBodiesData.map((body, index) => `
            <div id="${body.id}" class="tab-content ${index > 0 ? 'is-hidden' : ''}">
                
                <div class="box">
                    <div class="columns is-vcentered">
                        <!-- Columna para la imagen (40% del ancho) -->
                        <div class="column is-two-fifths">
                            <figure class="image is-16by9">
                                <img src="${body.image}" alt="${body.title}">
                            </figure>
                        </div>
                        <!-- Columna para el texto (60% del ancho) -->
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

	// --- 3. Inyectar todo el HTML en el contenedor ---
	container.innerHTML = tabsHTML + contentHTML;

	// --- 4. Añadir la lógica para que las pestañas funcionen ---
	const tabs = container.querySelectorAll('.tabs li');
	const contents = container.querySelectorAll('.tab-content');

	tabs.forEach((tab) => {
		tab.addEventListener('click', () => {
			// Obtener el ID del contenido a mostrar desde el atributo data-target
			const targetId = tab.dataset.target;

			// Desactivar todas las pestañas y ocultar todo el contenido
			tabs.forEach((t) => t.classList.remove('is-active'));
			contents.forEach((c) => c.classList.add('is-hidden'));

			// Activar la pestaña clickeada
			tab.classList.add('is-active');

			// Mostrar el contenido correspondiente
			const activeContent = document.getElementById(targetId);
			if (activeContent) {
				activeContent.classList.remove('is-hidden');
			}
		});
	});
}
