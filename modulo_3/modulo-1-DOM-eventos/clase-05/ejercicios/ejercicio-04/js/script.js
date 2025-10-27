// Captura de nodos del DOM
const themeToggleBtn = document.getElementById('themeToggleBtn');
const body = document.body; // Seleccionamos el body
const currentTheme = localStorage.getItem('theme'); // nos fijamos en el localStorage

// Al cargar la página, aplicar el tema guardado
if (currentTheme) {
	body.classList.add(currentTheme);
	if (currentTheme === 'dark-mode') {
		themeToggleBtn.textContent = 'Modo Claro';
	}
}

// Función para alternar el tema
function toggleTheme() {
	// 1. Alterna la clase 'dark-mode' en el body
	body.classList.toggle('dark-mode');

	let theme = 'light-mode'; // Tema por defecto
	// 2. Actualiza el texto del botón basándose en si el modo oscuro está activo
	if (body.classList.contains('dark-mode')) {
		// Si estamos en modo oscuro, el botón debe ofrecer cambiar a "Modo Claro"
		themeToggleBtn.textContent = 'Modo Claro';
		theme = 'dark-mode'; // Cambiamos la clase para guardarla en localStorage
	} else {
		// Si estamos en modo claro, el botón debe ofrecer cambiar a "Modo Oscuro"
		themeToggleBtn.textContent = 'Modo Oscuro';
	}

	// Guardar la preferencia en localStorage
	localStorage.setItem('theme', theme);
}

// Añadir el listener de evento al botón
themeToggleBtn.addEventListener('click', toggleTheme);
