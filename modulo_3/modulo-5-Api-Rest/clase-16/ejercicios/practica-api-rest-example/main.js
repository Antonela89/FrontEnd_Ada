// --- CONFIGURACIÓN DE RUTAS ---
const API_URL_PRODUCTS = 'http://localhost:3000/api/products';
const API_URL_USERS = 'http://localhost:3000/api/users';

// --- ESTADO GLOBAL (Verificar si se edita un Producto o usuario) ---
let currentProducts = [];
let currentUsers = [];

// --- NODOS DEL DOM ---
const $html = document.documentElement;
const $productsContainer = document.getElementById('products-container');
const $usersContainer = document.getElementById('users-container');

// Estadísticas
const $inventoryValueEl = document.getElementById('inventory-value');
const $lowStockEl = document.getElementById('low-stock');
const $totalProductsEl = document.getElementById('total-products');
const $totalUsersEl = document.getElementById('total-users');

// Filtros
const $filterForm = document.getElementById('filterForm');
const $categorySelect = document.getElementById('categorySelect');
const $clearBtn = document.getElementById('clearBtn');
const $titleInput = document.getElementById('titleInput');
const $minPriceInput = document.getElementById('minPrice');
const $maxPriceInput = document.getElementById('maxPrice');

// Botones UI
const $backToTopBtn = document.getElementById('back-to-top');
const $themeToggleBtn = document.getElementById('theme-toggle');
const $themeIcon = document.getElementById('theme-icon');

// Titulos 
const $sectionTitle = document.querySelector('h2'); // Título de la sección productos

// --- LÓGICA DE PRODUCTOS ---
// --- FUNCIONES DE RENDERIZADO ---
// RENDERIZAR TARJETAS (Vista Normal)
const renderProducts = (productsList) => {
	// Restaurar el estilo de Grid
	$productsContainer.className =
		'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6';
	$productsContainer.innerHTML = '';

	if (productsList.length === 0) {
		$productsContainer.innerHTML = `
            <div class="col-span-full text-center py-10 text-gray-500 dark:text-gray-400">
                <i class="fa-solid fa-box-open text-4xl mb-3"></i>
                <p>No se encontraron productos.</p>
            </div>
        `;
		return;
	}

	productsList.forEach((product) => {
		const card = document.createElement('article');
		card.className =
			'bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-100 dark:border-gray-700 flex flex-col';
		// mongoDB usa _id, pero también vericar id
		const id = product._id || product.id;

		card.innerHTML = `
            <div class="p-5 flex-grow">
                <div class="flex justify-between items-start mb-2">
                    <span class="text-xs font-bold px-2 py-1 rounded bg-indigo-100 text-indigo-600 dark:bg-indigo-900 dark:text-indigo-300 uppercase">${
						product.category
					}</span>
                    <span class="text-sm text-gray-500 dark:text-gray-400">${
						product.brand
					}</span>
                </div>
                <h3 class="text-xl font-bold mb-2 text-gray-800 dark:text-white">${
					product.name
				}</h3>
                <p class="text-gray-600 dark:text-gray-300 text-sm line-clamp-2">${
					product.description
				}</p>
            </div>
            <div class="px-5 py-3 border-t border-gray-100 dark:border-gray-700">
                <div class="flex justify-between items-center mb-3">
                    <span class="text-2xl font-bold text-gray-900 dark:text-white">$${
						product.price
					}</span>
                    <span class="text-sm ${
						product.stock > 0
							? 'text-green-600'
							: 'text-red-500 font-bold'
					}">
                        ${
							product.stock > 0
								? `Stock: ${product.stock}`
								: 'AGOTADO'
						}
                    </span>
                </div>
                <div class="flex gap-2">
                    <button onclick="openProductModal('${id}')" class="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-1.5 rounded transition-colors text-sm"><i class="fa-solid fa-pen"></i> Editar</button>
                    <button onclick="deleteProduct('${id}')" class="flex-1 bg-red-500 hover:bg-red-600 text-white py-1.5 rounded transition-colors text-sm"><i class="fa-solid fa-trash"></i></button>
                </div>
            </div>
        `;
		$productsContainer.appendChild(card);
	});
};

