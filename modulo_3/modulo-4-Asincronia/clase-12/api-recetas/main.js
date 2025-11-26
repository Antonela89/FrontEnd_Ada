// Referencias DOM
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const randomBtnHero = document.getElementById('random-btn-hero');
const heroBanner = document.getElementById('hero-banner');
const resultsContainer = document.getElementById('results-container');
const resultsHeader = document.getElementById('results-header');
const searchTermDisplay = document.getElementById('search-term-display');
const resultsCount = document.getElementById('results-count');
const mealsGrid = document.getElementById('meals-grid');
const loader = document.getElementById('loader');

// Modal Referencias
const modal = document.getElementById('recipe-modal');
const modalTitle = document.getElementById('modal-title');
const btnTabEs = document.getElementById('btn-tab-es');
const btnTabEn = document.getElementById('btn-tab-en');
const contentEs = document.getElementById('content-es');
const contentEn = document.getElementById('content-en');

// Cerrar modal
const closeBtns = [
	document.getElementById('close-modal'),
	document.getElementById('modal-backdrop'),
];
closeBtns.forEach((btn) =>
	btn.addEventListener('click', () => modal.classList.add('hidden'))
);

// --- LÓGICA DE VISTA ---

// Función para cambiar entre Banner y Resultados
function toggleView(showResults) {
	if (showResults) {
		// OCULTAR BANNER
		heroBanner.classList.add('hidden'); // display: none
		heroBanner.classList.remove('flex'); // remove flex layout

		// MOSTRAR RESULTADOS
		resultsContainer.classList.remove('hidden');

		// SCROLL AUTOMÁTICO AL INICIO DE LA PÁGINA
		window.scrollTo({ top: 0, behavior: 'smooth' });
	} else {
		// MOSTRAR BANNER
		heroBanner.classList.remove('hidden');
		heroBanner.classList.add('flex');

		// OCULTAR RESULTADOS
		resultsContainer.classList.add('hidden');
		mealsGrid.innerHTML = ''; // Limpiar grid anterior
	}
}

function resetHome() {
	toggleView(false); // Volver al banner
	searchInput.value = '';
}

// --- BUSCADOR ---

async function handleSearch(query = null) {
	// Si viene query (ej: random) úsalo, si no, lee del input
	const term = query || searchInput.value.trim();

	if (!term && !query) return;

	// 1. Ocultar banner y mostrar loader en el contenedor principal
	toggleView(true);
	mealsGrid.innerHTML = '';
	resultsHeader.classList.add('hidden'); // Ocultar título temporalmente
	loader.classList.remove('hidden');

	try {
		let url;
		if (query === 'random') {
			url = 'https://www.themealdb.com/api/json/v1/1/random.php';
		} else {
			url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`;
		}

		const res = await fetch(url);
		const data = await res.json();

		// Limpiar Loader
		loader.classList.add('hidden');

		if (data.meals) {
			// 2. ÉXITO: Mostrar cabecera y resultados
			resultsHeader.classList.remove('hidden');

			if (query === 'random') {
				searchTermDisplay.innerText = 'Receta Sorpresa';
				resultsCount.innerText = '¡Mira lo que elegimos para ti!';
			} else {
				searchTermDisplay.innerText = term;
				resultsCount.innerText = `Se encontraron ${data.meals.length} recetas.`;
			}

			renderGrid(data.meals);

			// Limpiar input solo si fue búsqueda manual
			if (!query) searchInput.value = '';
		} else {
			// 3. NO ENCONTRADO
			resultsHeader.classList.remove('hidden');
			searchTermDisplay.innerText = term;
			resultsCount.innerHTML = `<span class="text-red-400">No se encontraron resultados. Intenta en inglés (Beef, Cake, Soup).</span>`;
		}
	} catch (error) {
		console.error(error);
		loader.classList.add('hidden');
		resultsContainer.innerHTML = `<p class="text-center text-red-500 mt-10">Error de conexión con el servidor.</p>`;
	}
}

// Event Listeners Búsqueda
searchBtn.addEventListener('click', () => handleSearch());
searchInput.addEventListener('keypress', (e) => {
	if (e.key === 'Enter') handleSearch();
});
randomBtnHero.addEventListener('click', () => handleSearch('random'));

// --- RENDER GRID ---
function renderGrid(meals) {
	meals.forEach((meal) => {
		const card = document.createElement('div');
		// Usamos group para efectos hover
		card.className =
			'bg-slate-800 rounded-xl overflow-hidden border border-slate-700 shadow-lg hover:shadow-amber-500/20 hover:border-amber-500/50 transition-all duration-300 group';

		card.innerHTML = `
            <div class="relative overflow-hidden h-48">
                <img src="${meal.strMealThumb}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
                <div class="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
                <span class="absolute bottom-2 left-2 bg-amber-500 text-slate-900 text-xs font-bold px-2 py-1 rounded uppercase">
                    ${meal.strCategory}
                </span>
            </div>
            <div class="p-4">
                <h3 class="font-serif font-bold text-lg text-white mb-1 truncate group-hover:text-amber-400 transition">${meal.strMeal}</h3>
                <p class="text-xs text-slate-400 mb-3">📍 ${meal.strArea} Cuisine</p>
                <button onclick="openRecipeDetails('${meal.idMeal}')" class="w-full py-2 bg-slate-700 text-slate-300 text-sm font-bold rounded hover:bg-amber-500 hover:text-slate-900 transition cursor-pointer">
                    Ver Receta
                </button>
            </div>
        `;
		mealsGrid.appendChild(card);
	});
}

// --- MODAL Y TRADUCCIÓN (Copiamos lógica anterior adaptada) ---

// Control de Tabs
btnTabEs.addEventListener('click', () => switchTab('es'));
btnTabEn.addEventListener('click', () => switchTab('en'));

function switchTab(lang) {
	if (lang === 'es') {
		contentEs.classList.remove('hidden');
		contentEn.classList.add('hidden');
		btnTabEs.className =
			'flex-1 py-3 font-bold text-amber-500 border-b-2 border-amber-500 bg-slate-800 transition cursor-pointer';
		btnTabEn.className =
			'flex-1 py-3 font-semibold text-slate-500 border-b-2 border-transparent hover:bg-slate-800 transition cursor-pointer';
	} else {
		contentEs.classList.add('hidden');
		contentEn.classList.remove('hidden');
		btnTabEn.className =
			'flex-1 py-3 font-bold text-amber-500 border-b-2 border-amber-500 bg-slate-800 transition cursor-pointer';
		btnTabEs.className =
			'flex-1 py-3 font-semibold text-slate-500 border-b-2 border-transparent hover:bg-slate-800 transition cursor-pointer';
	}
}

// Abrir Modal
window.openRecipeDetails = async function (id) {
	modal.classList.remove('hidden');
	switchTab('es');
	modalTitle.innerText = 'Cargando...';
	contentEs.innerHTML = `<div class="py-10 text-center"><p class="text-amber-500 animate-pulse">Traduciendo receta...</p></div>`;
	contentEn.innerHTML = `<div class="py-10 text-center text-slate-500">Loading...</div>`;

	try {
		const res = await fetch(
			`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
		);
		const data = await res.json();
		const meal = data.meals[0];

		modalTitle.innerText = meal.strMeal;

		// Generar Inglés
		contentEn.innerHTML = generateDetailsHTML(
			meal,
			meal.strMeal,
			meal.strInstructions,
			false
		);

		// Traducir a Español
		const [tituloEs, instrucEs] = await Promise.all([
			translateText(meal.strMeal),
			translateText(meal.strInstructions),
		]);

		// Generar Español
		contentEs.innerHTML = generateDetailsHTML(
			meal,
			tituloEs,
			instrucEs,
			true
		);
	} catch (e) {
		console.error(e);
		contentEs.innerHTML =
			"<p class='text-red-500 text-center'>Error cargando receta.</p>";
	}
};

