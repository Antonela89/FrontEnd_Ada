// Importamos las funciones que necesitamos de nuestros módulos.
// Usamos { } para importar funciones con nombre (named exports).
import { initializeNavbar } from './modules/navbar.js';
import { initializeNavLinkHandler } from './modules/navLinkHandler.js';
import { initializeCanvas } from './modules/solarSystem.js';
import { initializePlanetCards } from './modules/flipCard.js';
import { initializeCarousel } from './modules/carousel.js';
import { initializeTableFilter } from './modules/tableFilter.js';
import { initializeOtherBodies } from './modules/otherBodies.js';
import { initializeGallery } from './modules/gallery.js';
import { initializeContactForm } from './modules/contactForm.js';
import { initializeBackToTop } from './modules/backToTop.js';
import { initializeTimeline } from './modules/timeline.js';

function onPageLoad() {
	console.log('Página cargada y lista. Iniciando módulos...');
	initializeNavbar();
	initializeNavLinkHandler();

	initializeCanvas();
	initializePlanetCards();

	const carousel = initializeCarousel('.carousel-wrapper');
	if (carousel) {
		carousel.update();
	}

	initializeTableFilter();
	initializeOtherBodies();
	initializeGallery();
	initializeContactForm();
	initializeBackToTop();
	initializeTimeline();
}

document.addEventListener('DOMContentLoaded', onPageLoad);
