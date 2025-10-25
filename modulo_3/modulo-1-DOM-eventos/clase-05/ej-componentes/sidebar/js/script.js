// Seleccionamos los elementos necesarios del DOM
const openBtn = document.getElementById('openBtn');
const closeBtn = document.getElementById('closeBtn');
const sidebar = document.getElementById('mySidebar');

// Función para abrir el sidebar
function openNav() {
	sidebar.classList.add('open');
}

// Función para cerrar el sidebar
function closeNav() {
	sidebar.classList.remove('open');
}

// Asignamos las funciones a los eventos de clic de los botones
openBtn.addEventListener('click', openNav);
closeBtn.addEventListener('click', closeNav);
