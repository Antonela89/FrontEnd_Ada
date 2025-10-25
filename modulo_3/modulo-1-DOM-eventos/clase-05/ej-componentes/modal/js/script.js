// Seleccionar elementos del DOM
const modal = document.getElementById('myModal');
const openBtn = document.getElementById('openModalBtn');
const closeBtn = document.getElementById('closeModalBtn');

// Función para mostrar el modal
function showModal() {
	modal.classList.add('show');
}

// Función para ocultar el modal
function hideModal() {
	modal.classList.remove('show');
}

// Asignar eventos de clic
openBtn.addEventListener('click', showModal);
closeBtn.addEventListener('click', hideModal);

// Ocultar el modal si el usuario hace clic fuera del contenido
window.addEventListener('click', function (event) {
	if (event.target == modal) {
		hideModal();
	}
});
