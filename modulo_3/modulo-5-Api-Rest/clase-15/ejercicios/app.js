// --- CONFIGURACIÓN ---
const API_URL = 'https://fakestoreapi.com/products';

// --- ESTADO GLOBAL ---
let allProducts = []; // Copia local de todos los productos
let isEditing = false; // Estado para detectar la edición de un producto

// --- ELEMENTOS DOM ---
const $productsGrid = document.getElementById('productsGrid'); // contenedor de cards
const $loadingDiv = document.getElementById('loading'); // contenedor de snipper
const $noResultsDiv = document.getElementById('noResults'); // contenedor para no hay resultados
const $resultsCount = document.getElementById('resultsCount'); // contador de resultados

// --- ELEMENTOS DOM PARA MOBILE ---
const $sidebar = document.getElementById('sidebar');
const $mobileMenuBtn = document.getElementById('mobileMenuBtn');
const $closeSidebarBtn = document.getElementById('closeSidebarBtn');
const $mobileOverlay = document.getElementById('mobileOverlay');

// Modal y Formulario
const $modal = document.getElementById('productModal'); // modal
const $productForm = document.getElementById('productForm'); // formulario de producto
const $modalTitle = document.getElementById('modalTitle'); // título del modal
const $submitBtn = document.getElementById('submitBtn'); // botón de enviar

// Campos Formulario
const $title = document.getElementById('title'); // titulo del producto
const $price = document.getElementById('price'); // precio del producto
const $category = document.getElementById('category'); // categoria del producto
const $desc = document.getElementById('description'); // descripción del producto
const $id = document.getElementById('productId'); // id del producto

// Filtros
const $searchInput = document.getElementById('searchInput'); // busqueda por titulo
const $filterCategory = document.getElementById('filterCategory'); // busqueda por categoria
const $filterPrice = document.getElementById('filterPrice'); // busqueda por precio
const $priceValue = document.getElementById('priceValue'); // valor elegido

// --- INICIALIZACIÓN ---
document.addEventListener('DOMContentLoaded', () => {
	fetchProducts(); // función para get

	// Listeners para filtros dinámicos
	// filtro precio
	$filterPrice.addEventListener('input', (e) => {
		$priceValue.innerText = `$${e.target.value}`;
		applyFilters(); // se aplica cuando se mueve el slider
	});

	// filtro categoria
	$filterCategory.addEventListener('change', applyFilters); // Aplica al cambiar select
	// filtro título
	$searchInput.addEventListener('input', applyFilters); // Aplica al escribir

	$mobileMenuBtn.addEventListener('click', toggleSidebar);
	$closeSidebarBtn.addEventListener('click', toggleSidebar);
	$mobileOverlay.addEventListener('click', toggleSidebar);
});

// Función para manejar el panel de filtros
function toggleSidebar() {
    // Si tiene la clase -translate-x-full, está oculto. Se la quitamos para mostrarlo.
    const isClosed = $sidebar.classList.contains("-translate-x-full");

    if (isClosed) {
        // Abrir
        $sidebar.classList.remove("-translate-x-full");
        $mobileOverlay.classList.remove("hidden");
        // Bloquear scroll del body
        document.body.classList.add("overflow-hidden");
    } else {
        // Cerrar
        $sidebar.classList.add("-translate-x-full");
        $mobileOverlay.classList.add("hidden");
        // Permitir scroll
        document.body.classList.remove("overflow-hidden");
    }
}

// --- OBTENER DATOS (GET) ---
// Función asincrona
async function fetchProducts() {
	try {
		const res = await fetch(API_URL); // Traigo todos los productos para poder filtrar localmente
		allProducts = await res.json(); // los asigno a la variable local

		// Ordenar por ID inverso para que salgan primero los nuevos
		allProducts.reverse();
		applyFilters(); // Renderiza usando el filtro inicial
		renderProducts(allProducts); // llamo a una función auxiliar para renderizar
		$loadingDiv.classList.add('hidden'); // agrego la clase "hidden" para ocultar el snipper
	} catch (error) {
		// atrapo el error
		console.error('Error cargando productos:', error); // aviso en consola - desarrollador
		alert('Error de conexión con la API'); // aviso al usuario
	}
}

