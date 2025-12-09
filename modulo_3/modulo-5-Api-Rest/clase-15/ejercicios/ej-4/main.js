// --- Referencias al DOM ($ indica elemento HTML) ---
const $ciudad = document.getElementById('ciudad');
const $pais = document.getElementById('pais');
const $temp = document.getElementById('temperatura');
const $descripcion = document.getElementById('descripcion');
const $humedad = document.getElementById('humedad');
const $viento = document.getElementById('viento');
const $sensacion = document.getElementById('sensacion');
const $presion = document.getElementById('presion');
const $icono = document.getElementById('icono');
const $pronostico = document.getElementById('pronostico-container');
const $btnToggle = document.getElementById('toggle-forecast');
const $loader = document.getElementById('loader');
const $appContent = document.getElementById('app-content');
const $sunRise = document.getElementById('sun-rise');
const $sunSet = document.getElementById('sun-set');
const $tempMax = document.getElementById('temp-max');
const $tempMin = document.getElementById('temp-min');
const $visibilidad = document.getElementById('visibilidad');

// --- Configuración y Estado ---
const BASE_URL = 'https://api.openweathermap.org/data/2.5/';
const appid = CONFIG.WEATHER_API_KEY;
// Estado local para manejar el pronóstico sin refetch
let forecastData = [];
let isDailyView = true;

// --- Helpers (DRY: Construcción de URL) ---
const buildUrl = (endpoint, lat, lon) =>
	`${BASE_URL}${endpoint}?lat=${lat}&lon=${lon}&appid=${appid}&units=metric&lang=es`;

// --- Lógica Visual (Temas) ---
const handleBackground = (iconCode) => {
	let gradient = 'linear-gradient(to bottom right, #bdc3c7, #2c3e50)'; // Default gris

	if (iconCode.includes('n')) {
		gradient =
			'linear-gradient(to bottom right, #0f2027, #203a43, #2c5364)'; // Noche
	} else if (['01', '02'].some((code) => iconCode.includes(code))) {
		gradient =
			'linear-gradient(to bottom right, #2980b9, #6dd5fa, #ffffff)'; // Sol
	} else if (['09', '10', '11'].some((code) => iconCode.includes(code))) {
		gradient = 'linear-gradient(to bottom right, #373B44, #4286f4)'; // Lluvia
	}

	document.body.style.background = gradient;
};

// --- Renderizado UI ---
const renderCurrentWeather = (data) => {
	$ciudad.textContent = data.name;
	$pais.textContent = data.sys.country;
	$temp.textContent = Math.round(data.main.temp);
	$descripcion.textContent = data.weather[0].description;
	$humedad.textContent = `${data.main.humidity}%`;
	$viento.textContent = `${data.wind.speed} m/s`;
	$sensacion.textContent = `${Math.round(data.main.feels_like)}°`;
	$presion.textContent = `${data.main.pressure} hPa`;

	const iconCode = data.weather[0].icon;
	$icono.src = `https://openweathermap.org/img/wn/${iconCode}@4x.png`;
	$icono.alt = data.weather[0].description;
	$icono.classList.remove('hidden');

	handleBackground(iconCode);

	// Convertir timestamps (unix) a hora legible
	const formatoHora = (unix) => {
		const date = new Date(unix * 1000);
		return date.toLocaleTimeString('es-ES', {
			hour: '2-digit',
			minute: '2-digit',
		});
	};

	$sunRise.textContent = formatoHora(data.sys.sunrise);
	$sunSet.textContent = formatoHora(data.sys.sunset);

	// Temperaturas del día
	$tempMax.textContent = `${Math.round(data.main.temp_max)}°`;
	$tempMin.textContent = `${Math.round(data.main.temp_min)}°`;

	// Visibilidad (viene en metros, pasamos a km)
	$visibilidad.textContent = `${data.visibility / 1000} km`;
};

