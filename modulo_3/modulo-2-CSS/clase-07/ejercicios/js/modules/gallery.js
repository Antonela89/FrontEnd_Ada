// ==========================================================================
// MÓDULO: GALERÍA DE IMÁGENES CON MODAL (gallery.js)
// ==========================================================================
//
// Renderiza una rejilla de imágenes y gestionar la
// funcionalidad de "lightbox" (modal) para ver las imágenes en detalle.
// He optado por una arquitectura eficiente: genero todas las miniaturas
// y utilizo un ÚNICO modal que se reutiliza, actualizando su contenido
// cada vez que se abre. Esto es mucho más performante que crear un modal
// separado para cada imagen.

import galleryData from '../data/galleryData.js';

// --- FUNCIONES INTERNAS (ENCAPSULADAS) ---

/**
 * Crea la estructura del modal y la inyecta en el DOM.
 * Decidí crear el modal con JavaScript en lugar de tenerlo oculto en el HTML
 * para mantener mi 'index.html' lo más limpio posible.
 * Lo añado al final del '<body>' para asegurar que esté en el nivel superior
 * del apilamiento de la UI y no se vea afectado por el CSS de otros contenedores.
 */
function createModal() {
	// Para evitar crear múltiples modales si esta función se llamara por error más de una vez,
	// he añadido una comprobación para ver si el modal ya existe.
	if (document.getElementById('gallery-modal')) return;

	const modalHTML = `
        <div class="modal" id="gallery-modal">
            <div class="modal-background"></div>
            <div class="modal-card">
                <header class="modal-card-head">
                    <p class="modal-card-title" id="modal-title"></p>
                    <button class="delete" aria-label="close"></button>
                </header>
                <section class="modal-card-body">
                    <figure class="image is-4by3">
                        <img id="modal-image" src="" alt="">
                    </figure>
                    <p class="mt-4" id="modal-description"></p>
                </section>
            </div>
        </div>
    `;
	// 'insertAdjacentHTML' es una forma eficiente de añadir el string HTML al DOM.
	document.body.insertAdjacentHTML('beforeend', modalHTML);
}

// --- FUNCIÓN PÚBLICA (EXPORTADA) ---

export function initializeGallery() {
	const galleryContainer = document.getElementById('gallery-container');
	if (!galleryContainer) return;

	// --- RENDERIZADO DE LA REJILLA DE IMÁGENES ---
	//
	// Genero el HTML de la rejilla. Mi decisión clave aquí fue usar atributos 'data-*'
	// en cada imagen. Esto me permite "almacenar" toda la información necesaria para el modal
	// (URL de alta resolución, título, descripción) directamente en el elemento de la miniatura.
	// Es una técnica limpia y eficiente que evita tener que buscar los datos de nuevo en el array original.
	const galleryHTML = galleryData
		.map(
			(item) => `
        <div class="column is-one-quarter-desktop is-one-third-tablet is-half-mobile">
            <figure class="image is-1by1 gallery-image">
                <img src="${item.thumbnail}" 
                    alt="${item.alt}"
                    data-full-src="${item.src}"
                    data-title="${item.title}"
                    data-description="${item.description}">
            </figure>
        </div>
    `
		)
		.join('');
	galleryContainer.innerHTML = galleryHTML;

	// --- CREACIÓN Y CONFIGURACIÓN DEL MODAL ---
	//
	// Llamo a mi función helper para crear el modal y luego obtengo las referencias a sus partes
	// internas. Almaceno estas referencias para no tener que buscarlas en el DOM cada vez que abro el modal.
	createModal();
	const modal = document.getElementById('gallery-modal');
	const modalImage = document.getElementById('modal-image');
	const modalTitle = document.getElementById('modal-title');
	const modalDescription = document.getElementById('modal-description');
	const closeButtons = modal.querySelectorAll('.modal-background, .delete');

	// --- LÓGICA DE APERTURA (DELEGACIÓN DE EVENTOS) ---
	//
	// He optado por la delegación de eventos. En lugar de añadir un listener a cada una de las
	// imágenes, he añadido un ÚNICO listener al contenedor de la galería.
	// Esto es mucho más performante, especialmente si la galería tuviera cientos de imágenes.
	galleryContainer.addEventListener('click', (event) => {
		// Dentro del listener, compruebo si el elemento que originó el evento ('event.target')
		// es una imagen. Si no lo es, no hago nada.
		if (event.target.tagName === 'IMG') {
			const img = event.target;

			// Si es una imagen, recupero la información de sus atributos 'data-*'
			// y la utilizo para poblar mi plantilla de modal.
			modalImage.src = img.dataset.fullSrc;
			modalImage.alt = img.alt;
			modalTitle.textContent = img.dataset.title;
			modalDescription.textContent = img.dataset.description;

			// Finalmente, activo el modal. He decidido usar la clase 'is-clipped' de Bulma
			// en el '<html>' para una mejor experiencia de usuario, ya que evita que el fondo se desplace
			// mientras el modal está abierto.
			document.documentElement.classList.add('is-clipped');
			modal.classList.add('is-active');
		}
	});

	// --- LÓGICA DE CIERRE ---
	//
	// He creado una función 'closeModal' para encapsular la lógica de cierre.
	// Esto me permite reutilizarla para diferentes acciones (clic en el fondo, clic en la 'X', tecla 'Esc').
	function closeModal() {
		document.documentElement.classList.remove('is-clipped');
		modal.classList.remove('is-active');
		// He decidido resetear la imagen para evitar que se vea la imagen anterior parpadeando la próxima vez que se abra el modal.
		modalImage.src = '';
	}

	// Añado el listener a todos los elementos que pueden cerrar el modal.
	closeButtons.forEach((button) => {
		button.addEventListener('click', closeModal);
	});

	// Como una mejora de accesibilidad y UX, he añadido un listener para la tecla 'Escape'.
	// Es un comportamiento estándar y esperado para los modales.
	document.addEventListener('keydown', (event) => {
		if (event.key === 'Escape' && modal.classList.contains('is-active')) {
			closeModal();
		}
	});
}
