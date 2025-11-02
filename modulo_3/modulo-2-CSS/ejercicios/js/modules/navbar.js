// ==========================================================================
// MÓDULO: NAVEGACIÓN PRINCIPAL (navbar.js)
// ==========================================================================
//
// Construye dinámicamente la barra de navegación y
// activa su comportamiento responsivo (el menú de hamburguesa).
// Decidí que la estructura del menú (sus enlaces y desplegables) debía
// provenir de una fuente de datos externa ('navData.js'). Esto desacopla
// la estructura de la navegación de la implementación, lo que significa que
// para añadir o quitar una sección de la web, solo necesito modificar el
// array de datos, sin tocar este archivo ni el HTML.

import navData from '../data/navData.js';

// --- FUNCIONES INTERNAS (ENCAPSULADAS) ---

/**
 * Activa la funcionalidad del menú de hamburguesa de Bulma.
 * He creado esta función helper para mantener la lógica de la UI separada
 * de la lógica de renderizado.
 */
function attachBurgerListener() {
    // Selecciono todos los '.navbar-burger'. Aunque solo tengo uno,
    // escribirlo de esta forma lo hace más robusto por si en el futuro
    // decidiera añadir más navbars.
	const navbarBurgers = document.querySelectorAll('.navbar-burger');
	navbarBurgers.forEach((burger) => {
		burger.addEventListener('click', () => {
            // La lógica es la estándar de Bulma: obtengo el ID del objetivo
            // desde el atributo 'data-target' del botón.
			const target = document.getElementById(burger.dataset.target);

            // Y luego alterno la clase 'is-active' tanto en el botón (para la animación de 'X')
            // como en el menú objetivo (para mostrarlo/ocultarlo).
			burger.classList.toggle('is-active');
			target.classList.toggle('is-active');
		});
	});
}

/**
 * Genera el HTML para un único item del menú.
 * Esta función es el núcleo de la lógica de renderizado.
 * Es una función pura que recibe un objeto y devuelve un string de HTML.
 * @param {object} item - Un objeto del array navData.
 * @returns {string} El string HTML para ese item del menú.
 */
function generateMenuItemHTML(item) {
	// Mi decisión clave aquí fue usar una estructura de datos que me permitiera
    // anidar elementos. Si un item tiene una propiedad 'children', lo trato
    // como un menú desplegable.
	if (item.children && item.children.length > 0) {
		// Para los sub-items, utilizo 'map' para transformar cada objeto 'child'
        // en su correspondiente string de HTML.
		const dropdownItems = item.children
			.map((child) => {
                // He añadido una pequeña lógica para manejar separadores,
                // haciendo mi estructura de datos aún más flexible.
				if (child.isDivider) {
					return '<hr class="navbar-divider">';
				}
				return `<a class="navbar-item" href="${child.href}">${child.text}</a>`;
			})
			.join('');

        // Devuelvo el HTML completo del componente 'dropdown' de Bulma.
        // He optado por '.is-hoverable' para una mejor UX en escritorio y '.is-boxed'
        // para un estilo más moderno.
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
	// Si el item no tiene 'children', simplemente devuelvo un enlace estándar.
	else {
		return `<a class="navbar-item" href="${item.href}">${item.text}</a>`;
	}
}

// --- FUNCIÓN PÚBLICA (EXPORTADA) ---

/**
 * La función orquestadora que se llama desde 'main.js'.
 * Su flujo de trabajo es simple y directo.
 */
export function initializeNavbar() {
	const menuContainer = document.getElementById('navbar-dynamic-menu');
	if (!menuContainer) return;

	// Genero todo el HTML del menú de una sola vez usando 'map' y 'join'.
	menuContainer.innerHTML = navData.map(generateMenuItemHTML).join('');

	// Una vez que el menú está en el DOM, activo la funcionalidad del menú de hamburguesa.
    // El orden aquí es crucial.
	attachBurgerListener();
}