// --- Renderizado Forecast (Aquí está la magia nueva) ---
const renderForecast = () => {
	$pronostico.innerHTML = '';

	let listToRender = [];

	if (isDailyView) {
		// Vista Diaria (Solo mediodía)
		listToRender = forecastData.filter((item) =>
			item.dt_txt.includes('12:00:00')
		);
		$btnToggle.textContent = 'Ver: Detallado';
	} else {
		// Vista Detallada (Horas específicas de TODOS los días)
		// 00, 06, 12, 15, 21
		const horasDeseadas = [
			'00:00:00',
			'06:00:00',
			'12:00:00',
			'15:00:00',
			'21:00:00',
		];

		listToRender = forecastData.filter((item) => {
			// Verificamos si la hora del item está en nuestra lista deseada
			const horaItem = item.dt_txt.split(' ')[1]; // Sacamos la parte de la hora "12:00:00"
			return horasDeseadas.includes(horaItem);
		});

		$btnToggle.textContent = 'Ver: Diario';
	}

	listToRender.forEach((item) => {
		const fecha = new Date(item.dt * 1000);
		const diaSemana = fecha
			.toLocaleDateString('es-ES', { weekday: 'short' })
			.replace('.', '');
		const hora = fecha.toLocaleTimeString('es-ES', {
			hour: '2-digit',
			minute: '2-digit',
		});

		// Diseño diferenciado si es diario o por hora
		const headerContent = isDailyView
			? `<span class="text-sm font-bold uppercase">${diaSemana}</span>`
			: `<div class="flex flex-col items-center leading-tight">
                    <span class="text-[10px] opacity-60 uppercase">${diaSemana}</span>
                    <span class="text-sm font-bold text-white">${hora}</span>
                </div>`;

		const card = document.createElement('div');
		card.className = `
            flex md:flex-col items-center justify-between md:justify-center 
            bg-white/5 hover:bg-white/20 p-2 md:p-3 rounded-xl transition 
            cursor-default border border-white/5 w-full min-h-[90px]
        `;

		card.innerHTML = `
            <div class="w-1/3 md:w-auto text-left md:text-center">
                ${headerContent}
            </div>

            <div class="w-1/3 md:w-auto flex justify-center">
                <img src="https://openweathermap.org/img/wn/${
					item.weather[0].icon
				}.png" class="w-10 h-10 md:w-12 md:h-12 drop-shadow-sm">
            </div>

            <div class="w-1/3 md:w-auto text-right md:text-center">
                <span class="text-lg font-bold block">${Math.round(
					item.main.temp
				)}°</span>
                <span class="text-[10px] opacity-60 capitalize hidden md:block truncate max-w-[60px]">${
					item.weather[0].description
				}</span>
            </div>
        `;
		$pronostico.appendChild(card);
	});
};

// --- Fetch Genérico (Async/Await + Error Handling) ---
const fetchData = async (endpoint, lat, lon) => {
	const response = await fetch(buildUrl(endpoint, lat, lon));
	if (!response.ok)
		throw new Error(`Error en ${endpoint}: ${response.statusText}`);
	return response.json();
};

// --- Event Listeners ---
$btnToggle.addEventListener('click', () => {
	isDailyView = !isDailyView; // Invertir valor (true -> false -> true)
	renderForecast(); // Volver a pintar solo la parte de abajo
});

// --- Función para quitar el loader suavemente ---
const showApp = () => {
	// 1. Ocultamos el spinner
	$loader.classList.add('hidden');

	// 2. Mostramos la app (quitamos hidden)
	$appContent.classList.remove('hidden');

	// 3. Pequeño timeout para permitir que el navegador procese el cambio de 'display: none'
	// y luego aplicamos la opacidad para activar la animación CSS
	setTimeout(() => {
		$appContent.classList.remove('opacity-0', 'scale-95');
		$appContent.classList.add('opacity-100', 'scale-100');
	}, 50);
};

// --- Controlador Principal ---
const loadWeatherApp = async (lat, lon) => {
	try {
		// Obtenemos los datos
		const [current, forecast] = await Promise.all([
			fetchData('weather', lat, lon),
			fetchData('forecast', lat, lon),
		]);

		// Renderizamos (esto ocurre en milisegundos, invisible al usuario)
		renderCurrentWeather(current);
		forecastData = forecast.list;
		renderForecast();

		// ¡LISTO! Mostramos la app gloriosamente
		showApp();
	} catch (error) {
		console.error(error);
		$loader.innerHTML =
			'<p class="text-red-400">Error al cargar datos. Verifica tu conexión.</p>';
		// Aquí podrías dejar el loader visible pero con mensaje de error
	}
};

// --- Inicialización ---
const init = () => {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(
			(pos) => loadWeatherApp(pos.coords.latitude, pos.coords.longitude),
			(err) => {
				console.warn('Ubicación denegada:', err);
				loadWeatherApp(-34.6037, -58.3816); // Bs As
			}
		);
	} else {
		loadWeatherApp(-34.6037, -58.3816);
	}
};

init();
