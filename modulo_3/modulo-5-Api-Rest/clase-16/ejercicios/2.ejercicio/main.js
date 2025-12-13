// Función para obtener la COLECCIÓN
const fetchCollection = async () => {
	const display = document.getElementById('collection-result');
	const summary = document.getElementById('collection-summary');
	const endpointLabel = document.getElementById('collection-endpoint');

	// Definimos parámetros de paginación
	// limit=5 para no saturar la pantalla -> solo 5 productos
	// limit (cantidad) - offset (desde dónde empezar).
	const limit = 5;
	const offset = 0;

	// Actualizamos la etiqueta visual en el HTML
	endpointLabel.textContent = `GET /products?limit=${limit}&offset=${offset}`;

	try {
		const response = await fetch(
			`https://api.escuelajs.co/api/v1/products?limit=${limit}&offset=${offset}`
		);

		if (!response.ok) throw new Error('Error en la petición de colección');

		const data = await response.json();

		// Mostrar JSON formateado en pantalla
		// JSON.stringify(dato, replacer, espacio) -> espacio = 2 para indentación bonita
		display.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;

		// Actualizar resumen
		summary.innerHTML = `<strong>Tipo:</strong> ${
			Array.isArray(data) ? 'Array (Colección)' : 'Objeto'
		} <br> <strong>Cantidad mostrada:</strong> ${data.length} items`;
	} catch (error) {
		display.innerHTML = `<span class="text-red-500">Error: ${error.message}</span>`;
	}
};

// unción para obtener un RECURSO ÚNICO
const fetchProduct = async (id) => {
	const display = document.getElementById('product-result');
	const summary = document.getElementById('product-summary');
	const endpointLabel = document.getElementById('product-endpoint');

	// Actualizamos la etiqueta visual con el ID que recibimos
	endpointLabel.textContent = `GET /products/${id}`;

	try {
		const response = await fetch(
			`https://api.escuelajs.co/api/v1/products/${id}`
		);

		if (!response.ok)
			throw new Error(`Producto con ID ${id} no encontrado`);

		const data = await response.json();

		// Mostrar JSON formateado
		display.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;

		// Actualizar resumen
		summary.innerHTML = `<strong>Tipo:</strong> ${
			Array.isArray(data) ? 'Array' : 'Objeto (Entidad única)'
		} <br> <strong>Nombre:</strong> ${data.title}`;
	} catch (error) {
		display.innerHTML = `<span class="text-red-500">Error: ${error.message}</span>`;
	}
};

// Ejecutar al cargar la página
document.addEventListener('DOMContentLoaded', async () => {
	await fetchCollection();

	// Ejecutamos el recurso único con un ID dinámico
	// Cambia este número (ej: 25, 40, 100) y verás que el título del HTML cambia solo
	const idDinamico = 167;
	await fetchProduct(idDinamico);
});
