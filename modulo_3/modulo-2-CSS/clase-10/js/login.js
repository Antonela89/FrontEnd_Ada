// Se ejecuta cuando el contenido del DOM ha sido completamente cargado, asegurando que todos los elementos HTML existen.
document.addEventListener('DOMContentLoaded', function () {
	// Inicializa los usuarios por defecto en localStorage si aún no existen.
	initUsers();
	// Configura los 'event listeners' para los formularios de login y registro.
	setupEventListeners();
});

//Crea un conjunto inicial de usuarios en localStorage si no hay ninguno.
function initUsers() {
	// Comprueba si la clave 'users' ya existe en localStorage para no sobrescribir datos.
	if (!localStorage.getItem('users')) {
		// si no existe, crea un array con dos usuarios por defecto
		const initialUsers = [
			{
				username: 'admin',
				email: 'admin@ejemplo.com',
				password: 'admin123',
			},
			{
				username: 'estudiante',
				email: 'estudiante@ejemplo.com',
				password: 'estudiante123',
			},
		];
		// Guarda el array de usuarios en localStorage. Se utiliza JSON.stringify para convertir el objeto a una cadena de texto.
		localStorage.setItem('users', JSON.stringify(initialUsers));
	}
}

// Centraliza la asignación de 'event listeners' a los formularios -> agrupa eventos
function setupEventListeners() {
	// seleciona al formulario de login
	const loginForm = document.getElementById('login-form');
	// selecciona al formulario de registro
	const registerForm = document.getElementById('register-form');

	// Asigna el manejador de eventos 'handleLogin' al evento 'submit' del formulario de login.
	// La comprobación 'if (loginForm)' evita errores si el formulario no existe en la página actual.
	if (loginForm) {
		loginForm.addEventListener('submit', handleLogin);
	}

	// Asigna el manejador de eventos 'handleRegister' al evento 'submit' del formulario de registro.
	if (registerForm) {
		registerForm.addEventListener('submit', handleRegister);
	}

// cambio onclick
 // Seleccionar los enlaces para cambiar entre formularios
  const showRegisterLink = document.getElementById("show-register-link");
  const showLoginLink = document.getElementById("show-login-link");

  // Asignarles un listener para llamar a las funciones correspondientes
  if (showRegisterLink) {
    showRegisterLink.addEventListener("click", (event) => {
      event.preventDefault(); // Evita que el enlace recargue la página
      showRegister();
    });
  }

  if (showLoginLink) {
    showLoginLink.addEventListener("click", (event) => {
      event.preventDefault(); // Evita que el enlace recargue la página
      showLogin();
    });
  }

  // 3. Seleccionar los botones de cierre de las notificaciones
  const closeErrorBtn = document.querySelector("#error-message .delete");
  const closeErrorRegisterBtn = document.querySelector("#error-message-register .delete");

  // 4. Asignarles un listener para llamar a las funciones de cierre
  if (closeErrorBtn) {
    closeErrorBtn.addEventListener("click", closeError);
  }

  if (closeErrorRegisterBtn) {
    closeErrorRegisterBtn.addEventListener("click", closeErrorRegister);
  }
}

//-----------------

// --- FUNCIONES MANEJADORAS DE EVENTOS (HANDLERS) ---
// Manejo de login
function handleLogin(e) {
	// Previene el comportamiento por defecto del formulario (que es recargar la página).
	e.preventDefault();

	// Obtiene y limpia los valores de los campos del formulario. .trim() elimina espacios en blanco al inicio y al final.
	const username = document.getElementById('username').value.trim();
	const password = document.getElementById('password').value;
	const remember = document.getElementById('remember').checked; // si esta checkeado, debe guardar los datos de usuario para autocompletar el formulario en el proximo inicio de sesión
  
	// Validación básica para asegurar que los campos no estén vacíos.
	if (!username || !password) {
		// si no hay datos, llama a la funcion auxiliar showError para mostrar el mensaje de error
		showError('Por favor, completa todos los campos', false);
		return; // Detiene la ejecución de la función si la validación falla.
	}

	// Obtiene la lista de usuarios de localStorage. Si no hay, usa un array vacío como valor por defecto.
	const users = JSON.parse(localStorage.getItem('users') || '[]');

	// Busca un usuario que coincida con las credenciales ingresadas (ya sea por nombre de usuario o por email).
	const user = users.find(
		(u) =>
			(u.username === username || u.email === username) &&
			u.password === password
	);

	// Si la información  ingresa coincide con la del localStorage, se llama a la función auxiliar showSuccess para mostrar un msj exitoso
	if (user) {
		showSuccess('¡Inicio de sesión exitoso! Redirigiendo...', false);

		// Si se seleccionó recordar las credenciales, las guarda en localStorage
		if (remember) {
			localStorage.setItem(
				'currentUser',
				JSON.stringify({
					username: user.username,
					email: user.email,
				})
			);
		} else {
			// sino las guarda en sessionStorage que tiene memoria temporal
			sessionStorage.setItem(
				'currentUser',
				JSON.stringify({
					username: user.username,
					email: user.email,
				})
			);
		}

		// Redirige al usuario a la página principal después de 1 segundo.
		setTimeout(() => {
			window.location.href = '../index.html';
		}, 1000);
	} else {
		// Si hay error de validación se muestra el msj de error
		showError(
			'Usuario o contraseña incorrectos. Por favor, intenta de nuevo.', false
		);
	}
}

