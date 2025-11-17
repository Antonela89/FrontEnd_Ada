// Se ejecuta cuando el contenido del DOM ha sido completamente cargado.
document.addEventListener('DOMContentLoaded', function () {
	initUsers();
	setupEventListeners();
});

// Crea usuarios por defecto si no existen.
function initUsers() {
	if (!localStorage.getItem('users')) {
		const initialUsers = [
			{ username: 'admin', email: 'admin@ejemplo.com', password: 'admin123' },
			{ username: 'estudiante', email: 'estudiante@ejemplo.com', password: 'estudiante123' },
		];
		localStorage.setItem('users', JSON.stringify(initialUsers));
	}
}

// Configura los event listeners para los formularios.
function setupEventListeners() {
	const loginForm = document.getElementById('login-form');
	if (loginForm) loginForm.addEventListener('submit', handleLogin);

	const registerForm = document.getElementById('register-form');
	if (registerForm) registerForm.addEventListener('submit', handleRegister);
}

// --- MANEJADORES DE EVENTOS ---

function handleLogin(e) {
	e.preventDefault();
	const username = document.getElementById('username').value.trim();
	const password = document.getElementById('password').value;
	const remember = document.getElementById('remember').checked;

	if (!username || !password) {
		return showNotification('Por favor, completa todos los campos', 'error');
	}

	const users = JSON.parse(localStorage.getItem('users') || '[]');
	const user = users.find(u => (u.username === username || u.email === username) && u.password === password);

	if (user) {
		showNotification('¡Inicio de sesión exitoso! Redirigiendo...', 'success');
		const storage = remember ? localStorage : sessionStorage;
		storage.setItem('currentUser', JSON.stringify({ username: user.username, email: user.email }));
		setTimeout(() => { window.location.href = '../../index.html'; }, 1000);
	} else {
		showNotification('Usuario o contraseña incorrectos. Por favor, intenta de nuevo.', 'error');
	}
}

function handleRegister(e) {
	e.preventDefault();
	const username = document.getElementById('reg-username').value.trim();
	const email = document.getElementById('reg-email').value.trim();
	const password = document.getElementById('reg-password').value;
	const passwordConfirm = document.getElementById('reg-password-confirm').value;

	if (!username || !email || !password || !passwordConfirm) return showNotification('Por favor, completa todos los campos', 'error');
	if (username.length < 3) return showNotification('El nombre de usuario debe tener al menos 3 caracteres', 'error');
	if (!isValidEmail(email)) return showNotification('Por favor, ingresa un email válido', 'error');
	if (password.length < 6) return showNotification('La contraseña debe tener al menos 6 caracteres', 'error');
	if (password !== passwordConfirm) return showNotification('Las contraseñas no coinciden', 'error');

	const users = JSON.parse(localStorage.getItem('users') || '[]');
	if (users.some(u => u.username === username || u.email === email)) {
		return showNotification('El usuario o email ya está registrado. Por favor, usa otro.', 'error');
	}

	const newUser = { username, email, password };
	users.push(newUser);
	localStorage.setItem('users', JSON.stringify(users));
	showNotification('¡Registro exitoso! Ahora puedes iniciar sesión.', 'success');
	document.getElementById('register-form').reset();
	setTimeout(() => {
		showLogin();
		document.getElementById('username').value = username;
	}, 2000);
}

function isValidEmail(email) {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailRegex.test(email);
}


// --- FUNCIONES DE UI OPTIMIZADAS ---

/**
 * Muestra una notificación genérica de éxito o error en el formulario activo.
 * Reemplaza a showError() y showSuccess().
 * @param {string} message - El mensaje a mostrar.
 * @param {'success' | 'error'} type - El tipo de notificación.
 */
function showNotification(message, type) {
    const registerBox = document.getElementById("register-box");
    // Determina si el formulario de registro es el visible para saber dónde actuar.
    const isRegisterVisible = registerBox && !registerBox.classList.contains("is-hidden");
    const suffix = isRegisterVisible ? '-register' : '';

    const typeToShow = type;
    const typeToHide = type === 'success' ? 'error' : 'success';

    const divToShow = document.getElementById(`${typeToShow}-message${suffix}`);
    const textElement = document.getElementById(`${typeToShow}-text${suffix}`);
    const divToHide = document.getElementById(`${typeToHide}-message${suffix}`);

    if (divToShow && textElement) {
        textElement.textContent = message;
        divToShow.classList.remove("is-hidden");
        if (divToHide) divToHide.classList.add("is-hidden");

        // Oculta automáticamente solo los mensajes de error.
        if (type === 'error') {
            setTimeout(() => {
                divToShow.classList.add("is-hidden");
            }, 5000);
        }
    }
}

/**
 * Alterna la visibilidad entre los formularios de login y registro.
 * Reemplaza la lógica interna de showLogin() y showRegister().
 * @param {'login' | 'register'} viewToShow - La vista que se desea mostrar.
 */
function toggleFormView(viewToShow) {
    // Para que sea robusto, es mejor si el contenedor del login tiene un ID.
    // Asumiremos que el primer .box dentro de .login-box es el del login.
    const loginBox = document.querySelector(".login-box > .box:not(#register-box)");
    const registerBox = document.getElementById('register-box');

    if (!loginBox || !registerBox) return; // Salir si no se encuentran los elementos

    const showLogin = viewToShow === 'login';

    loginBox.classList.toggle('is-hidden', !showLogin);
    registerBox.classList.toggle('is-hidden', showLogin);

    // Limpia todas las notificaciones al cambiar de vista.
    document.querySelectorAll('.notification').forEach(notification => {
        notification.classList.add('is-hidden');
    });
}


// Estas funciones se mantienen para que los `onclick` en el HTML sigan funcionando,
// pero ahora delegan todo el trabajo a las funciones optimizadas.

function showError(message) { showNotification(message, 'error'); }
function showSuccess(message) { showNotification(message, 'success'); }

function showRegister() { toggleFormView('register'); }
function showLogin() { toggleFormView('login'); }

function closeError() {
    const errorDiv = document.getElementById('error-message');
    if (errorDiv) errorDiv.classList.add('is-hidden');
}
function closeErrorRegister() {
    const errorDiv = document.getElementById('error-message-register');
    if (errorDiv) errorDiv.classList.add('is-hidden');
}