// ### 4. Selección de opciones con radio y checkbox

// **Objetivo:**
// Aprender a manejar los valores seleccionados en opciones múltiples.

// **Consigna:**
// 1.  Crea un formulario con:
//     *   Tres opciones de color (radio).
//     *   Tres opciones de pasatiempos (checkbox).
//     *   Un botón para mostrar la selección.
// 2.  Cuando la usuaria seleccione una opción y presione el botón, muestra en pantalla los valores elegidos.

// **Preguntas para reflexionar:**
// *   ¿Cómo puedes capturar el valor de un radio button seleccionado?
// *   ¿Cómo puedes capturar todos los checkbox marcados?
// *   ¿Cómo podrías hacer que, si la usuaria no selecciona ninguna opción, aparezca un mensaje de advertencia?

// captura
const form = document.querySelector('form'); // captura del formulario donde se guardan las elecciones del usuario
// captura de span donde se muestran las elecciones del usuario
const displayColor = document.getElementById('displayColor');
const displayPasatiempos = document.getElementById('displayPasatiempos');
// captura de p donde se muestran los errores de eleccion
const errorColor = document.getElementById('colorError');
const errorPasatiempos = document.getElementById('pasatiemposError');
// captura de la tarjeta de resultados
const resultsCard = document.getElementById('resultsCard');

// funcion para limpiar errores
function clearErrors() {
	errorColor.textContent = '';
	errorPasatiempos.textContent = '';
}

// escucha de evento submit del formulario
form.addEventListener('submit', (e) => {
	// prevenir la recarga de la pagina
	e.preventDefault();

	// limpieza de errores
	clearErrors();

	// creacion de una bandera de validación
	let isValid = true;

	// CAPTURA COLOR ELEGIDO - radios
	const colorSeleccionado = document.querySelector(
		'input[name="color"]:checked'
	);
	let colorValue = 'Ninguno';
	if (colorSeleccionado) {
		colorValue = colorSeleccionado.value;
	} else {
		colorError.textContent = 'Por favor, selecciona un color.';
		isValid = false;
	}

	// CAPTURA PASATIEMPOS ELEGIDO - checkboxs
	const pasatiemposSeleccionados = document.querySelectorAll(
		'input[name="pasatiempos"]:checked'
	); // array de nodos
	// armar un array para guardar los valores seleccionados
	let listaPasatiempos = [];
	// verifico la longitud de pasatiemposSeleccionados
	// si es mayor a 0 quiere decir que se seleccionaron pasatiempos y puedo iterarlos para agregar su valor al nuevo array
	if (pasatiemposSeleccionados.length > 0) {
		pasatiemposSeleccionados.forEach((checkbox) => {
			listaPasatiempos.push(checkbox.value);
		});
	} else {
		pasatiemposError.textContent =
			'Por favor, selecciona al menos un pasatiempo.';
		isValid = false;
	}

	// mostrar las elecciones si isValid = true;
	if (isValid) {
		displayColor.textContent = colorValue;
		displayPasatiempos.textContent =
			listaPasatiempos.length > 0
				? listaPasatiempos.join(', ')
				: 'Ninguno';

		// mostrar la tarjeta de resultados
		resultsCard.style.display = 'block';
		resultsCard.style.boxShadow = '0 5px 20px rgba(0, 123, 255, 0.2)';
	} else {
		// Si hay errores, nos aseguramos de que el contenido anterior no se mantenga
		displayColor.textContent = 'Ninguno';
		displayPasatiempos.textContent = 'Ninguno';
		resultsCard.style.boxShadow = 'none'; // Quitar el efecto visual si hay error
	}
});

// la tarjeta de resultados esté oculta al inicio
document.addEventListener('DOMContentLoaded', () => {
	resultsCard.style.display = 'none';
});
