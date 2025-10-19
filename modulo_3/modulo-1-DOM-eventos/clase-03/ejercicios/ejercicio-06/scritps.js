// **🔥 Desafío Extra:**

// Crea un juego simple donde el usuario deba presionar ciertas teclas en un orden específico para ganar. Usa eventos del teclado y preventDefault() para controlar la interacción.

// --- SELECCIÓN DE ELEMENTOS DEL HTML ---
// Guardar en constantes los elementos del HTML con los que se va a interactuar.
// Usar document.getElementById para encontrar un elemento por su 'id'.
const sequenceDisplay = document.getElementById('sequence-display'); // El div para mostrar la secuencia de flechas.
const message = document.getElementById('message'); // El párrafo para mostrar mensajes como "¡Correcto!" o "¡Error!".

// --- MAPA DE TECLAS Y SÍMBOLOS ---
// Crear un objeto para mapear (relacionar) el nombre de la tecla en JavaScript
// con el símbolo de flecha que se quiere mostrar en pantalla.
const arrowMap = {
    'ArrowUp': '↑',
    'ArrowDown': '↓',
    'ArrowLeft': '←',
    'ArrowRight': '→'
};

// --- VARIABLES DEL ESTADO DEL JUEGO ---
// Definir las variables para guardar el estado actual del juego.
let sequence = []; // Array para contener la secuencia de teclas a presionar. Ej: ['ArrowUp', 'ArrowRight']
let playerPosition = 0; // Indicar en qué punto de la secuencia se encuentra el jugador. Empezar en 0.
let sequenceLength = 3; // Definir la longitud inicial de la secuencia.

// --- FUNCIÓN PARA GENERAR UNA NUEVA SECUENCIA ---
// Definir la función encargada de crear una secuencia aleatoria de flechas.
function generateSequence() {
    // Vaciar el array para empezar una nueva secuencia.
    sequence = [];
    // Obtener un array con las claves del mapa: ['ArrowUp', 'ArrowDown', ...].
    const keys = Object.keys(arrowMap);

    // Usar un bucle 'for' para generar tantas flechas como indique 'sequenceLength'.
    for (let i = 0; i < sequenceLength; i++) {
        // Generar un número aleatorio entre 0 y la cantidad de teclas disponibles.
        const randomIndex = Math.floor(Math.random() * keys.length);
        // Usar ese número aleatorio para elegir una tecla del array 'keys' y añadirla a la secuencia.
        sequence.push(keys[randomIndex]);
    }
    // Al terminar, llamar a la función para mostrar la nueva secuencia en pantalla.
    updateDisplay();
}

// --- FUNCIÓN PARA ACTUALIZAR LA PANTALLA ---
// Definir la función para dibujar la secuencia de flechas en el HTML.
function updateDisplay() {
    // Crear un string vacío para construir el HTML que se va a mostrar.
    let displayHTML = '';

    // Recorrer cada elemento de la secuencia generada.
    for (let i = 0; i < sequence.length; i++) {
        // Obtener el símbolo (ej: '↑') a partir de la clave (ej: 'ArrowUp').
        const arrowSymbol = arrowMap[sequence[i]];

        // Comprobar si el jugador ya ha acertado esta flecha.
        // Esto ocurre si el índice 'i' es menor que la posición actual del jugador.
        if (i < playerPosition) {
            // Si ya fue acertada, envolverla en un <span> con la clase 'highlight' para resaltarla.
            displayHTML += `<span class="highlight">${arrowSymbol}</span>`;
        } else {
            // Si aún no ha sido acertada, mostrarla normalmente.
            displayHTML += `<span>${arrowSymbol}</span>`;
        }
    }
    // Finalmente, actualizar el contenido del div 'sequenceDisplay' con el HTML generado.
    sequenceDisplay.innerHTML = displayHTML;
}

// --- FUNCIÓN PARA MANEJAR LA PULSACIÓN DE TECLAS ---
// Definir la función principal que se ejecuta cada vez que el usuario presiona una tecla.
function handleKeyPress(event) {
    // El parámetro 'event' es un objeto con información sobre la tecla presionada (ej: event.key).

    // Filtrar para que el código solo se ejecute si la tecla presionada es una de las flechas.
    // Si la tecla presionada NO está incluida en las claves de 'arrowMap', no hacer nada.
    if (!Object.keys(arrowMap).includes(event.key)) {
        return; // 'return' detiene la ejecución de la función aquí.
    }

    // Prevenir el comportamiento por defecto de las teclas de flecha (mover el scroll de la página).
    event.preventDefault();

    // Obtener la tecla que el jugador debería presionar en este momento.
    const expectedKey = sequence[playerPosition];

    // Comparar la tecla presionada (event.key) con la tecla esperada (expectedKey).
    if (event.key === expectedKey) {
        // --- LÓGICA DE ACIERTO ---
        // Avanzar la posición del jugador en la secuencia.
        playerPosition++;
        // Mostrar un mensaje de acierto.
        message.textContent = '¡Correcto!';
        // Actualizar la pantalla para resaltar la tecla recién acertada.
        updateDisplay();

        // Comprobar si el jugador ha completado toda la secuencia.
        if (playerPosition === sequence.length) {
            // --- LÓGICA AL COMPLETAR LA SECUENCIA ---
            message.textContent = '¡Ganaste! Nueva secuencia...';
            // Aumentar la dificultad para la siguiente ronda.
            sequenceLength++;

            // Usar setTimeout para esperar un poco (1.5 segundos) antes de generar la siguiente secuencia.
            setTimeout(() => {
                // Reiniciar la posición del jugador a 0.
                playerPosition = 0;
                // Generar una nueva secuencia más larga.
                generateSequence();
            }, 1500); // 1500 milisegundos = 1.5 segundos
        }
    } else {
        // --- LÓGICA DE ERROR ---
        message.textContent = '¡Error! Inténtalo de nuevo.';
        // Reiniciar el progreso del jugador a 0.
        playerPosition = 0;
        // Actualizar la pantalla para quitar todos los resaltados.
        updateDisplay();
    }
}

// --- INICIAR EL JUEGO ---
// Añadir un "escuchador de eventos" al documento para el evento 'keydown' (al presionar una tecla).
// Cuando ocurra, ejecutar la función 'handleKeyPress'.
document.addEventListener('keydown', handleKeyPress);

// Llamar a esta función una vez al principio para generar la primera secuencia y comenzar el juego.
generateSequence();