// RENDERIZAR REPORTE DE INVENTARIO (Vista Tabla)
window.renderInventoryReport = () => {
	// Cambiar título de la sección
	document.querySelector('h2').innerText =
		'💰 Reporte Financiero de Inventario';

	// Cambiar estilos del contenedor: Quitar GRID, poner estilo de TABLA
	$productsContainer.className =
		'bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700';

	// Preparar formateador de dinero
	const formatter = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
	});
	// variable para suma de precios
	let grandTotal = 0;

	// Construir filas de la tabla
	const rowsHTML = currentProducts
		.map((product) => {
			const subtotal = product.price * product.stock;
			grandTotal += subtotal;

			return `
            <tr class="hover:bg-gray-50 dark:hover:bg-gray-700/50 border-b border-gray-100 dark:border-gray-700 transition-colors">
                <td class="px-6 py-4">
                    <div class="text-sm font-medium text-gray-900 dark:text-white">${
						product.name
					}</div>
                    <div class="text-sm text-gray-500 dark:text-gray-400">${
						product.brand
					}</div>
                </td>
                <td class="px-6 py-4 text-right text-sm text-gray-500 dark:text-gray-300">
                    ${product.stock} u.
                </td>
                <td class="px-6 py-4 text-right text-sm text-gray-500 dark:text-gray-300">
                    ${formatter.format(product.price)}
                </td>
                <td class="px-6 py-4 text-right text-sm font-bold text-gray-800 dark:text-gray-100">
                    ${formatter.format(subtotal)}
                </td>
            </tr>
        `;
		})
		.join('');

	// Inyectar la tabla completa
	$productsContainer.innerHTML = `
        <div class="overflow-x-auto">
            <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead class="bg-gray-50 dark:bg-gray-700">
                    <tr>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Producto</th>
                        <th class="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Cantidad</th>
                        <th class="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Precio Unit.</th>
                        <th class="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Total</th>
                    </tr>
                </thead>
                <tbody class="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                    ${rowsHTML}
                </tbody>
                <tfoot class="bg-gray-100 dark:bg-gray-900 font-bold">
                    <tr>
                        <td colspan="3" class="px-6 py-4 text-right text-gray-700 dark:text-gray-200 uppercase text-sm">Total Inventario:</td>
                        <td class="px-6 py-4 text-right text-green-600 dark:text-green-400 text-lg">${formatter.format(
							grandTotal
						)}</td>
                    </tr>
                </tfoot>
            </table>
        </div>
        <!-- Botón para volver -->
        <div class="p-4 bg-gray-50 dark:bg-gray-700 border-t border-gray-200 dark:border-gray-600 flex justify-center">
            <button onclick="resetProductFilter()" class="text-indigo-600 dark:text-indigo-400 hover:underline text-sm font-medium">
                ← Volver a vista de tarjetas
            </button>
        </div>
    `;
};

// Resetear el dashboard a estado original.
const originalResetProductFilter = window.resetProductFilter; // (Si existía)
window.resetProductFilter = () => {
	// Restaurar título original
	document.querySelector('h2').innerText = '📦 Productos Recientes';
	// Volver a renderizar tarjetas (esto restaurará el GRID gracias a renderProducts)
	renderProducts(currentProducts);
};

// Cargar productos de la API
const loadProducts = async () => {
	try {
		const response = await fetch(API_URL_PRODUCTS);
		const data = await response.json();
		// Verificar si es un array
		const products = Array.isArray(data) ? data : data.data || [];
		currentProducts = products; // Guardamos la lista original

		// Agregar las categorias
		populateCategories(products);

		// --- CÁLCULOS ESTADÍSTICOS ---

		// Total
		$totalProductsEl.innerText = products.length;

		// Valor Inventario
		const totalValue = products.reduce(
			(acc, p) => acc + p.price * p.stock,
			0
		);

		$inventoryValueEl.innerText = new Intl.NumberFormat('en-US', {
			style: 'currency',
			currency: 'USD',
			maximumFractionDigits: 0,
		}).format(totalValue);

		// Stock Bajo
		const lowStockCount = products.filter((p) => p.stock < 5).length;
		$lowStockEl.innerText = lowStockCount;

		if (lowStockCount > 0) {
			$lowStockEl.classList.add('text-red-600', 'dark:text-red-400');
		}

		// Renderizar TODOS los productos al inicio
		renderProducts(currentProducts);
	} catch (error) {
		console.error('Error productos:', error);
	}
};