// Manejo del registro
function handleRegister(e) {
	// Previene el comportamiento por defecto del formulario (que es recargar la página).
	e.preventDefault();

	// Obtiene los valores de los campos del formulario de registro.
	const username = document.getElementById('reg-username').value.trim();
	const email = document.getElementById('reg-email').value.trim();
	const password = document.getElementById('reg-password').value;
	const passwordConfirm = document.getElementById(
		'reg-password-confirm'
	).value;

	// VALIDACIONES
	// Dato inexistente
	if (!username || !email || !password || !passwordConfirm) {
		// Si no hay, llama a la funcion auxiliar showError para mostrar el mensaje de error
		showError('Por favor, completa todos los campos', true);
		return;
	}

	// Cantidad de caracteres del nombre
	if (username.length < 3) {
		showError('El nombre de usuario debe tener al menos 3 caracteres', true);
		return;
	}

	// Formato de email
	if (!isValidEmail(email)) {
		showError('Por favor, ingresa un email válido', true);
		return;
	}

	// Cantidad de caracteres de contraseña
	if (password.length < 6) {
		showError('La contraseña debe tener al menos 6 caracteres', true);
		return;
	}

	// Contraseña y repetir contraseña deben ser coincidentes
	if (password !== passwordConfirm) {
		showError('Las contraseñas no coinciden', true);
		return;
	}

	// Obtiene la lista de usuarios para verificar si el nuevo usuario ya existe.
	const users = JSON.parse(localStorage.getItem('users') || '[]');
	// El método .some() comprueba si al menos un elemento del array cumple la condición.
	// Verifica que no ya no haya un usuario con los mismos datos para evitar duplicados
	const userExists = users.some(
		(u) => u.username === username || u.email === email
	);

	// Muestra el error en caso de duplicados
	if (userExists) {
		showError(
			'El usuario o email ya está registrado. Por favor, usa otro.', true
		);
		return;
	}

	// Si todas las validaciones son exitosas, se crea el nuevo usuario.
	const newUser = {
		username: username,
		email: email,
		password: password,
	};

	// Se pasa el objeto newUser al array de users obtenido del localStorage
	users.push(newUser);
	// Se sobreescribe el contenido de localStorage con la nueva informacion
	localStorage.setItem('users', JSON.stringify(users));

	// Se muestra el msj de exito
	showSuccess('¡Registro exitoso! Ahora puedes iniciar sesión.', true);

	// Se resetea el formulario de registro para limpiar los campos
	document.getElementById('register-form').reset();

	// Después de 2 segundos, cambia a la vista de login y pre-rellena el campo de usuario
	setTimeout(() => {
		showLogin();
		document.getElementById('username').value = username;
	}, 2000);
}

// --- FUNCIONES AUXILIARES (HELPERS) ---

// validacion de email
function isValidEmail(email) {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailRegex.test(email);
}

// Función para mostrar error -> es dinamica por lo que se le pasa como parametro un msj que se mostrará segun el contexto
function showError(message, isRegisterForm) {
  const suffix = isRegisterForm ? '-register' : '';
	const errorDiv = document.getElementById(`error-message${suffix}`);
	const errorText = document.getElementById(`error-text${suffix}`);
	const successDiv = document.getElementById(`success-message${suffix}`);

	if (errorDiv && errorText) {
		errorText.textContent = message;
		errorDiv.classList.remove('is-hidden');
		if (successDiv) successDiv.classList.add('is-hidden');

		setTimeout(() => {
			errorDiv.classList.add('is-hidden');
		}, 5000);
	}
}

// Muestra un mensaje de éxito en el formulario activo.
function showSuccess(message, isRegisterForm) {
	const suffix = isRegisterForm ? '-register' : '';
	const successDiv = document.getElementById(`success-message${suffix}`);
	const successText = document.getElementById(`success-text${suffix}`);
	const errorDiv = document.getElementById(`error-message${suffix}`);

	if (successDiv && successText) {
		successText.textContent = message;
		successDiv.classList.remove('is-hidden');
		if (errorDiv) errorDiv.classList.add('is-hidden');
	}
}

// Cierra el mensaje de error del formulario de login.
function closeError() {
	const errorDiv = document.getElementById('error-message');
	if (errorDiv) {
		errorDiv.classList.add('is-hidden');
	}
}

// Cierra el mensaje de error del formulario de registro.
function closeErrorRegister() {
	const errorDiv = document.getElementById('error-message-register');
	if (errorDiv) {
		errorDiv.classList.add('is-hidden');
	}
}

// Oculta el formulario de login y muestra el de registro.
// También limpia los mensajes de notificación para un estado limpio.
function showRegister() {
	const loginBox = document.getElementById('login-box');
	const registerBox = document.getElementById('register-box');

	if (loginBox && registerBox) {
		loginBox.classList.add('is-hidden');
		registerBox.classList.remove('is-hidden');
		closeError();
		closeErrorRegister();
	}
}

// Oculta el formulario de registro y muestra el de login.
// También limpia los mensajes de notificación para un estado limpio.
function showLogin() {
	const loginBox = document.getElementById('login-box');
	const registerBox = document.getElementById('register-box');

	if (loginBox && registerBox) {
		loginBox.classList.remove('is-hidden');
		registerBox.classList.add('is-hidden');
		closeError();
		closeErrorRegister();
	}
}

