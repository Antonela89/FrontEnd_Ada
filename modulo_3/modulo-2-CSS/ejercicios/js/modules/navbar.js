import navData from '../data/navData.js';

/**
 * Activa la funcionalidad del menú de hamburguesa de Bulma.
 */
function attachBurgerListener() {
	const navbarBurgers = document.querySelectorAll('.navbar-burger');
	navbarBurgers.forEach((burger) => {
		burger.addEventListener('click', () => {
			const target = document.getElementById(burger.dataset.target);
			burger.classList.toggle('is-active');
			target.classList.toggle('is-active');
		});
	});
}

/**
 * Genera el HTML para un solo item del menú.
 * Puede generar un enlace simple o un menú desplegable completo.
 * @param {object} item - Un objeto del array navData.
 * @returns {string} El string HTML para ese item del menú.
 */
function generateMenuItemHTML(item) {
	// Si el item tiene un array 'children', es un menú desplegable
	if (item.children && item.children.length > 0) {
		// Generamos los sub-items del desplegable
		const dropdownItems = item.children
			.map((child) => {
				if (child.isDivider) {
					return '<hr class="navbar-divider">';
				}
				return `<a class="navbar-item" href="${child.href}">${child.text}</a>`;
			})
			.join('');

		return `
            <div class="navbar-item has-dropdown is-hoverable">
                <a class="navbar-link" href="${item.href}">
                    ${item.text}
                </a>
                <div class="navbar-dropdown is-boxed">
                    ${dropdownItems}
                </div>
            </div>
        `;
	}
	// Si no, es un enlace simple
	else {
		return `<a class="navbar-item" href="${item.href}">${item.text}</a>`;
	}
}

/**
 * Función principal que se exporta.
 * Renderiza el menú completo y activa sus funcionalidades.
 */
export function initializeNavbar() {
	const menuContainer = document.getElementById('navbar-dynamic-menu');
	if (!menuContainer) return;

	// Genera todo el HTML del menú y lo inyecta en el contenedor
	menuContainer.innerHTML = navData.map(generateMenuItemHTML).join('');

	// Activa el listener para el menú de hamburguesa
	attachBurgerListener();
}
