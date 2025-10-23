// ### 5. Generando una URL dinámica con location.search

// **Objetivo:**
// Comprender cómo manipular parámetros en la URL usando JavaScript.

// **Consigna:**
// 1.  Crea una página con un formulario donde la usuaria ingrese su nombre.
// 2.  Cuando la usuaria envíe el formulario, la página debe redirigir a una nueva URL que incluya su nombre en los parámetros (`?nombre=María`).
// 3.  En la nueva página, usa `location.search` para leer el nombre de la URL y mostrar un mensaje de bienvenida.

// **Preguntas para reflexionar:**
// *   ¿Cómo puedes modificar `location.href` para redirigir a otra página?
// *   ¿Cómo puedes extraer el valor del nombre desde `location.search`?
// *   ¿Cómo podrías hacer esto sin recargar la página?

// capturas
const form = document.querySelector('form');
const nombreInput = document.getElementById('nombre');
const error = document.getElementById('nameError');

form.addEventListener('submit', (e) => {
	e.preventDefault();

	let nombreIngresado = nombreInput.value.trim();
	// Limpiar mensaje de error previo
	nameError.textContent = '';

	if (nombreIngresado === '') {
		error.textContent = 'Debe ingresar un nombre';
		return; // Detener la ejecución si hay error
	} 

    // La nueva página será 'bienvenida.html'
    const nuevaURL = `bienvenida.html?nombre=${encodeURIComponent(nombreIngresado)}`;

    // Redirigir a la nueva URL
    window.location.href = nuevaURL;

    // Limpiar el formulario después de enviar (aunque la página se recargará)
    form.reset();
});


// ¿Cómo puedes modificar location.href para redirigir a otra página?
// Simplemente asignando una nueva URL a window.location.href. El navegador cargará esa nueva URL.
// code JavaScript

// window.location.href = "nueva_pagina.html";

// También puedes usar window.location.assign("nueva_pagina.html") (que es similar pero mantiene el historial de navegación) o window.location.replace("nueva_pagina.html") (que reemplaza la entrada actual en el historial, impidiendo volver a la página anterior con el botón "atrás"). Para este ejercicio, window.location.href = ... es perfecto.

// ¿Cómo puedes extraer el valor del nombre desde location.search?
// window.location.search devuelve la parte de la URL que comienza con ? (el "query string"). Por ejemplo, si la URL es http://localhost/bienvenida.html?nombre=Maria&edad=30, location.search devolvería "?nombre=Maria&edad=30".

// La forma más moderna y sencilla de extraer parámetros es usando la interfaz URLSearchParams:
// code JavaScript

// const queryString = window.location.search; // Obtiene "?nombre=Maria"
// const params = new URLSearchParams(queryString);
// const nombre = params.get('nombre'); // Obtiene "Maria"

// encodeURIComponent() se usa para asegurar que cualquier carácter especial en el nombre (como espacios, acentos, etc.) sea codificado correctamente para la URL, evitando errores.

// ¿Cómo podrías hacer esto sin recargar la página?
// Si la consigna fuera estrictamente "sin recargar la página", entonces no se usaría window.location.href para navegar a bienvenida.html. En ese caso, la lógica cambiaría a:

//     Permanecer en la misma index.html.
//     Cuando el formulario se envía, ocultar el formulario.
//     Mostrar un <div> o article oculto previamente en index.html que simula la "página de bienvenida".
//     Actualizar el textContent de ese <div> con el mensaje de bienvenida usando el nombre capturado.
//     (Opcional): Manipular el historial del navegador con history.pushState() para que la URL en la barra de direcciones cambie (por ejemplo, a index.html?nombre=Maria) sin una recarga completa, lo que es la base de las Single Page Applications (SPAs).