// --- FUNCIONES DE FILTRO ---

// Filtrar Stock Bajo
window.filterLowStock = () => {
	const lowStockProducts = currentProducts.filter(
		(product) => product.stock < 5
	);
	renderProducts(lowStockProducts);

	// Cambiar título de la sección para dar feedback
	document.querySelector(
		'h2'
	).innerText = `⚠️ Productos con Poco Stock (${lowStockProducts.length})`;
};

// Resetear Filtro (Ver todos)
window.resetProductFilter = () => {
	renderProducts(currentProducts);

	// Restaurar título original
	document.querySelector('h2').innerText = `📦 Productos Recientes`;
};

// Abrir Modal Producto (Crear o Editar)
window.openProductModal = (id = null) => {
	const $modal = document.getElementById('product-modal');
	const $title = document.getElementById('modal-product-title');
	const $form = document.getElementById('product-form');

	$modal.classList.remove('hidden');

	if (id) {
		// Modo Edición: Llenar datos
		const product = currentProducts.find((p) => (p._id || p.id) === id);
		$title.innerText = 'Editar Producto';
		document.getElementById('prod-id').value = id;
		document.getElementById('prod-name').value = product.name;
		document.getElementById('prod-price').value = product.price;
		document.getElementById('prod-stock').value = product.stock;
		document.getElementById('prod-brand').value = product.brand;
		document.getElementById('prod-category').value = product.category;
		document.getElementById('prod-desc').value = product.description;
	} else {
		// Modo Creación: Limpiar
		$title.innerText = 'Nuevo Producto';
		$form.reset();
		document.getElementById('prod-id').value = '';
	}
};

window.closeProductModal = () => {
	document.getElementById('product-modal').classList.add('hidden');
};

// Guardar Producto
document
	.getElementById('product-form')
	.addEventListener('submit', async (e) => {
		e.preventDefault();

		const id = document.getElementById('prod-id').value;
		const data = {
			name: document.getElementById('prod-name').value,
			price: Number(document.getElementById('prod-price').value),
			stock: Number(document.getElementById('prod-stock').value),
			brand: document.getElementById('prod-brand').value,
			category: document.getElementById('prod-category').value,
			description: document.getElementById('prod-desc').value,
		};

		try {
			let response;
			if (id) {
				// Actualizar (PUT)
				response = await fetch(`${API_URL_PRODUCTS}/${id}`, {
					method: 'PUT',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify(data),
				});
			} else {
				// Crear (POST)
				response = await fetch(API_URL_PRODUCTS, {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify(data),
				});
			}

			if (response.ok) {
				closeProductModal();
				loadProducts(); // Recargar lista
				alert(id ? 'Producto actualizado' : 'Producto creado');
			} else {
				alert('Error al guardar producto');
			}
		} catch (error) {
			console.error(error);
		}
	});

// Eliminar Producto
window.deleteProduct = async (id) => {
	if (!confirm('¿Estás seguro de eliminar este producto?')) return;

	try {
		const res = await fetch(`${API_URL_PRODUCTS}/${id}`, {
			method: 'DELETE',
		});
		if (res.ok) {
			loadProducts();
		} else {
			alert('No se pudo eliminar');
		}
	} catch (error) {
		console.error(error);
	}
};

// --- LÓGICA DE USUARIOS ---

