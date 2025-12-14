// nodos del DOM
const $container = document.getElementById('results-container');
const $btnPrev = document.getElementById('btn-prev');
const $btnNext = document.getElementById('btn-next');

// Referencias de Metadatos
const $metaCount = document.getElementById('meta-count');
const $metaPages = document.getElementById('meta-pages');
const $metaCurrent = document.getElementById('meta-current');

// Variables de estado para las URLs (Vienen de la API)
let nextUrl = null;
let prevUrl = null;

// Función Fetch Dinámica
const fetchCharacters = async (url) => {
	$container.innerHTML = `<div class="col-span-full text-center py-10"><i class="fas fa-spinner fa-spin text-4xl text-green-500"></i></div>`;

	try {
		const res = await fetch(url);
		const data = await res.json();

		// La API devuelve { info: {...} -> metadatos, results: [...] -> resultados}
		const { info, results } = data;

		// Procesar los Metadatos
		renderMetadata(info, url);

		// Renderizar la Colección
		renderCharacters(results);
	} catch (error) {
		console.error(error);
		$container.innerHTML = `<p class="text-red-500 text-center">Error al cargar datos</p>`;
	}
};

// Función para mostrar los metadatos en pantalla
const renderMetadata = (info, currentUrl) => {
	// Actualizar contadores
	$metaCount.textContent = info.count;
	$metaPages.textContent = info.pages;

	// Calcular página actual basada en la URL 
	const urlObj = new URL(currentUrl);
	const pageNum = urlObj.searchParams.get('page') || 1;
	$metaCurrent.textContent = pageNum;

	// Guardar las URLs para los botones 
	nextUrl = info.next;
	prevUrl = info.prev;

	// Habilitar/Deshabilitar botones según metadatos
	$btnPrev.disabled = !prevUrl;
	$btnNext.disabled = !nextUrl;
};

// Función para renderizar la colección
const renderCharacters = (characters) => {
	$container.innerHTML = '';

	characters.forEach((char) => {
		// Color del status
		const statusColor =
			char.status === 'Alive'
				? 'bg-green-500'
				: char.status === 'Dead'
				? 'bg-red-500'
				: 'bg-gray-500';

		const card = document.createElement('article');
		card.className =
			'bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-700 hover:border-green-500/50 transition duration-300';

		card.innerHTML = `
                    <div class="relative">
                        <img src="${char.image}" alt="${char.name}" class="w-full h-48 object-cover">
                        <span class="absolute top-2 right-2 px-2 py-1 rounded text-xs font-bold text-white flex items-center gap-1 bg-black/60 backdrop-blur-sm">
                            <div class="w-2 h-2 rounded-full ${statusColor}"></div>
                            ${char.status}
                        </span>
                    </div>
                    <div class="p-4">
                        <h3 class="text-lg font-bold text-white mb-1 truncate">${char.name}</h3>
                        <p class="text-gray-400 text-xs mb-3">${char.species} - ${char.gender}</p>
                        <div class="bg-gray-900/50 p-2 rounded border border-gray-700">
                            <p class="text-gray-500 text-[10px] uppercase">Última ubicación:</p>
                            <p class="text-gray-300 text-xs truncate">${char.location.name}</p>
                        </div>
                    </div>
                `;
		$container.appendChild(card);
	});
};

// Event Listeners (Usan las URLs que dio la API en 'info')
$btnPrev.addEventListener('click', () => {
	if (prevUrl) fetchCharacters(prevUrl);
});

$btnNext.addEventListener('click', () => {
	if (nextUrl) fetchCharacters(nextUrl);
});

// Inicio
document.addEventListener('DOMContentLoaded', () => {
	fetchCharacters('https://rickandmortyapi.com/api/character');
});
