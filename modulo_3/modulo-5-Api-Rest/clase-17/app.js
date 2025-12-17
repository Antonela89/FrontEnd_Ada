const $nameInput = document.getElementById('name-input');
const $statusSelect = document.getElementById('status-filter');
const $speciesFilter = document.getElementById('species-filter');
const $searchBtn = document.getElementById('search-button');
const $resultsContainer = document.getElementById('results');
const $prevBtn = document.getElementById('prev-btn');
const $pageNum = document.getElementById('page-num');
const $nextBtn = document.getElementById('next-btn');
const $charDetails = document.getElementById('details');

let page = 1;

$searchBtn.addEventListener('click', () => {
	page = 1;
	fetchCharacters();
});

$prevBtn.addEventListener('click', () => {
	if (page > 1) {
		page--;
		fetchCharacters();
	}
});

$nextBtn.addEventListener('click', () => {
	page++;
	fetchCharacters();
});

// Cerrar modal al hacer click fuera
$charDetails.addEventListener('click', (e) => {
	if (e.target === $charDetails) {
		$charDetails.classList.add('hidden');
	}
});

function fetchCharacters() {
	const name = $nameInput.value.toLowerCase().trim();
	const status = $statusSelect.value;
	const species = $speciesFilter.value;

	const url = new URL('https://rickandmortyapi.com/api/character');
	url.searchParams.set('page', page);
	if (name) url.searchParams.set('name', name);
	if (status) url.searchParams.set('status', status);
	if (species) url.searchParams.set('species', species);

	// Loader styled
	$resultsContainer.innerHTML = `
        <div class="col-span-full flex flex-col items-center justify-center py-20">
            <div class="h-12 w-12 animate-spin rounded-full border-4 border-slate-700 border-t-cyan-400 mb-4"></div>
            <span class="text-cyan-400 text-lg animate-pulse">Buscando formas de vida...</span>
        </div>`;

	$charDetails.classList.add('hidden');
	$pageNum.textContent = page;
	// Deshabilitar botones mientras carga para evitar doble click
	$prevBtn.disabled = true;
	$nextBtn.disabled = true;

	fetch(url)
		.then((res) => {
			if (!res.ok)
				throw new Error(
					'No se encontraron personajes en esta dimensión.'
				);
			return res.json();
		})
		.then((data) => {
			renderCharacters(data.results);
			// Control simple de botón siguiente (si hay menos de 20, es la última)
			$prevBtn.disabled = page <= 1;
			// data.info.pages contiene el número total de páginas para esa búsqueda
			if (page >= data.info.pages) {
				$nextBtn.disabled = true;
			} else {
				$nextBtn.disabled = false;
			}
		})
		.catch((error) => {
			$resultsContainer.innerHTML = `
            <div class="col-span-full text-center py-10">
                <p class="text-pink-500 text-xl font-bold">Error: ${error.message}</p>
                <p class="text-slate-400 mt-2">Intenta cambiar los filtros.</p>
            </div>`;
		});
}

function renderCharacters(characters) {
	$resultsContainer.innerHTML = '';

	characters.forEach((char) => {
		const card = document.createElement('article');

		// Lógica para color de estado
		let statusColor = 'bg-gray-500';
		if (char.status === 'Alive')
			statusColor = 'bg-green-500 shadow-[0_0_8px_#22c55e]';
		if (char.status === 'Dead')
			statusColor = 'bg-red-500 shadow-[0_0_8px_#ef4444]';

		card.className =
			'character-card relative w-full bg-slate-800 border border-slate-700 rounded-2xl overflow-hidden shadow-lg cursor-pointer group';

		card.innerHTML = `
          <div class="relative overflow-hidden h-64">
              <img class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="${char.image}" alt="${char.name}"/>
              <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900 to-transparent p-4 pt-10">
                <h5 class="text-xl font-bold text-white truncate text-shadow">${char.name}</h5>
                <div class="flex items-center gap-2 mt-1">
                    <span class="h-2.5 w-2.5 rounded-full ${statusColor}"></span>
                    <span class="text-sm text-gray-300 font-medium">${char.status} - ${char.species}</span>
                </div>
              </div>
          </div>
          <div class="p-4 pt-2">
              <p class="text-xs text-slate-400 mb-1">Última ubicación conocida:</p>
              <p class="text-sm text-cyan-300 truncate hover:text-cyan-200">${char.location.name}</p>
              
              <div class="mt-4 pt-4 border-t border-slate-700 flex justify-end">
                <button class="text-xs font-bold uppercase tracking-wider text-pink-500 hover:text-pink-400 transition-colors">
                    Ver Expediente +
                </button>
              </div>
          </div>`;

		card.addEventListener('click', () => showDetails(char));
		$resultsContainer.appendChild(card);
	});
}

function showDetails(char) {
	$charDetails.classList.remove('hidden');

	// Colores de estado para el modal
	let statusBadge = 'bg-gray-600';
	if (char.status === 'Alive') statusBadge = 'bg-green-600';
	if (char.status === 'Dead') statusBadge = 'bg-red-600';

	$charDetails.innerHTML = `
        <div class="relative bg-slate-900 border border-slate-600 rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.8)] max-w-lg w-full overflow-hidden animate-[fadeIn_0.3s_ease-out]">
            <div class="absolute top-0 right-0 p-4 z-10">
                <button onclick="document.getElementById('details').classList.add('hidden')" class="bg-black/50 hover:bg-red-500/80 text-white rounded-full p-2 transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
            
            <div class="flex flex-col md:flex-row">
                <img class="w-full md:w-1/2 object-cover h-64 md:h-auto" src="${char.image}" alt="${char.name}"/>
                
                <div class="p-6 md:p-8 flex flex-col justify-center bg-slate-800 w-full">
                    <h2 class="text-3xl font-bold text-white mb-2">${char.name}</h2>
                    
                    <div class="flex items-center gap-2 mb-6">
                        <span class="px-3 py-1 rounded-full text-xs font-bold text-white ${statusBadge} uppercase tracking-wide shadow-md">
                            ${char.status}
                        </span>
                        <span class="text-slate-400 text-sm">${char.species}</span>
                    </div>

                    <div class="space-y-4">
                        <div>
                            <span class="text-slate-500 text-xs uppercase font-bold tracking-wider">Género</span>
                            <p class="text-lg text-gray-200">${char.gender}</p>
                        </div>
                        <div>
                            <span class="text-slate-500 text-xs uppercase font-bold tracking-wider">Origen</span>
                            <p class="text-lg text-cyan-400">${char.origin.name}</p>
                        </div>
                        <div>
                            <span class="text-slate-500 text-xs uppercase font-bold tracking-wider">Ubicación Actual</span>
                            <p class="text-lg text-cyan-400">${char.location.name}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
          `;
}

// Inicializar
fetchCharacters();