// Leer Usuarios
const loadUsers = async () => {
	try {
		const response = await fetch(API_URL_USERS);
		const data = await response.json();
		// Verificación de si hay array
		const users = Array.isArray(data) ? data : data.data || [];
		currentUsers = users;
		$totalUsersEl.innerText = users.length;
		$usersContainer.innerHTML = '';

		users.forEach((user) => {
			const row = document.createElement('tr');
			row.className =
				'hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors border-b dark:border-gray-700';
			const id = user._id || user.id;

			row.innerHTML = `
                <td class="px-5 py-4 text-sm">
                    <div class="flex items-center">
                        <div class="flex-shrink-0 w-10 h-10">
                            <div class="w-full h-full rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold">
                                ${user.name.charAt(0).toUpperCase()}
                            </div>
                        </div>
                        <div class="ml-3">
                            <p class="text-gray-900 dark:text-white font-medium whitespace-no-wrap">${
								user.name
							}</p>
                        </div>
                    </div>
                </td>
                <td class="px-5 py-4 text-sm text-gray-900 dark:text-gray-300">${
					user.email
				}</td>
                <td class="px-5 py-4 text-sm hidden md:table-cell">
                    <span class="px-3 py-1 font-semibold text-green-900 bg-green-200 rounded-full dark:bg-green-900 dark:text-green-200">
                        ${user.age || 'N/A'} años
                    </span>
                </td>
                <td class="px-5 py-4 text-sm text-center">
                    <button onclick="openUserModal('${id}')" class="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-200 mr-3">
                        <i class="fa-solid fa-pen"></i>
                    </button>
                    <button onclick="deleteUser('${id}')" class="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-200">
                        <i class="fa-solid fa-trash"></i>
                    </button>
                </td>
            `;
			$usersContainer.appendChild(row);
		});
	} catch (error) {
		console.error('Error usuarios:', error);
	}
};

// Abrir modal Usuario
window.openUserModal = (id = null) => {
	const $modal = document.getElementById('user-modal');
	const $title = document.getElementById('modal-user-title');
	const $form = document.getElementById('user-form');

	$modal.classList.remove('hidden');

	if (id) {
		const user = currentUsers.find((u) => (u._id || u.id) === id);
		$title.innerText = 'Editar Usuario';
		document.getElementById('user-id').value = id;
		document.getElementById('user-name').value = user.name;
		document.getElementById('user-email').value = user.email;
		document.getElementById('user-age').value = user.age;
		document.getElementById('user-pass').placeholder =
			'Dejar vacío para mantener actual';
		document.getElementById('user-pass').required = false;
	} else {
		$title.innerText = 'Nuevo Usuario';
		$form.reset();
		document.getElementById('user-id').value = '';
		document.getElementById('user-pass').placeholder =
			'Contraseña requerida';
		document.getElementById('user-pass').required = true;
	}
};

// Cerrar modal Usuario
window.closeUserModal = () => {
	document.getElementById('user-modal').classList.add('hidden');
};

// Guardar Usuario
document.getElementById('user-form').addEventListener('submit', async (e) => {
	e.preventDefault();

	const id = document.getElementById('user-id').value;
	const $pass = document.getElementById('user-pass').value;

	const data = {
		name: document.getElementById('user-name').value,
		email: document.getElementById('user-email').value,
		age: Number(document.getElementById('user-age').value),
	};

	// Solo se envia password si es nuevo o si el usuario escribió una nueva
	if ($pass) {
		data.password = $pass;
	}

	try {
		let response;
		if (id) {
			response = await fetch(`${API_URL_USERS}/${id}`, {
				method: 'PUT',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(data),
			});
		} else {
			response = await fetch(API_URL_USERS, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(data),
			});
		}

		if (response.ok) {
			closeUserModal();
			loadUsers();
			alert(id ? 'Usuario actualizado' : 'Usuario creado');
		} else {
			// Manejo básico de error (ej: email duplicado)
			const err = await response.json();
			alert('Error: ' + (err.message || 'No se pudo guardar'));
		}
	} catch (error) {
		console.error(error);
	}
});

// Eliminar Usuario
window.deleteUser = async (id) => {
	if (!confirm('¿Eliminar usuario?')) return;

	try {
		const res = await fetch(`${API_URL_USERS}/${id}`, { method: 'DELETE' });
		if (res.ok) loadUsers();
		else alert('No se pudo eliminar');
	} catch (error) {
		console.error(error);
	}
};

// LÓGICA DE FILTROS AVANZADOS

