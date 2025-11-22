// captura de nodos
const $form = document.getElementById('form');
const $loader = document.getElementById('loader');
const $message = document.getElementById('message');

$form.addEventListener('submit', async (e) => {
	e.preventDefault();

	const title = e.target.title.value;
	const content = e.target.content.value;

	if (!title || !content) {
		$message.innerText = '⚠️ Por favor completa todos los campos';
		$message.className = 'text-orange-500 font-bold';
		return;
	}

	try {
		$loader.innerText = `Enviando datos...`; // Mostrar el loader
		$message.innerText = ''; // Limpiar errores previos
		const $btn = $form.querySelector('button');
		$btn.disabled = true;
		$btn.classList.add('opacity-50');

		const response = await fetch(
			'https://jsonplaceholder.typicode.com/posts',
			{
				method: 'POST',
				body: JSON.stringify({
					title: title,
					body: content,
					userId: 1,
				}),
				headers: {
					'Content-type': 'application/json; charset=UTF-8',
				},
			}
		);

		if (!response.ok) {
			throw new Error(`${response.status} - No se pudo cargar`);
		}

		const data = await response.json();
		console.log('Respuesta del servidor:', data);

		$message.innerText = '¡Post creado!';
		$message.className = 'text-green-500 font-bold';
		$form.reset();
	} catch (error) {
		$message.innerText = `❌ - ${error}`;
		$message.className = 'text-red-500 font-bold';
	} finally {
		// 4. Esto se ejecuta SIEMPRE (haya éxito o error)
		$loader.innerText = '';

		// Rehabilitamos el botón
		const $btn = $form.querySelector('button');
		$btn.disabled = false;
		$btn.classList.remove('opacity-50');
	}
});
