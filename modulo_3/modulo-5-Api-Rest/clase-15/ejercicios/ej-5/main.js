const API_URL =
	'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false';

// Elementos del DOM
const skeletonBody = document.getElementById('skeleton-body');
const cryptoBody = document.getElementById('crypto-body');

// Formateador de moneda
const currencyFormatter = new Intl.NumberFormat('en-US', {
	style: 'currency',
	currency: 'USD',
});

// Formateador de números grandes (Volumen)
const numberFormatter = new Intl.NumberFormat('en-US');

async function fetchCryptoData() {
	try {
		// petición
		const response = await fetch(API_URL);

		// Si la API falla (ej. muchas peticiones seguidas), lanzar error
		if (!response.ok) throw new Error('Error en la conexión con CoinGecko');

		const data = await response.json();

		// Limpiar contenido anterior
		cryptoBody.innerHTML = '';

		// Iterar sobre cada moneda
		data.forEach((coin, index) => {
			// LÓGICA CONDICIONAL PARA COLORES
			// Si el cambio es >= 0 es verde, si no, rojo
			const changeColor =
				coin.price_change_percentage_24h >= 0
					? 'text-green-600 font-bold'
					: 'text-red-600 font-bold';

			// Icono simple (flecha arriba o abajo)
			const arrow = coin.price_change_percentage_24h >= 0 ? '▲' : '▼';

			// la fila HTML
			const row = `
                        <tr class="hover:bg-gray-100 transition duration-150">
                            <td class="py-4 px-6 font-medium">${index + 1}</td>
                            <td class="py-4 px-6 flex items-center">
                                <img src="${coin.image}" alt="${
				coin.name
			}" class="w-6 h-6 mr-2 rounded-full">
                                <span class="font-medium">${coin.name}</span>
                                <span class="text-xs text-gray-400 ml-2 uppercase">${
									coin.symbol
								}</span>
                            </td>
                            <td class="py-4 px-6 text-right font-medium text-gray-800">
                                ${currencyFormatter.format(coin.current_price)}
                            </td>
                            <td class="py-4 px-6 text-right ${changeColor}">
                                ${arrow} ${coin.price_change_percentage_24h.toFixed(
				2
			)}%
                            </td>
                            <td class="py-4 px-6 text-right">
                                ${numberFormatter.format(coin.total_volume)}
                            </td>
                        </tr>
                    `;
			// Añadir la fila a la tabla
			cryptoBody.innerHTML += row;
		});

		// INTERCAMBIO (Ocultar Skeleton, Mostrar Datos)
		setTimeout(() => {
			skeletonBody.classList.add('hidden');
			cryptoBody.classList.remove('hidden');
		}, 1000);
	} catch (error) {
		console.error(error);
		skeletonBody.innerHTML = `<tr><td colspan="5" class="text-center py-4 text-red-500">Error cargando datos. Intenta más tarde.</td></tr>`;
	}
}

// Ejecutar la función
fetchCryptoData();
