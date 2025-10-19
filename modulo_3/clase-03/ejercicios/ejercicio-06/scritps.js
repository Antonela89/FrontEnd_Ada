// **🔥 Desafío Extra:**

// Crea un juego simple donde el usuario deba presionar ciertas teclas en un orden específico para ganar. Usa eventos del teclado y preventDefault() para controlar la interacción.

const sequenceDisplay = document.getElementById('sequence-display');
const message = document.getElementById('message');

const arrowMap = {
    'ArrowUp': '↑',
    'ArrowDown': '↓',
    'ArrowLeft': '←',
    'ArrowRight': '→'
};

let sequence = [];
let playerPosition = 0;
let sequenceLength = 3;

function generateSequence() {
    sequence = [];
    const keys = Object.keys(arrowMap);
    for (let i = 0; i < sequenceLength; i++) {
        const randomIndex = Math.floor(Math.random() * keys.length);
        sequence.push(keys[randomIndex]);
    }
    updateDisplay();
}

function updateDisplay() {
    let displayHTML = '';
    for (let i = 0; i < sequence.length; i++) {
        const arrowSymbol = arrowMap[sequence[i]];
        if (i < playerPosition) {
            // Letra ya acertada
            displayHTML += `<span class="highlight">${arrowSymbol}</span>`;
        } else {
            // Letra pendiente
            displayHTML += `<span>${arrowSymbol}</span>`;
        }
    }
    sequenceDisplay.innerHTML = displayHTML;
}

function handleKeyPress(event) {
    // Solo nos interesan las teclas de flecha.
    if (!Object.keys(arrowMap).includes(event.key)) {
        return;
    }

    // Previene la acción por defecto (mover la página).
    event.preventDefault();

    const expectedKey = sequence[playerPosition];

    if (event.key === expectedKey) {
        // Acierto
        playerPosition++;
        message.textContent = '¡Correcto!';
        updateDisplay();

        if (playerPosition === sequence.length) {
            // Secuencia completada
            message.textContent = '¡Ganaste! Nueva secuencia...';
            sequenceLength++; // Aumenta la dificultad
            setTimeout(() => {
                playerPosition = 0;
                generateSequence();
            }, 1500);
        }
    } else {
        // Error
        message.textContent = '¡Error! Inténtalo de nuevo.';
        playerPosition = 0; // Reinicia el progreso
        updateDisplay();
    }
}

// Iniciar el juego
document.addEventListener('keydown', handleKeyPress);
generateSequence();
