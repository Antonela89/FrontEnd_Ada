import galleryData from '../data/galleryData.js';

/**
 * Crea y añade el modal al final del body.
 * Solo se necesita un modal, que actuará como plantilla.
 */
function createModal() {
	const modalHTML = `
        <div class="modal" id="gallery-modal">
            <div class="modal-background"></div>
            <div class="modal-card">
                <header class="modal-card-head">
                    <p class="modal-card-title" id="modal-title">Título de la Imagen</p>
                    <button class="delete" aria-label="close"></button>
                </header>
                <section class="modal-card-body">
                    <figure class="image is-4by3">
                        <img id="modal-image" src="" alt="">
                    </figure>
                    <p class="mt-4" id="modal-description">Descripción de la imagen.</p>
                </section>
            </div>
        </div>
    `;
	document.body.insertAdjacentHTML('beforeend', modalHTML);
}

/**
 * Función principal que se exporta.
 */
export function initializeGallery() {
	const galleryContainer = document.getElementById('gallery-container');
	if (!galleryContainer) return;

	// --- 1. Generar la rejilla de imágenes ---
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

	// --- 2. Crear el modal y obtener sus elementos ---
	createModal();
	const modal = document.getElementById('gallery-modal');
	const modalImage = document.getElementById('modal-image');
	const modalTitle = document.getElementById('modal-title');
	const modalDescription = document.getElementById('modal-description');
	const closeButtons = modal.querySelectorAll('.modal-background, .delete');

	// --- 3. Lógica para abrir el modal ---
	galleryContainer.addEventListener('click', (event) => {
		// Solo reaccionar si se hizo clic en una imagen
		if (event.target.tagName === 'IMG') {
			const img = event.target;

			// Llenar el modal con los datos de la imagen clickeada
			modalImage.src = img.dataset.fullSrc;
			modalImage.alt = img.alt;
			modalTitle.textContent = img.dataset.title;
			modalDescription.textContent = img.dataset.description;

			// Activar el modal
			document.documentElement.classList.add('is-clipped'); // Evita el scroll del fondo
			modal.classList.add('is-active');
		}
	});

	// --- 4. Lógica para cerrar el modal ---
	function closeModal() {
		document.documentElement.classList.remove('is-clipped');
		modal.classList.remove('is-active');
	}

	closeButtons.forEach((button) => {
		button.addEventListener('click', closeModal);
	});

	// Opcional: Cerrar el modal con la tecla Escape
	document.addEventListener('keydown', (event) => {
		if (event.key === 'Escape') {
			closeModal();
		}
	});
}
