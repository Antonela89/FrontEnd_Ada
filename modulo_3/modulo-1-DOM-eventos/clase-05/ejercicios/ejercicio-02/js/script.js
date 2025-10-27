// captura de nodos
const menuButton = document.querySelector('button');
const sidebar = document.getElementById('sidebar');
const container = document.querySelector('.container');

// Función para abrir/cerrar el sidebar
function toggleSidebar() {
	sidebar.classList.toggle('show');
	container.classList.toggle('reduce');
}

// 1. Evento para el botón del menú
menuButton.addEventListener('click', (e) => {
	// Detiene la propagación para que el clic no llegue al 'document'
	// y cierre el sidebar inmediatamente.
	e.stopPropagation();
	toggleSidebar();
});

// 2. Evento para cerrar el sidebar al hacer clic fuera
document.addEventListener('click', (e) => {
	// Comprueba si el sidebar está abierto Y si el clic fue fuera del sidebar
	const isClickInsideSidebar = sidebar.contains(e.target);
	const isSidebarOpen = sidebar.classList.contains('show');

	if (isSidebarOpen && !isClickInsideSidebar) {
		toggleSidebar();
	}
});

// Añadir un listener al document: Escuchamos los clics en cualquier parte de la página.

// Verificar dos condiciones:
//     sidebar.classList.contains('show'): ¿Está el sidebar abierto? No queremos hacer nada si ya está cerrado.
//     !sidebar.contains(e.target): ¿El elemento donde se hizo clic (e.target) no está dentro del sidebar? El método .contains() verifica si un elemento es descendiente de otro.

// Actuar: Si ambas condiciones son verdaderas, llamamos a la función toggleSidebar() para cerrarlo.

// e.stopPropagation(): En el listener del botón, es importante añadir esto. Evita que el evento de clic en el botón "burbujee" hacia arriba hasta el document. Si no lo pusiéramos, al hacer clic en el botón se abriría el sidebar (toggleSidebar()) y, acto seguido, el listener del document detectaría un clic "fuera" del sidebar y lo volvería a cerrar inmediatamente.
