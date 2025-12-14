// Referencias al DOM
        const form = document.getElementById('filterForm');
        const titleInput = document.getElementById('titleInput');
        const categorySelect = document.getElementById('categorySelect');
        const minPrice = document.getElementById('minPrice');
        const maxPrice = document.getElementById('maxPrice');
        const productsGrid = document.getElementById('productsGrid');
        const urlDebug = document.getElementById('urlDebug');
        const clearBtn = document.getElementById('clearBtn');

        // Cargar Categorías al iniciar
        const loadCategories = async () => {
            try {
                const res = await fetch('https://api.escuelajs.co/api/v1/categories');
                const categories = await res.json();
                
                categories.forEach(cat => {
                    const option = document.createElement('option');
                    option.value = cat.id;
                    option.textContent = cat.name;
                    categorySelect.appendChild(option);
                });
            } catch (error) {
                console.error("Error cargando categorías", error);
            }
        };

        // Función Principal: Obtener Productos con Filtros
        const fetchProducts = async () => {
            // Loader
            productsGrid.innerHTML = `<div class="col-span-full text-center py-20"><i class="fas fa-spinner fa-spin text-4xl text-indigo-400"></i></div>`;

            // --- CONSTRUCCIÓN DE URL ---
            const url = new URL('https://api.escuelajs.co/api/v1/products');

            // Agregar parámetros SOLO si tienen valor
            if (titleInput.value) url.searchParams.set('title', titleInput.value);
            if (categorySelect.value) url.searchParams.set('categoryId', categorySelect.value);
            if (minPrice.value) url.searchParams.set('price_min', minPrice.value);
            if (maxPrice.value) url.searchParams.set('price_max', maxPrice.value);

            // Mostrar URL en pantalla
            urlDebug.textContent = url.toString();

            try {
                const res = await fetch(url);
                const products = await res.json();
                renderProducts(products);
            } catch (error) {
                productsGrid.innerHTML = `<div class="col-span-full text-red-500 text-center">Error al cargar datos.</div>`;
            }
        };

        // Renderizar Productos
        const renderProducts = (products) => {
            productsGrid.innerHTML = '';

            if (products.length === 0) {
                productsGrid.innerHTML = `<div class="col-span-full text-center text-slate-400 py-10">No se encontraron productos con esos filtros.</div>`;
                return;
            }

            products.forEach(product => {
                // Limpieza de imágenes (específico de esta API)
                let image = product.images[0] || '';
                image = image.replace(/["\[\]]/g, ''); 

                const card = document.createElement('div');
                card.className = "bg-gray-800 overflow-hidden rounded-lg shadow border border-gray-700 flex flex-col text-white";
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
                productsGrid.appendChild(card);
            });
        };

        // Eventos
        form.addEventListener('submit', (e) => {
            e.preventDefault(); // Evitar recarga de página
            fetchProducts();
        });

        clearBtn.addEventListener('click', () => {
            form.reset();
            fetchProducts();
        });

        // Inicialización
        document.addEventListener('DOMContentLoaded', () => {
            loadCategories();
            fetchProducts(); // Carga inicial sin filtros
        });