// Función que escucha la carga total del documento
// Espera a que el DOM (Document Object Model) esté completamente cargado y parseado.
// Esto asegura que todos los elementos HTML estén disponibles para ser manipulados por JavaScript
document.addEventListener('DOMContentLoaded', () => {
	// --- LÓGICA PARA EL MENÚ DE HAMBURGUESA (NAVBAR) ---

	// Selecciona el elemento con la clase 'navbar-burger' del documento.
	const navbarBurger = document.querySelector('.navbar-burger');

	// Añade un 'event listener' que se activará cada vez que se haga click en el 'navbarBurger'.
	navbarBurger.addEventListener('click', () => {
		// Obtiene el valor del atributo 'data-target' del 'navbarBurger'.
		// Este valor debería ser el 'id' del menú que se quiere mostrar/ocultar.
		const target = navbarBurger.dataset.target;
		// Selecciona el elemento del menú utilizando el 'id' obtenido anteriormente.
		const menu = document.getElementById(target);

		// Alterna la clase 'is-active' tanto en el icono de hamburguesa como en el menú.
		// 'is-active': clase definida por Bulma para controlar la visibilidad y apariencia de los elementos.
		navbarBurger.classList.toggle('is-active');
		menu.classList.toggle('is-active');
	});

	// --- LÓGICA PARA LA AUTENTICACIÓN DEL USUARIO ---

	// Intenta obtener los datos del usuario actual desde el 'localStorage' -> persiste los datos incluso después de cerrar el navegador.
	// Si no se encuentra, intenta obtenerlos desde el 'sessionStorage'. -> borra los datos despues de cerrar el navegador o pestaña.
	const currentUser =
		localStorage.getItem('currentUser') ||
		sessionStorage.getItem('currentUser');

	// Condicional -> Verifica si existe un usuario logueado.
	if (currentUser) {
		//  Si existe un usuario se oculta el boton de login y el link de login del navbar  y se muestra el boton para desloguear
		document.getElementById('login-button').classList.add('is-hidden');
		document.getElementById('login-link-nav').classList.add('is-hidden');
		document.getElementById('logout-button').classList.remove('is-hidden');
	} else {
		//Si no existe un usuario se muestra el boton de login y el link de login del navbar y se oculta el boton para desloguear
		document.getElementById('login-button').classList.remove('is-hidden');
		document.getElementById('login-link-nav').classList.remove('is-hidden');
		document.getElementById('logout-button').classList.add('is-hidden');
	}
});

const cerrarSesion = document.getElementById('logout-button');

cerrarSesion.addEventListener('click', (e) => {
	handleLogout(e)
})

// se crea una funcion para manejar el cierre de sesion
function handleLogout(event) {
	// se le pasa como parametro el evento para prevenir el comportamiento por defecto del evento.
	event.preventDefault();
	// Se elimina la informacion del usuario del currentUser del localStorage y de sessionstorage -> cierre completo de sesión
	localStorage.removeItem('currentUser');
	sessionStorage.removeItem('currentUser');
	// Recarga la página para reflejar los cambios en la interfaz de usuario.
	window.location.reload();
}
