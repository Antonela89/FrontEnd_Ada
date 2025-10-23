// ### 2. Evitando el envío de un formulario si hay errores

// **Objetivo:**
// Practicar la validación de datos antes de enviar un formulario.

// **Consigna:**
// 1.  Crea un formulario con los siguientes campos:
//     *   Email (input type="email")
//     *   Contraseña (input type="password")
//     *   Un botón de envío (button type="submit")
// 2.  Antes de enviar el formulario, valida que:
//     *   El email contenga @.
//     *   La contraseña tenga al menos 6 caracteres.
// 3.  Si hay errores, muestra un mensaje en rojo debajo del campo correspondiente y evita el envío del formulario.

// **Preguntas para reflexionar:**
// *   ¿Cómo puedes detectar si un campo está vacío?
// *   ¿Cómo podrías mostrar los mensajes de error sin usar `alert()`?
// *   ¿Cómo podrías permitir el envío del formulario solo si todos los datos son correctos?

// captura de elementos
const form = document.querySelector('form');
const inputEmail = document.querySelector('input[type="email"]');
const inputPassword = document.querySelector('input[type="password"]');
const emailError = document.getElementById('emailError');     // Span para el error del email
const passwordError = document.getElementById('passwordError'); // Span para el error de la contraseña

// Función para limpiar los mensajes de error y clases de input
function clearErrors() {
    emailError.textContent = '';
    passwordError.textContent = '';
    inputEmail.classList.remove('error-input');
    inputPassword.classList.remove('error-input');
}

// Escucha del evento submit del formulario
form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevenir la recarga de la página por defecto

    // Limpiar errores previos antes de revalidar
    clearErrors();

    // Captura de datos para validar
    let email = inputEmail.value.trim(); // Usar .trim() para quitar espacios en blanco
    let password = inputPassword.value;

    let isValid = true; // Bandera para controlar si el formulario es válido

    // 1. Validación del Email
    if (email === '') {
        emailError.textContent = 'El email no puede estar vacío.';
        inputEmail.classList.add('error-input');
        isValid = false;
    } else if (!email.includes('@')) {
        emailError.textContent = 'El email debe contener un "@"';
        inputEmail.classList.add('error-input');
        isValid = false;
    }

    // 2. Validación de la Contraseña
    if (password === '') {
        passwordError.textContent = 'La contraseña no puede estar vacía.';
        inputPassword.classList.add('error-input');
        isValid = false;
    } else if (password.length < 6) {
        passwordError.textContent = 'La contraseña debe tener al menos 6 caracteres.';
        inputPassword.classList.add('error-input');
        isValid = false;
    }

    // 3. Envío condicional del formulario
    if (isValid) {
        // Si todo es válido, puedes "enviar" el formulario
        console.log('Formulario enviado correctamente!');

        // Opcional: Mostrar un mensaje de éxito temporal
        alert('Inicio de sesión exitoso!');

        // Opcional: Limpiar el formulario después del envío exitoso
        form.reset(); // Resetea todos los campos del formulario a sus valores iniciales
        inputEmail.focus(); // Devuelve el foco al campo email
    } else {
        alert('Errores en el formulario. Por favor, corrígelos.');
    }
});