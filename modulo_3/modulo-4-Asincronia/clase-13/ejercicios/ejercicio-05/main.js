const $post = document.getElementById('post');
const $loader = document.getElementById('loader');
const $errorMessage = document.getElementById('message-error');

async function peticion() {
	const respuesta = await fetch(
		'https://jsonplaceholder.typicode.com/posts/9999'
	);

	if (respuesta.status === 200) {
		return respuesta.json();
	}

	if (respuesta.status === 404) {
		throw new Error(`${respuesta.status} - Post no encontrado.`);
	}

	throw new Error(`${respuesta.status} - Ocurrió un error inesperado.`);
}

async function manejarPeticion() {
	$loader.innerText = 'Cargando datos...';
	$errorMessage.innerText = '';
	$errorMessage.className = ''; // Limpiar clases de error previas
	$post.innerHTML = '';
	try {
		const respuesta = await peticion();

		$post.innerText = respuesta.title;
	} catch (error) {
		$errorMessage.innerHTML = `
            <span class="block text-2xl mb-2">⚠️</span>
            ${error.message}
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
