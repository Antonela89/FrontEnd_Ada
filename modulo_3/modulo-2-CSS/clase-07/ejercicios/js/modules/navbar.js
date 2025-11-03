// ==========================================================================
// MÓDULO: NAVEGACIÓN PRINCIPAL (navbar.js)
// ==========================================================================
//
// 	Contruye dinámicamente la barra de navegación y
// activar su comportamiento responsivo, incluyendo el cierre automático
// del menú de hamburguesa al seleccionar una opción.

import navData from '../data/navData.js';

// --- FUNCIONES INTERNAS (ENCAPSULADAS) ---

/**
 * Activa la funcionalidad del menú de hamburguesa de Bulma.
 * También añade la lógica para el cierre automático en móvil.
 */
function attachBurgerAndLinkListeners() {
    // Seleccionamos todos los elementos necesarios una sola vez.
    const navbarBurgers = document.querySelectorAll('.navbar-burger');
    const allNavbarLinks = document.querySelectorAll('.navbar-item');

    // Listener para el (los) botón(es) de hamburguesa.
    navbarBurgers.forEach((burger) => {
        burger.addEventListener('click', () => {
            const target = document.getElementById(burger.dataset.target);
            burger.classList.toggle('is-active');
            target.classList.toggle('is-active');
        });
    });

    // ¡LA LÓGICA DE CIERRE CORRECTA!
    // Listener para todos los enlaces del menú.
    allNavbarLinks.forEach((link) => {
        link.addEventListener('click', () => {
            // Buscamos el menú de hamburguesa activo en el momento del clic.
            const activeBurger = document.querySelector('.navbar-burger.is-active');
            
            // Si existe un menú activo (es decir, estamos en vista móvil y el menú está abierto)...
            if (activeBurger) {
                const target = document.getElementById(activeBurger.dataset.target);
                
                // ...lo cerramos.
                activeBurger.classList.remove('is-active');
                target.classList.remove('is-active');
            }
        });
    });
}

/**
 * Genera el HTML para un único item del menú.
 * (Esta función no necesita cambios, está perfecta).
 */
function generateMenuItemHTML(item) {
    if (item.children && item.children.length > 0) {
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
                <a class="navbar-link" href="${item.href}">${item.text}</a>
                <div class="navbar-dropdown is-boxed">${dropdownItems}</div>
            </div>
        `;
    } else {
        return `<a class="navbar-item" href="${item.href}">${item.text}</a>`;
    }
}

// --- FUNCIÓN PÚBLICA (EXPORTADA) ---

/**
 * La función orquestadora que se llama desde 'main.js'.
 */
export function initializeNavbar() {
    const menuContainer = document.getElementById('navbar-dynamic-menu');
    if (!menuContainer) return;

    // 1. Generamos el HTML del menú.
    menuContainer.innerHTML = navData.map(generateMenuItemHTML).join('');

    // 2. Una vez que TODO el navbar está en el DOM (incluyendo los enlaces que acabamos de crear),
    // llamamos a la función que activa TODA la interactividad.
    attachBurgerAndLinkListeners();
}