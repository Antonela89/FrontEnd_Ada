// Captura de elementos del DOM
const calculatorForm = document.getElementById('calculatorForm');
const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const operationSelect = document.getElementById('operation');
const calculationResult = document.getElementById('calculationResult');

const num1Error = document.getElementById('num1Error');
const num2Error = document.getElementById('num2Error');
const operationError = document.getElementById('operationError'); // Aunque el select siempre tendrá una opción seleccionada, lo mantenemos por consistencia

// Función para limpiar mensajes de error
function clearErrors() {
    num1Error.textContent = '';
    num2Error.textContent = '';
    operationError.textContent = '';
    num1Input.classList.remove('error-input');
    num2Input.classList.remove('error-input');
    operationSelect.classList.remove('error-input');
}

// Escucha del evento submit del formulario
calculatorForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Evitar la recarga de la página

    clearErrors(); // Limpiar errores previos

    let isValid = true; // Bandera de validación

    // Obtener valores y convertirlos a números
    const num1 = parseFloat(num1Input.value); // parseFloat permite números decimales
    const num2 = parseFloat(num2Input.value);
    const operation = operationSelect.value;

    // Validación del primer número
    if (isNaN(num1)) { // isNaN() verifica si no es un número
        num1Error.textContent = 'Por favor, ingresa un número válido.';
        num1Input.classList.add('error-input');
        isValid = false;
    }

    // Validación del segundo número
    if (isNaN(num2)) {
        num2Error.textContent = 'Por favor, ingresa un número válido.';
        num2Input.classList.add('error-input');
        isValid = false;
    }

    // Si hay errores, detener la ejecución
    if (!isValid) {
        calculationResult.textContent = 'Por favor, corrige los errores.';
        calculationResult.style.color = '#dc3545'; // Color rojo para el mensaje de error
        return;
    }

    // Realizar el cálculo
    let result;
    let isDivisionByZero = false;

    switch (operation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                isDivisionByZero = true;
                result = 'No se puede dividir por cero';
            } else {
                result = num1 / num2;
            }
            break;
        default:
            result = 'Operación no válida';
            isValid = false; // Marcar como inválido si la operación no es reconocida
            operationError.textContent = 'Operación no válida.'; // Mensaje de error para la operación
            operationSelect.classList.add('error-input');
            break;
    }

    // Mostrar el resultado
    if (isValid && !isDivisionByZero) {
        calculationResult.textContent = ` ${result}`; // Usa template string para mejor formato
        calculationResult.style.color = '#007bff'; // Color azul para el resultado normal
    } else if (isDivisionByZero) {
        calculationResult.textContent = result; // Muestra el mensaje de división por cero
        calculationResult.style.color = '#dc3545'; // Color rojo para error de división por cero
    } else {
        calculationResult.textContent = 'Error en la operación.';
        calculationResult.style.color = '#dc3545';
    }
});

// Establecer el foco en el primer input al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    num1Input.focus();
});