// --- RENDERIZADO ---
function renderProducts(products) {
	$productsGrid.innerHTML = ''; // limpieza del contenedor de cards
	$resultsCount.innerText = `${products.length} Productos`; // Actualizar contador según longitud de array pasado como parametro

	// caso: 0 resultados
	if (products.length === 0) {
		$noResultsDiv.classList.remove('hidden'); // mostrar contenedor de no hay resultados
		return; // cortar ejecución
	}
	// caso: hay resultados
	$noResultsDiv.classList.add('hidden'); // ocultar el contenedor de no hay resultados

	// se itera con un fecth el array
	products.forEach((prod) => {
		const card = document.createElement('article'); // se crea un nodo por cada elemento
		card.className =
			'bg-white rounded-xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 flex flex-col h-full overflow-hidden group relative'; // se agregan las clases Tailwinds

		// se agrega el contenido de la card con los datos obtenidos
		card.innerHTML = ` 
            <!-- Imagen con efecto zoom suave -->
            <div class="h-48 flex justify-center items-center p-6 bg-white relative overflow-hidden border-b border-gray-50">
                <img src="${prod.image}" class="h-full object-contain transform group-hover:scale-110 transition-transform duration-500 mix-blend-multiply">
                
                <!-- Badge Categoría flotante -->
                <span class="absolute top-3 left-3 text-[10px] font-bold text-gray-500 bg-gray-100/80 backdrop-blur-sm px-2 py-1 rounded-md uppercase tracking-wide">
                    ${prod.category}
                </span>
            </div>

            <!-- Contenido -->
            <div class="p-5 flex-1 flex flex-col">
                <h3 class="font-bold text-slate-800 text-sm mb-2 leading-snug line-clamp-2 group-hover:text-indigo-600 transition-colors" title="${prod.title}">
                    ${prod.title}
                </h3>
                
                <p class="text-xs text-slate-400 line-clamp-2 mb-4 leading-relaxed flex-1">
                    ${prod.description}
                </p>

                <!-- Footer: Precio y Acciones -->
                <div class="mt-4 pt-4 border-t border-gray-50 flex items-center justify-between">
                    <div class="flex flex-col">
                        <span class="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Precio</span>
                        <span class="text-lg font-black text-slate-800">$${prod.price}</span>
                    </div>

                    <div class="flex gap-2 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-200">
                        <button onclick="prepareEdit(${prod.id})" 
                            class="w-8 h-8 flex items-center justify-center rounded-lg bg-amber-50 text-amber-600 hover:bg-amber-500 hover:text-white border border-amber-100 transition-all shadow-sm" title="Editar">
                            <i class="fa-solid fa-pen text-xs"></i>
                        </button>
                        
                        <button onclick="deleteProduct(${prod.id})" 
                            class="w-8 h-8 flex items-center justify-center rounded-lg bg-red-50 text-red-600 hover:bg-red-500 hover:text-white border border-red-100 transition-all shadow-sm" title="Eliminar">
                            <i class="fa-solid fa-trash text-xs"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
		$productsGrid.appendChild(card); // agregar la card creada al contenedor de productos
	});
}

// --- 2. FILTRADO (Lógica Cliente) ---
function applyFilters() {
	const cat = $filterCategory.value; // captura de la categoria seleccionada
	const maxPrice = parseFloat($filterPrice.value); // captura y parseo de precio elegiddo
	const searchTerm = $searchInput.value.toLowerCase().trim(); // captura texto búsqueda

	// filtrado de productos según las constantes creadas anteriormente
	const filtered = allProducts.filter((p) => {
		// Filtro por categoria
		const matchCat = cat === 'all' ? true : p.category === cat;
		// Filtro por precio
		const matchPrice = p.price <= maxPrice;
		// Filtro por nombre (título)
		const matchSearch = p.title.toLowerCase().includes(searchTerm);

		// se devuelven los resultados obtenidos
		return matchCat && matchPrice && matchSearch;
	});

	// se renderizan los resultados filtrados
	renderProducts(filtered);
}

// funcion para resetear fltros a valores iniciales
function resetFilters() {
	$filterCategory.value = 'all';
	$filterPrice.value = 1000;
	$searchInput.value = '';
	$priceValue.innerText = '$1000';
	renderProducts(allProducts); // se renderiza el array original sin filtrado
}

// --- 3. MODAL Y FORMULARIO ---
function openModal(isEdit = false) {
	// función para mostrar formulario en modal, por defecto se muestra el form de crear producto
	$modal.classList.remove('hidden'); // se muestra el modal

	// Animación de entrada
	setTimeout(() => {
		$modal.querySelector('div').classList.remove('scale-95', 'opacity-0');
		$modal.querySelector('div').classList.add('scale-100', 'opacity-100');
	}, 10);

	isEditing = isEdit; // se asigna a la variable de estado el valor del parametro que entra en la función
	if (!isEdit) {
		$productForm.reset(); // se limpia el form
		$modalTitle.innerText = 'Nuevo Producto'; // se agrega un titulo al modal
		$submitBtn.innerText = 'Crear Producto'; // se cambia el contenido del botón del modal
		$submitBtn.classList.replace('bg-yellow-500', 'bg-blue-600'); // se reemplaza el fondo del boton, de amarillo a azul
	}
}

function closeModal() {
	// función para cerrar formulario en modal
	// Animación de salida
	$modal.querySelector('div').classList.remove('scale-100', 'opacity-100');
	$modal.querySelector('div').classList.add('scale-95', 'opacity-0');

	setTimeout(() => {
		$modal.classList.add('hidden');
	}, 200); // Esperar a que termine la animación
}

// Cerrar al hacer click fuera del modal
$modal.addEventListener('click', (e) => {
	if (e.target === $modal) closeModal();
});

// escuchar el enter en la busqueda
$searchInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        e.preventDefault(); // Evita que el formulario se envíe si hay uno
        
        // Ocultar el teclado del móvil (UX importante)
        $searchInput.blur(); 

        // Cerrar el sidebar SOLO si estamos en modo móvil
        // (Verificamos si el sidebar tiene la clase de oculto o el ancho de la pantalla)
        if (window.innerWidth < 768) { 
            toggleSidebar();
        }
    }
});

// --- 4. CRUD (POST / PUT / DELETE) ---

// Preparar edición
window.prepareEdit = (id) => {
	const product = allProducts.find((p) => p.id === id); // filtrar producto por id
	if (!product) return; // cortar ejecución

	// se capturan los valores del formulario y se los asigna a las propiedades del producto
	$id.value = product.id;
	$title.value = product.title;
	$price.value = product.price;
	$category.value = product.category;
	$desc.value = product.description;

	$modalTitle.innerText = `Editar Producto #${id}`; // tiulo del modal para edición
	$submitBtn.innerText = 'Guardar Cambios'; // texto botón segun edición
	$submitBtn.classList.replace('bg-blue-600', 'bg-yellow-500'); // fondo del boton segun edición

	openModal(true); // abrir el modal
};

// Manejo del Submit
$productForm.addEventListener('submit', async (e) => {
	e.preventDefault(); // prevenir el comportamiento del form

	const data = {
		// creacion del objeto data con los valores del form
		title: $title.value,
		price: parseFloat($price.value),
		description: $desc.value,
		image: 'https://i.pravatar.cc', // Imagen default
		category: $category.value,
	};

	// manejar comportamiento de botón
	$submitBtn.disabled = true;
	$submitBtn.innerText = 'Procesando...';

	// bloque tryCatch para captura y manejo de errores
	try {
		let result; // definición de una variable
		// segun valor de estado global
		if (isEditing) {
			// Caso: true
			// PUT
			const res = await fetch(`${API_URL}/${$id.value}`, {
				method: 'PUT',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(data),
			});
			result = await res.json();

			// Actualizar localmente
			const index = allProducts.findIndex((p) => p.id == $id.value);
			if (index !== -1)
				// caso: id encontrado
				allProducts[index] = { ...allProducts[index], ...data }; // actualizar producto
			alert('Producto actualizado (Simulado)'); // aviso al usuario
		} else {
			// POST
			const res = await fetch(API_URL, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(data),
			});
			result = await res.json();

			// Agregar localmente
			allProducts.unshift({ ...data, id: result.id }); // agrega al inicio del array
			alert(`Producto creado con ID: ${result.id}`);
		}

		renderProducts(allProducts); // Repintar
		closeModal(); // cerrar modal
	} catch (error) {
		alert('Hubo un error en la operación');
		console.error(error);
	} finally {
		$submitBtn.disabled = false; // habilitar botón
	}
});

// Delete
window.deleteProduct = async (id) => {
	if (!confirm('¿Seguro que deseas eliminar este producto?')) return;

	try {
		// DELETE
		await fetch(`${API_URL}/${id}`, { method: 'DELETE' });

		// Eliminar del array local
		allProducts = allProducts.filter((p) => p.id !== id);
		renderProducts(allProducts); // mostrar productos sin el elemento eliminado
		alert('Producto eliminado (Simulado)'); // aviso al usuario
	} catch (error) {
		alert('Error al eliminar'); // error en consola -> desarrollador
	}
};