// Función para poblar el Select de Categorías
// Se ejecuta cada vez que se cargan los productos (dentro de loadProducts)
const populateCategories = (products) => {
	// Extraer categorías únicas
	const categories = [...new Set(products.map((p) => p.category))];

	// Guardar la selección actual si existe
	const currentSelection = $categorySelect.value;

	// Limpiar opciones (manteniendo la primera)
	$categorySelect.innerHTML =
		'<option value="">Todas las categorías</option>';

	categories.forEach((cat) => {
		const option = document.createElement('option');
		option.value = cat;
		option.textContent = cat;
		$categorySelect.appendChild(option);
	});

	// Restaurar selección si aun existe esa categoría
	if (categories.includes(currentSelection)) {
		$categorySelect.value = currentSelection;
	}
};

// Aplicar Filtros
$filterForm.addEventListener('submit', (e) => {
	e.preventDefault();

	const $titleTerm = document
		.getElementById('titleInput')
		.value.toLowerCase();
	const $categoryTerm = $categorySelect.value;
	const $minPrice = document.getElementById('minPrice').value;
	const $maxPrice = document.getElementById('maxPrice').value;

	// Filtramos sobre la lista ORIGINAL (currentProducts)
	const filteredProducts = currentProducts.filter((product) => {
		// Filtro Nombre
		const matchTitle = product.name.toLowerCase().includes($titleTerm);

		// Filtro Categoría
		const matchCategory =
			$categoryTerm === '' || product.category === $categoryTerm;

		// Filtro Precio
		const price = parseFloat(product.price);
		const matchMin = $minPrice === '' || price >= parseFloat($minPrice);
		const matchMax = $maxPrice === '' || price <= parseFloat($maxPrice);

		return matchTitle && matchCategory && matchMin && matchMax;
	});

	// Renderizar resultados filtrados
	renderProducts(filteredProducts);

	// Feedback visual en el título
	const titleEl = document.querySelector('h2'); // El título de la sección productos
	if (titleEl) {
		if (filteredProducts.length !== currentProducts.length) {
			titleEl.textContent = `🔍 Resultados: ${filteredProducts.length}`;
		} else {
			titleEl.textContent = `📦 Productos Recientes`;
		}
	}
});

// Limpiar Filtros
$clearBtn.addEventListener('click', () => {
	$filterForm.reset();
	resetProductFilter(); // Usa la función que ya tenías para restaurar todo
});

// Scroll suave a la tabla de usuarios
window.scrollToUsers = () => {
	const $section = document.getElementById('users-section');
	if ($section) {
		$section.scrollIntoView({ behavior: 'smooth' });
	}
};

// --- BOTÓN VOLVER ARRIBA ---
document.addEventListener('DOMContentLoaded', () => {
	const $backToTopBtn = document.getElementById('back-to-top');

	// Verificación de seguridad: si no encuentra el botón, no hace nada
	if (!$backToTopBtn) return;

	// Detectar el Scroll
	window.addEventListener('scroll', () => {
		// Si bajamos más de 300px
		if (window.scrollY > 300) {
			$backToTopBtn.classList.remove('hidden');
			$backToTopBtn.classList.add('flex');
		} else {
			$backToTopBtn.classList.add('hidden');
			$backToTopBtn.classList.remove('flex');
		}
	});

	// Detectar el Clic para subir
	$backToTopBtn.addEventListener('click', () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	});
});

// --- INICIALIZACIÓN Y DARK MODE ---
const updateThemeIcon = (isDark) => {
	$themeIcon.innerHTML = isDark
		? `<i class="fa-solid fa-sun text-indigo-400"></i>`
		: `<i class="fa-solid fa-moon text-indigo-700"></i>`;
};

// Verificar preferencia guardada
if (localStorage.getItem('theme') === 'dark') {
	$html.classList.add('dark');
}

$themeToggleBtn.addEventListener('click', () => {
	$html.classList.toggle('dark');
	const isDark = $html.classList.contains('dark');

	// Guardar preferencia
	localStorage.setItem('theme', isDark ? 'dark' : 'light');

	// Actualizar icono
	updateThemeIcon(isDark);
});

document.addEventListener('DOMContentLoaded', () => {
	loadProducts();
	loadUsers();
});
