// capturar nodos
const $btn = document.getElementById('btn');
const $list = document.getElementById('list');
const $loader = document.getElementById('loader');
const $errorMessage = document.getElementById('message-error');

async function peticion() {
	const respuesta = await fetch(
		'https://jsonplaceholder.typicode.com/INVALIDO'
	);

	if (!respuesta.ok) {
		throw new Error(
			`${respuesta.status} - No se pudieron cargar los datos. Intente más tarde.`
		);
	}

	return await respuesta.json();
}

async function manejarPeticion() {
	// Preparar UI
	$loader.innerText = 'Cargando datos...';
	$errorMessage.innerText = '';
	$errorMessage.className = ''; // Limpiar clases de error previas
	$list.innerHTML = '';
	try {
		const respuesta = await peticion();

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

$btn.addEventListener('click', async () => {
	//  Deshabilitar botón (Estado de carga)
	$btn.innerText = 'Espere...';
	$btn.disabled = true;
	$btn.classList.add('opacity-50', 'cursor-not-allowed');

	// esperar
	await manejarPeticion();

	// habilitar boton -> Estado inicial
	$btn.innerText = 'Reintentar';
	$btn.disabled = false;
	$btn.classList.remove('opacity-50', 'cursor-not-allowed');
});
