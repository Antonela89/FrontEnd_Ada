// ==========================================================================
// PUNTO DE ENTRADA PRINCIPAL (main.js)
// ==========================================================================
//
// El rol de 'main.js' es ser el orquestador central de la aplicación.
// No contiene lógica de componentes específicos; en su lugar, importa los módulos de funcionalidades y ejecutarlos en el orden correcto
// una vez que la página esté completamente cargada.
// Esta arquitectura desacoplada es fundamental para la mantenibilidad y escalabilidad del proyecto.

// --- IMPORTACIÓN DE MÓDULOS ---
//
// He importado cada funcionalidad como un módulo separado. Cada 'import' trae una
// única función de inicialización, lo que mantiene este archivo limpio y declarativo.
// La sintaxis `import { functionName } from '...'` es estándar de ES Modules y me permite
// componer la aplicación a partir de piezas reutilizables e independientes.
// El orden de las importaciones no afecta la ejecución, pero las he agrupado lógicamente.

// Módulos de Navegación y UI Global
import { initializeNavbar } from './modules/navbar.js';
import { initializeNavLinkHandler } from './modules/navLinkHandler.js';
import { initializeBackToTop } from './modules/backToTop.js';

// Módulos de Contenido Principal
import { initializeCanvas } from './modules/solarSystem.js';
import { initializePlanetCards } from './modules/flipCard.js';
import { initializeCarousel } from './modules/carousel.js';
import { initializeTableFilter } from './modules/tableFilter.js';
import { initializeOtherBodies } from './modules/otherBodies.js';
import { initializeGallery } from './modules/gallery.js';
import { initializeTimeline } from './modules/timeline.js';

// Módulos de Interacción
import { initializeContactForm } from './modules/contactForm.js';


// --- FUNCIÓN DE ORQUESTACIÓN ---
//
// 'onPageLoad' es la función principal que se ejecuta una vez que el DOM está listo.
// Su nombre es descriptivo y su propósito es claro: inicializar la aplicación.
// He incluido un 'console.log' para facilitar la depuración; me confirma que el script
// se está ejecutando en el momento correcto.

function onPageLoad() {
	console.log('Página cargada y lista. Iniciando módulos...');

    // El orden de ejecución aquí es deliberado.
    // Primero inicializo los componentes de UI estáticos y los manejadores de eventos globales.
	initializeNavbar();
	initializeNavLinkHandler();
    initializeBackToTop();
    initializeContactForm();

    // Luego, procedo a renderizar el contenido dinámico de cada sección.
	initializeCanvas();
	initializePlanetCards(); // <-- Esta debe ejecutarse ANTES del carrusel.

    // La inicialización del carrusel es un caso especial.
    // Mi módulo `initializeCarousel` devuelve un objeto con un método `update`.
    // Esto se debe a que el carrusel necesita ser "actualizado" DESPUÉS de que
    // `initializePlanetCards` haya inyectado las tarjetas en el DOM.
    // Este patrón (inicializar y luego actualizar) es una forma robusta de manejar dependencias
    // entre módulos que operan sobre el mismo DOM.
	const carousel = initializeCarousel('.carousel-wrapper');
	if (carousel) {
		carousel.update();
	}

    // Inicializo el resto de los módulos de contenido.
	initializeTableFilter();
	initializeOtherBodies();
	initializeGallery();
	initializeTimeline();
}


// --- INICIO DE LA APLICACIÓN ---
//
// Utilizo el evento 'DOMContentLoaded' para disparar mi función 'onPageLoad'.
// Esta es la práctica recomendada. Asegura que todo el HTML ha sido parseado y el DOM
// está listo para ser manipulado, pero no espera a que se carguen recursos externos como imágenes,
// lo que hace que la inicialización de la app se sienta más rápida.
// Como estoy usando `type="module"` en mi etiqueta <script>, este listener podría considerarse
// redundante (los módulos se cargan con 'defer' por defecto), pero lo mantengo por claridad
// y como una capa extra de seguridad para garantizar el orden de ejecución.

document.addEventListener('DOMContentLoaded', onPageLoad);