// captura de nodos
const $list = document.getElementById('list');
const $loader = document.getElementById('loader');
const $errorMessage = document.getElementById('message-error');

async function obtenerDatos() {
	// URL inválida intencional
	const url = 'https://jsonplaceholder.typicode.com/posts';

	// Hacer la petición
	const response = await fetch(url);

	// Verificar si la respuesta HTTP fue exitosa
	if (!response.ok) {
		// Lanzar el error con el status para tener más info
		throw new Error(`Error: ${response.status} - No se pudo cargar`);
	}

	// Convertir la respuesta a formato JSON
	return await response.json();
}

async function manejarPeticion() {
	// Preparar UI
	$loader.innerText = 'Cargando datos...';
	$errorMessage.innerText = '';
	$errorMessage.className = ''; // Limpiar clases de error previas
	$list.innerHTML = '';
	try {
		const respuesta = await obtenerDatos();

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
		$errorMessage.innerHTML = `
            <span class="block text-2xl mb-2">⚠️</span>
            ${error.message} <br>
            <span class="font-normal text-slate-600">Intente más tarde.</span>
        `;
		// Clases de Tailwind para una caja roja de error
		$errorMessage.className =
			'bg-red-100 text-red-700 p-4 rounded-lg border border-red-200 font-bold';

		console.error(error);
	} finally {
		// Limpieza FINAL (se ejecuta haya éxito o error)
		$loader.innerText = '';
	}
}

manejarPeticion();
