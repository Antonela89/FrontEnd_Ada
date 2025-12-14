// nodos
const $results = document.getElementById('results-container');
const $prev = document.getElementById('left-button');
const $pagina = document.getElementById('pagina');
const $next = document.getElementById('right-button');
const $infoPaginado = document.getElementById('info-paginado');

//configuracion
let allProducts = []; // se guardar los 50 productos
let currentPage = 1;
const itemsPerPage = 10; // Bloques de 10 elementos

// función para traer datos
const fetchProducts = async () => {
	const limit = 50;
	const offset = 0;

	try {
		const response = await fetch(
			`https://api.escuelajs.co/api/v1/products?limit=${limit}&offset=${offset}`
		);

		if (!response.ok) {
			throw new Error('No se ha obtenido respuesta');
		}

		const data = await response.json();

		allProducts = data; // guardar en la variable

		updatePage(); // vista
	} catch (error) {
		$results.innerHTML = `<div class="col-span-full text-red-500 text-center font-bold">Error al cargar datos: ${error.message}</div>`;
	}
};

// función para paginado
const updatePage = () => {
	// Calcular índices para el slice
	// Pag 1: (0, 10) | Pag 2: (10, 20) | Pag 3: (20, 30)
	const startIndex = (currentPage - 1) * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;

	// Obtenemos solo el bloque actual
	const productsToShow = allProducts.slice(startIndex, endIndex);

	// Renderizar
	renderProducts(productsToShow);
	updateUI();
};

// Renderizar Productos
const renderProducts = (products) => {
	$results.innerHTML = '';

	if (products.length === 0) {
		$results.innerHTML = `<div class="col-span-full text-center text-gray-400 py-10">No se encontraron productos con esos filtros.</div>`;
		return;
	}

	products.forEach((product) => {
		// Limpieza de imágenes (específico de esta API)
		let image = product.images[0] || '';
		image = image.replace(/["\[\]]/g, '');

		const card = document.createElement('article');
		card.className =
			'bg-gray-800 overflow-hidden rounded-lg shadow border border-gray-700 flex flex-col text-white animate-[fadeIn_0.5s_ease-in-out]';
		card.innerHTML = `
                    <div class="h-48 bg-slate-200 relative">
                        <img src="${image}" class="w-full h-full object-cover" onerror="this.src='https://placehold.co/400?text=No+Image'">
                        <span class="absolute bottom-2 right-2 bg-indigo-400/80 text-white px-2 py-1 rounded text-xs font-bold">$${product.price}</span>
                    </div>
                    <div class="p-4 flex-1">
                        <h3 class="font-bold text-gray-400 text-sm mb-1 line-clamp-1">${product.title}</h3>
                        <p class="text-xs text-gray-400 mb-2">${product.category.name}</p>
                    </div>
                `;
		$results.appendChild(card);
	});
};

// Actualizar Botones e Info
const updateUI = () => {
	$pagina.textContent = currentPage;
	const totalPages = Math.ceil(allProducts.length / itemsPerPage);

	$infoPaginado.textContent = `Mostrando página ${currentPage} de ${totalPages} (Total productos: ${allProducts.length})`;

	// Deshabilitar botones si es necesario
	$prev.disabled = currentPage === 1;
	$next.disabled = currentPage === totalPages;
};

// eventos
$prev.addEventListener('click', () => {
	if (currentPage > 1) {
		currentPage--;
		updatePage();
		// Scroll suave arriba al cambiar página
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}
});

$next.addEventListener('click', () => {
	const totalPages = Math.ceil(allProducts.length / itemsPerPage);
	if (currentPage < totalPages) {
		currentPage++;
		updatePage();
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}
});

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
	fetchProducts(); // Carga inicial sin filtros
});
