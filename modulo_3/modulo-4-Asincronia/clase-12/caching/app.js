/**
 * 1. IMPORTACIÓN DE LIBRERÍAS
 * Usamos 'fs/promises' para poder usar 'await' al leer archivos.
 * Usamos 'path' para asegurar que el archivo se cree en la carpeta correcta.
 */
const fs = require('fs/promises'); // Módulo para manejar archivos
const path = require('path');

/**
 * 2. CONFIGURACIÓN (CONSTANTES)
 * Es buena práctica poner las configuraciones al principio.
 */

// URL de la API de CoinGecko (precio de Bitcoin en USD)
const API_URL =
	'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd';

// __dirname es una variable de Node que dice "la carpeta donde está este script"
// Esto crea la ruta completa: C:/usuarios/tu/proyecto/cache_bitcoin.json
const ARCHIVO_CACHE = path.join(__dirname, 'cache_bitcoin.json');

// Definimos cuánto tiempo es válido el caché (60 segundos * 1000 milisegundos)
const TIEMPO_EXPIRACION_MS = 60 * 1000; // 60 segundos (en milisegundos)

/**
 * 3. FUNCIÓN PRINCIPAL
 * Es 'async' porque tanto leer el disco como pedir a internet toma tiempo.
 */
async function obtenerPrecioBitcoin() {
	// Variable auxiliar por si necesitamos recuperar datos viejos en caso de error
	let datosCacheados = null;

	// ---------------------------------------------------------
	// PASO A: Intentar leer el archivo local (CACHÉ)
	// ---------------------------------------------------------
	try {
		// Leemos el archivo. 'utf-8' es para que lo lea como texto, no como bytes.
		const contenidoArchivo = await fs.readFile(ARCHIVO_CACHE, 'utf-8');

		// El archivo es texto plano, hay que convertirlo a Objeto de JavaScript
		datosCacheados = JSON.parse(contenidoArchivo);

		// Calculamos la edad del caché
		// Obtenemos la hora actual en milisegundos
		const ahora = Date.now();
		// Restamos: (Hora Actual - Hora en que se guardó el archivo)
		const edadCache = ahora - datosCacheados.timestamp;

		// Verificamos si sigue siendo válido
		// Si la edad es MENOR al tiempo límite (60s), el caché sirve
		if (edadCache < TIEMPO_EXPIRACION_MS) {
			console.log(
				'✅ CACHÉ VÁLIDO: Usando datos locales (no gastamos petición).'
			);
			console.log(
				`   (Actualizado hace ${Math.floor(edadCache / 1000)} segundos)`
			);

			// ¡IMPORTANTE!: Retornamos aquí y la función termina.
			// NO se ejecuta nada de lo que está abajo (no tocamos la API).
			return datosCacheados.data; // Devolvemos la data guardada
		} else {
			console.log('⚠️  CACHÉ EXPIRADO: La información es vieja.');
		}
	} catch (error) {
		// Si entra aquí, es porque el archivo no existe o está corrupto
		console.log('ℹ️  No hay caché previo o archivo inexistente.');
	}

	// ---------------------------------------------------------
	// PASO B: Si llegamos aquí, es porque no había caché o estaba vencido.
	// Toca pedir datos a internet.
	// ---------------------------------------------------------
	console.log(
		'🌐 CONECTANDO A INTERNET: Solicitando datos nuevos a CoinGecko...'
	);

	try {
		// Hacemos la petición HTTP
		const respuesta = await fetch(API_URL);

		// Verificamos si la API respondió bien (Status 200)
		if (!respuesta.ok) throw new Error(`Error HTTP: ${respuesta.status}`);

		// Convertimos la respuesta de internet a JSON utilizable
		const datosReales = await respuesta.json();

		// ---------------------------------------------------------
		// PASO C: Guardar los nuevos datos en disco para la próxima
		// ---------------------------------------------------------

		// Envolvemos los datos en un objeto nuevo para agregarle la FECHA
		const objetoAGuardar = {
			timestamp: Date.now(), // Guardamos la hora
			data: datosReales, // Guardamos la información
		};

		// Convertimos el objeto a Texto para poder escribirlo en un archivo.
		// null, 2 sirve para que el texto se guarde ordenado y bonito (con sangría)
		const textoParaGuardar = JSON.stringify(objetoAGuardar, null, 2);

		// Escribimos (o sobrescribimos) el archivo
		await fs.writeFile(ARCHIVO_CACHE, textoParaGuardar);
		console.log('💾 GUARDADO: Nuevos datos escritos en disco.');

		// Devolvemos el dato fresco a quien llamó la función
		return datosReales;
	} catch (error) {
		// Esto captura errores de red (si se te corta el wifi o la API se cae)
		console.error('❌ Error al conectar con la API:', error.message);
		// ESTRATEGIA DE RESPALDO:
		// Si falló internet pero teníamos un caché viejo (aunque esté vencido),
		// es mejor devolver el precio viejo que no devolver nada.
		if (datosCacheados) {
			console.log('⚠️  Retornando caché viejo por emergencia.');
			return datosCacheados.data;
		}
	}
}

// ---------------------------------------------------------
// EJECUCIÓN DEL SCRIPT
// Esta función autoejecutable inicia todo el proceso
// ---------------------------------------------------------
(async () => {
	console.log('--- INICIANDO PROCESO ---');

    // Llamamos a nuestra función principal
	const resultado = await obtenerPrecioBitcoin();

	if (resultado) {
		console.log('\n💰 PRECIO BITCOIN:');
		console.log(resultado); // Imprime el objeto con el precio
	}
	console.log('-------------------------');
})();
