// nodos del dom
const $loading = document.getElementById('loading');
const $phrase = document.getElementById('phrase');
const $boton = document.getElementById('trigger');

// datos de urls
const API_ADVICE_URL = 'https://api.adviceslip.com/advice';
const API_TRANSLATE_URL = 'https://api.mymemory.translated.net/get';

// Función para mostrar/ocultar estado de carga -> recibe un booleano
const toggleLoading = (isLoading) => {
    if (isLoading) {
        $loading.classList.remove('hidden'); // mostrar el snipper
        $boton.disabled = true; // Desactivar botón para evitar múltiples clicks
    } else {
        $loading.classList.add('hidden'); // ocultar snipper
        $boton.disabled = false; // activar botón
    }
};

// funcion para obtener las frases
const getPhrases = async () => {
    try {
        // IMPORTANTE: Agregamos un timestamp para evitar que el navegador o la API
        // devuelvan la misma frase cacheada una y otra vez.
		// aplica asincronia
        const response = await fetch(`${API_ADVICE_URL}?t=${Date.now()}`);

		// manejo de respuesta erronea
        if (!response.ok) throw new Error('Error al obtener la frase');

		// formateo asincrono de la respuesta de la api
        const data = await response.json();
		// devuelve solo la frase
        return data.slip.advice;
    } catch (error) {
		// manejo de error
        console.error(error);
        return null;
    }
};

// función para traducir frase (original inglés)
const translateText = async (text) => {
    if (!text) return null; // en caso de no recibir parametro

    try {
		// a la url base se le agrega el query params para traducir de ingles a español
        const url = `${API_TRANSLATE_URL}?q=${encodeURIComponent(text)}&langpair=en|es`;
		// uso de fetch
        const res = await fetch(url);
		// formate de respuesta del fetch
        const data = await res.json();
        
		// devuelve el texto traducido o en su defecto el texto original
        return data.responseData.translatedText || text;
    } catch (error) {
		// manejo de error
        console.error('Error al traducir:', error);
        return text; // Si falla la traducción, se muestra la original en inglés
    }
};

// manejo de generacion de frase
const handleGeneratePhrase = async () => {
	// mostrar el snipper
    toggleLoading(true);
    
    try {
		// obtener la frase en ingles
        const phraseOriginal = await getPhrases();
        
		// manejo de error en caso de no obtener nada
        if (!phraseOriginal) {
            throw new Error('No se pudo conectar con el servicio de frases.');
        }

		// traducir
        const phraseTranslated = await translateText(phraseOriginal);
        
        // textContent por seguridad (evita inyección de HTML)
        $phrase.textContent = phraseTranslated || "Ocurrió un error inesperado.";
        
    } catch (error) {
		// manaejo de error
        $phrase.textContent = "Lo sentimos, hubo un error. Intenta de nuevo.";
        console.error(error);
    } finally {
		// si o si se desactiva el snipper
        toggleLoading(false);
    }
};

// escucha de eventos del botón
$boton.addEventListener('click', (e) => {
    e.preventDefault(); 
	// llamar a la funcion manejadora
    handleGeneratePhrase();
});