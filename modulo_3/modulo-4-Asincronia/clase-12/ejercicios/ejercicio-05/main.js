// captura de nodos
const $list = document.getElementById('list');
const $loader = document.getElementById('loader');
const $errorMessage = document.getElementById('message-error');

async function obtenerDatos() {
	const url = 'https://jsonplaceholder.typicode.com/posts-INVALIDOS'; //prueba url invalida

	// Hacer la petición
	const response = await fetch(url);

	// Verificar si la respuesta HTTP fue exitosa
	if (!response.ok) {
		throw new Error(`${response.status} - No se pudieron cargar los datos. Intente más tarde.`);
	}

	// Convertir la respuesta a formato JSON
	return await response.json();
}

async function manejarPeticion() {
	try {
		$loader.innerText = `Cargando...`; // Mostrar el loader
		$errorMessage.innerText = ''; // Limpiar errores previos
		$list.innerHTML = ''; // Limpiar lista previa

		const respuesta = await obtenerDatos();

		// limpiar el loader
		$loader.innerText = '';

		// Usar los datos
		let htmlAcumulado = '';

		respuesta.forEach((post) => {
			htmlAcumulado += `
                <li class="text-start p-2 border border-slate-200 rounded mb-2 bg-white shadow-sm">
                    <h4 class="font-medium text-slate-700">
                        ${
							post.title.charAt(0).toUpperCase() +
							post.title.slice(1)
						}
                    </h4>
                </li>`;
		});

		$list.innerHTML = htmlAcumulado;
	} catch (error) {
		$loader.innerText = '';
		$errorMessage.innerText = '❌' + error.message; // mostrar mensaje
		$errorMessage.className = 'text-red-500 font-bold'; // Agregar estilo de error
	}
}

manejarPeticion();
