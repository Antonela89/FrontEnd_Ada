// --- NODOS ---
const $search = document.getElementById('search');
const $name = document.getElementById('inputName');
const $userContainer = document.getElementById('user');
const $loader = document.getElementById('loading');
// --- LÓGICA DE TEMA SIMPLIFICADA ---
const $themeToggle = document.getElementById('theme-toggle');
const $html = document.documentElement; // Selecciona la etiqueta <html>

// Al cargar la página: Leer localStorage
// Si dice "dark", agregar la clase dark. 
// Si no dice nada, asumir light" por defecto para probar.
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    $html.classList.add('dark');
} else {
    $html.classList.remove('dark');
}

//Al hacer clic
$themeToggle.addEventListener('click', () => {
    // Si tiene la clase, se la quita. Si no, se la pone.
    if ($html.classList.contains('dark')) {
        $html.classList.remove('dark');
        localStorage.setItem('theme', 'light');
    } else {
        $html.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    }
});

// --- LÓGICA DE USUARIO ---
const url = 'https://api.github.com/users/'; // url de peticion

$search.addEventListener('submit', async (e) => {
	e.preventDefault();
	const username = $name.value.trim(); // capturar nombre a uscar
	if (!username) return; // validación

	toggleLoader(true); // mostrar el loader
	$userContainer.innerHTML = ''; // vaciar el contenido de la tarjeta

	const data = await getUser(username); // llamar a la función fetch para obtener resultados

	if (data) {
		renderCard(data); // mostrar los resultados
	} else {
		showError('Usuario no encontrado'); // mostrar error
	}

	toggleLoader(false); // ocultar loader
	$name.value = ''; // limpiar input
});

// funcion asincrona fetch
const getUser = async (user) => {
	try {
        // hacer la peticion con fetch
		const response = await fetch(`${url}${user}`);
        // validacion de status de respuesta
		if (!response.ok) {
			if (response.status === 404) return null;
			throw new Error('Error en el servidor'); // manejo de error
		}
        // retornar la respuesta formateada
		return await response.json();
	} catch (error) {
        // manejo de error
		console.error(error);
		showError('Error de conexión');
		return null;
	}
};

// --- RENDERIZADO CON DARK MODE ---
const renderCard = (data) => {
	const dateJoined = new Date(data.created_at).toLocaleDateString('es-ES', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	});

	const name = data.name || data.login;
	const bio = data.bio || 'Sin biografía disponible.';

	// Template con clases 'dark:'
	const template = `
        <div class="w-full animate-fade-in-up">
            
            <!-- Banner -->
            <div class="relative bg-gradient-to-r from-indigo-500 to-purple-600 h-24">
                <div class="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
                    <!-- Avatar: borde blanco en light, borde slate-800 en dark para fundirse con la tarjeta -->
                    <img src="${data.avatar_url}" alt="${name}" 
                        class="w-24 h-24 rounded-full border-4 border-white dark:border-slate-800 shadow-lg bg-white dark:bg-slate-700 object-cover transition-colors">
                </div>
            </div>

            <!-- Info Principal -->
            <div class="pt-16 pb-6 px-6 text-center">
                <h2 class="text-2xl font-bold text-gray-800 dark:text-white tracking-tight transition-colors">${name}</h2>
                <a href="${data.html_url}" target="_blank" 
                    class="font-mono text-sm text-indigo-600 dark:text-indigo-400 hover:underline mt-1 block">
                    @${data.login}
                </a>
                
                <p class="text-gray-500 dark:text-gray-400 text-xs mt-2 mb-4 transition-colors">Se unió el ${dateJoined}</p>
                
                <p class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed px-4 transition-colors">
                    ${bio}
                </p>
            </div>

            <!-- Stats: Bordes oscuros en dark mode -->
            <div class="flex justify-center border-t border-b border-gray-100 dark:border-slate-700 py-4 mb-4 mx-6 transition-colors">
                <div class="flex-1 text-center border-r border-gray-100 dark:border-slate-700 px-2 transition-colors">
                    <span class="block text-xl font-bold text-gray-800 dark:text-white transition-colors">${
						data.public_repos
					}</span>
                    <span class="text-xs text-gray-400 dark:text-gray-500 uppercase tracking-wide">Repos</span>
                </div>
                <div class="flex-1 text-center border-r border-gray-100 dark:border-slate-700 px-2 transition-colors">
                    <span class="block text-xl font-bold text-gray-800 dark:text-white transition-colors">${
						data.followers
					}</span>
                    <span class="text-xs text-gray-400 dark:text-gray-500 uppercase tracking-wide">Seguidores</span>
                </div>
                <div class="flex-1 text-center px-2">
                    <span class="block text-xl font-bold text-gray-800 dark:text-white transition-colors">${
						data.following
					}</span>
                    <span class="text-xs text-gray-400 dark:text-gray-500 uppercase tracking-wide">Siguiendo</span>
                </div>
            </div>

            <!-- Info Extra -->
            <div class="px-8 pb-8">
                <div class="grid grid-cols-1 gap-y-3 text-sm text-gray-600 dark:text-gray-300 transition-colors">
                    
                    ${
						data.location
							? `
                    <div class="flex items-center gap-3">
                        <svg class="w-5 h-5 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                        <span>${data.location}</span>
                    </div>`
							: ''
					}

                    ${
						data.blog
							? `
                    <div class="flex items-center gap-3">
                        <svg class="w-5 h-5 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"/></svg>
                        <a href="${
							data.blog.startsWith('http')
								? data.blog
								: 'https://' + data.blog
						}" target="_blank" class="text-indigo-500 dark:text-indigo-400 hover:underline truncate w-full block text-left">
                            ${data.blog}
                        </a>
                    </div>`
							: ''
					}
                    
                    ${
						data.company
							? `
                    <div class="flex items-center gap-3">
                        <svg class="w-5 h-5 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>
                        <span>${data.company}</span>
                    </div>`
							: ''
					}

                    ${
						data.twitter_username
							? `
                    <div class="flex items-center gap-3">
                        <svg class="w-5 h-5 text-gray-400 dark:text-gray-500" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                        <a href="https://twitter.com/${data.twitter_username}" target="_blank" class="hover:text-blue-400 dark:hover:text-blue-300">@${data.twitter_username}</a>
                    </div>`
							: ''
					}
                </div>
            </div>
        </div>
    `;

	$userContainer.innerHTML = template;
};

// --- UTILIDADES ---
// mostrar error
const showError = (msg) => {
	$userContainer.innerHTML = `
        <div class="text-center p-4">
            <p class="text-red-500 font-bold text-lg">⚠️ Ops!</p>
            <p class="text-gray-600 dark:text-gray-400">${msg}</p>
        </div>
    `;
};

// manejar visibilidad del loader segun booleano
const toggleLoader = (isLoading) => {
	if (isLoading) {
		$loader.classList.remove('hidden');
		$loader.classList.add('flex');
	} else {
		$loader.classList.add('hidden');
		$loader.classList.remove('flex');
	}
};