async function translateText(text) {
	if (!text) return '';
	try {
		const res = await fetch(
			`https://api.mymemory.translated.net/get?q=${encodeURIComponent(
				text.substring(0, 500)
			)}&langpair=en|es`
		);
		const data = await res.json();
		return data.responseData.translatedText;
	} catch {
		return text;
	}
}

function generateDetailsHTML(meal, title, instructions, isTranslated) {
	let ingredients = '';
	for (let i = 1; i <= 20; i++) {
		const ing = meal[`strIngredient${i}`];
		const meas = meal[`strMeasure${i}`];
		if (ing && ing.trim()) {
			ingredients += `<li class="flex justify-between py-2 border-b border-slate-700 last:border-0"><span class="capitalize text-slate-300">${ing}</span><span class="text-amber-500">${meas}</span></li>`;
		}
	}

	return `
        <div class="flex flex-col md:flex-row gap-6">
            <div class="w-full md:w-1/3">
                <img src="${
					meal.strMealThumb
				}" class="w-full rounded-lg mb-4 border border-slate-600">
                <h4 class="text-amber-500 font-bold mb-2 border-b border-slate-700">Ingredientes</h4>
                <ul class="text-sm bg-slate-900/50 p-4 rounded border border-slate-700/50 max-h-60 overflow-y-auto custom-scrollbar">${ingredients}</ul>
            </div>
            <div class="w-full md:w-2/3">
                <h2 class="text-2xl font-serif font-bold text-white mb-2">${title}</h2>
                <div class="flex gap-2 mb-4">
                    <span class="bg-slate-700 text-xs px-2 py-1 rounded text-slate-300 uppercase">${
						meal.strCategory
					}</span>
                    <span class="bg-slate-700 text-xs px-2 py-1 rounded text-slate-300 uppercase">${
						meal.strArea
					}</span>
                </div>
                <h4 class="text-amber-500 font-bold mb-2">Instrucciones</h4>
                ${
					isTranslated
						? '<p class="text-xs text-yellow-600/80 mb-2">⚠️ Traducción automática parcial.</p>'
						: ''
				}
                <p class="text-slate-300 whitespace-pre-line leading-relaxed font-light">${instructions}</p>
                ${
					meal.strYoutube
						? `<a href="${meal.strYoutube}" target="_blank" class="block mt-4 text-red-400 font-bold hover:underline">▶ Ver Video Tutorial</a>`
						: ''
				}
            </div>
        </div>
    `;
}

