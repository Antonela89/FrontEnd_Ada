// nodos
const searchInput = document.getElementById('searchInput'); // input de entrada 
const searchBtn = document.getElementById('searchBtn'); // boton de busqueda
const resultsContainer = document.getElementById('resultsContainer'); // contenedor de resultados
const urlDisplay = document.getElementById('urlDisplay'); // display de la url formada

// Función principal de búsqueda
const searchProducts = async () => {
    // obtener el query desde el input de entrada
    // trim() -> limpieza de espacios sobrantes
	const query = searchInput.value.trim();

	// Construcción de la URL Dinámica
	// Usar objeto URL para evitar errores de sintaxis manual
	const url = new URL('https://api.escuelajs.co/api/v1/products');

    // verificación
	// Agregar el parámetro de búsqueda si el usuario escribió algo
	if (query) {
		// La API de Platzi usa el filtro 'title' para buscar por nombre
		url.searchParams.set('title', query);
	}

	// Mostrar la URL generada en pantalla 
	urlDisplay.textContent = url.toString();

	// Feedback de carga
	resultsContainer.innerHTML = `
                <div class="col-span-full text-center py-10">
                    <i class="fas fa-spinner fa-spin text-4xl text-indigo-400"></i>
                    <p class="mt-2 text-white">Buscando en la API...</p>
                </div>
            `;

	try {
		// Petición Fetch
        // se pasa la url obtenida 
		const response = await fetch(url);
        // manejo de respuesta erronea
		if (!response.ok) throw new Error('Error al conectar con la API');

        // limpiar input 
        searchInput.value = '';

        // formatear respuesta
		const products = await response.json();

		// Renderizar de resultados
		renderResults(products);
	} catch (error) {
        // manejor de errores
		resultsContainer.innerHTML = `
                    <div class="col-span-full text-center text-red-500 font-bold p-4 bg-red-50 rounded">
                        Error: ${error.message}
                    </div>
                `;
	}
};

// Función para dibujar las tarjetas en el HTML
const renderResults = (products) => {
	// Limpiar contenedor
	resultsContainer.innerHTML = '';

    // verificacion
    // si la lista no tiene productos
	if (products.length === 0) {
		resultsContainer.innerHTML = `
                    <div class="col-span-full text-center text-white py-10 bg-gray-800 rounded-lg shadow">
                        <i class="fas fa-box-open text-4xl mb-2"></i>
                        <p>No se encontraron productos con ese nombre.</p>
                    </div>
                `;
		return;
	}

	// Crear una tarjeta por cada producto
	products.forEach((product) => {
		const card = document.createElement('article');
		card.className =
			'bg-gray-800 overflow-hidden rounded-lg shadow border border-gray-700 flex flex-col text-white';

		// Intentar usar la imagen, si falla poner un placeholder
		const image =
			product.images.length > 0
				? product.images[0]
				: 'https://via.placeholder.com/300';

		// Limpiar la URL de la imagen
		const cleanImage = image.replace(/["\[\]]/g, '');

        // inyectar el contenido obtenido dentro de la card
		card.innerHTML = `
                    <div class="h-48 bg-gray-200 relative group">
                        <img src="${cleanImage}" alt="${product.title}" class="w-full h-full object-cover group-hover:scale-110 transition duration-500" onerror="this.src='https://placehold.co/600x400?text=No+Image'">
                        <span class="absolute top-2 right-2 px-2 py-1 text-xs font-bold rounded shadow bg-indigo-600 text-white">$${product.price}</span>
                    </div>
                    <div class="p-4 flex-1 flex flex-col justify-between">
                        <div>
                            <h3 class="font-bold  text-sm mb-1">${product.title}</h3>
                            <span class="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">${product.category.name}</span>
                        </div>
                    </div>
                `;
        // agregar la card al contenedor de resultados
		resultsContainer.appendChild(card);
	});
};

// Event Listeners
searchBtn.addEventListener('click', searchProducts);

// Permitir buscar al presionar "Enter" en el input
searchInput.addEventListener('keypress', (e) => {
	if (e.key === 'Enter') searchProducts();
});
