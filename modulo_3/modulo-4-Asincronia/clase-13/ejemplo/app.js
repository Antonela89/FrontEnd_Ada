// capturar el nodo
const contendedor = document.getElementById('contenedor-personajes');

function mostrarSkeleton() {
	// Generar 10 tarjetas de esqueleto
	const skeletonHTML = Array(10)
		.fill(0)
		.map(
			() => `
        <li class="w-full max-w-xs animate-pulse">
            <div class="bg-white rounded-xl shadow-md border border-slate-200 h-full flex flex-col">
                <!-- Header Skeleton -->
                <div class="flex items-center p-5 space-x-4 border-b border-slate-100">
                    <!-- Círculo para la imagen -->
                    <div class="shrink-0 w-16 h-16 bg-slate-200 rounded-full"></div>
                    
                    <!-- Líneas para textos -->
                    <div class="flex-1 space-y-2">
                        <div class="h-4 bg-slate-200 rounded w-3/4"></div> <!-- Nombre -->
                        <div class="h-3 bg-slate-200 rounded w-1/2"></div> <!-- Ocupación -->
                        <div class="flex gap-2 pt-1">
                            <div class="h-4 w-12 bg-slate-200 rounded"></div> <!-- Badge -->
                            <div class="h-4 w-16 bg-slate-200 rounded"></div> <!-- Badge -->
                        </div>
                    </div>
                </div>

                <!-- Body Skeleton -->
                <div class="p-5 flex-1 bg-slate-50/50">
                    <div class="h-3 bg-slate-200 rounded w-full mb-2"></div>
                    <div class="h-3 bg-slate-200 rounded w-2/3"></div>
                </div>
            </div>
        </li>
    `
		)
		.join('');

	contendedor.innerHTML = skeletonHTML;
}

// función principal
async function peitcion() {
	try {
		// Mostrar Skeleton antes de la carga
		mostrarSkeleton();
        
        // petición a la api
		const respuesta = await fetch(
			'https://thesimpsonsapi.com/api/characters'
		);

		// Verificamos si la respuesta es correcta
		if (!respuesta.ok) throw new Error('Error en la petición');

		const data = await respuesta.json();

		// Accedemos a los resultados.
		const personajes = data.results;

		// Verificamos en consola que sea un array
		// console.log('Personajes recibidos:', personajes);

		// console.log(personajes);

        // limpiar Skeleton
        contendedor.innerHTML = '';

		personajes.forEach((p) => {
			const { age, name, occupation, phrases, portrait_path, status } = p;

			const personaje = document.createElement('li');
			personaje.className =
				'w-full max-w-xs animate-in zoom-in duration-300';

			// Lógica simple para el color del estado
			// Si status es 'Alive' usamos verde, si no, usamos gris/rojo
			const statusColor =
				status === 'Alive'
					? 'bg-green-100 text-green-700 ring-green-600/20'
					: 'bg-red-100 text-red-600 ring-red-500/10';

			const statusIcon = status === 'Alive' ? '🟢' : '💀';

			personaje.innerHTML = `
        <div class="bg-white rounded-xl shadow-md overflow-hidden border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
            
            <!-- ENCABEZADO -->
            <div class="flex flex-column text-center items-center p-5 space-x-4 border-b border-slate-100">
                
                <div class="mb-3">
                    <img src="https://cdn.thesimpsonsapi.com/200${portrait_path}" 
                            class="w-20 h-20 p-1 object-contain rounded-full bg-slate-50 ring-4 ring-yellow-400"
                            alt="${name}">
                </div>
                
                <div class="flex-1 min-w-0">
                    <p class="text-lg font-bold text-slate-800 truncate leading-tight">
                        ${name}
                    </p>
                    <p class="text-xs font-medium text-sky-600 uppercase tracking-wide  mb-2">
                        ${
							occupation.toLowerCase() === 'unknown'
								? 'Desconocido'
								: occupation
						}
                    </p>

                    <!-- AQUÍ AGREGAMOS EDAD Y STATUS -->
                    <div class="flex flex-wrap gap-2">
                        <!-- Badge Edad -->
                        <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-blue-50 text-blue-700 ring-1 ring-inset ring-blue-700/10">
                            🎂 ${age ? age + ' años' : 'Desconocido'}
                        </span>
                    
                        <!-- Badge Status (Color dinámico) -->
                        <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium ${statusColor} ring-1 ring-inset">
                        <span class="mr-1 text-[8px]">${statusIcon}</span> ${status}
                        </span>
                    </div>

                </div>
            </div>

            <!-- CUERPO: Frase -->
            <div class="p-5 flex-1 bg-slate-50/50 flex items-center">
                <p class="text-slate-600 italic text-sm leading-relaxed relative pl-3 border-l-4 border-yellow-400 truncate">
                    "${phrases[0] ? phrases[0] : 'Desconocido.'}"
                </p>
            </div>
        </div>
    `;

			contendedor.appendChild(personaje);
		});
	} catch (error) {
		console.error('Hubo un error:', error);
	}
}

peitcion();
