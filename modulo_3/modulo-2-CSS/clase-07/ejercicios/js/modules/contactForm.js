// ==========================================================================
// MÓDULO: FORMULARIO DE CONTACTO (contactForm.js)
// ==========================================================================
//
// Gestiona toda la interactividad del formulario de contacto.
// Esto incluye la validación de los campos del lado del cliente, proporcionar
// feedback visual al usuario, y simular el proceso de envío.
// He decidido mantener toda esta lógica encapsulada aquí para que el formulario
// sea un componente autocontenido.

export function initializeContactForm() {
    // --- SELECCIÓN DE ELEMENTOS ---
    //
    // Almaceno las referencias a los elementos clave del DOM al inicio.
    // El uso de 'getElementById' es la forma más performante de seleccionar elementos únicos.
    const form = document.getElementById('contact-form');
    if (!form) return; // Guarda de seguridad estándar.

    const button = form.querySelector('button[type="submit"]');
    const notificationContainer = document.getElementById('contact-notification-container');
    
    // --- FUNCIÓN DE UTILIDAD INTERNA ---
    //
    // He creado una función helper 'toggleError' para no repetir código (principio DRY).
    // Su única responsabilidad es manejar la UI para un campo de entrada: mostrar u ocultar
    // el mensaje de error y aplicar/quitar la clase 'is-danger' de Bulma.
    // Pasar 'input' y un booleano 'show' la hace muy reutilizable y legible.
    function toggleError(input, show) {
        const field = input.closest('.field');
        const errorMsg = field.querySelector('.help.is-danger');
        const inputControl = field.querySelector('.input, .textarea');

        if (show) {
            errorMsg.classList.remove('is-hidden');
            inputControl.classList.add('is-danger');
        } else {
            errorMsg.classList.add('is-hidden');
            inputControl.classList.remove('is-danger');
        }
    }

    // --- MANEJADOR DEL EVENTO SUBMIT ---
    //
    // He adjuntado un listener al evento 'submit' del formulario. Esta es la práctica
    // correcta, ya que captura tanto los clicks en el botón como los envíos con la tecla 'Enter'.
    form.addEventListener('submit', (event) => {
        
        // 'event.preventDefault()' es la primera y más importante llamada.
        // Detiene el comportamiento por defecto del navegador (recargar la página)
        // y me da el control total sobre el proceso de envío.
        event.preventDefault();
        
        // Limpio cualquier notificación de éxito anterior para un nuevo intento de envío.
        notificationContainer.innerHTML = '';

        // --- LÓGICA DE VALIDACIÓN ---
        //
        // Mi estrategia de validación es simple y efectiva. Asumo que el formulario
        // es válido ('isValid = true') y lo marco como falso si alguna de mis reglas falla.
        let isValid = true;
        const name = form.querySelector('#name');
        const email = form.querySelector('#email');
        const message = form.querySelector('#message');

        // Para cada campo, compruebo la condición y llamo a mi helper 'toggleError'.
        // El uso de '.trim()' es importante para evitar que los espacios en blanco se consideren válidos.
        if (name.value.trim() === '') {
            toggleError(name, true);
            isValid = false;
        } else {
            toggleError(name, false);
        }

        // Para el email, he optado por una expresión regular simple. Es suficiente para
        // la validación del lado del cliente. La validación definitiva siempre debe hacerse en el servidor.
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value)) {
            toggleError(email, true);
            isValid = false;
        } else {
            toggleError(email, false);
        }

        if (message.value.trim() === '') {
            toggleError(message, true);
            isValid = false;
        } else {
            toggleError(message, false);
        }

        // Si 'isValid' se ha marcado como falso en algún punto, detengo la ejecución con un 'return'.
        if (!isValid) {
            return;
        }
        
        // --- SIMULACIÓN DE ENVÍO ASÍNCRONO ---
        //
        // Si la validación pasa, procedo a simular el envío.
        // Añado la clase 'is-loading' de Bulma al botón. Esto le da al usuario un feedback
        // visual inmediato de que su acción ha sido registrada y algo está sucediendo.
        button.classList.add('is-loading');

        // Uso 'setTimeout' para simular una llamada a un servidor (API).
        // Un retraso de 1.5 segundos es realista y perceptible por el usuario.
        setTimeout(() => {
            // Una vez que la "respuesta" llega, restauro el estado del botón.
            button.classList.remove('is-loading');
            
            // Limpio el formulario para que el usuario pueda enviar otro mensaje si lo desea.
            form.reset();

            // Genero y muestro una notificación de éxito de Bulma.
            // La he colocado en un contenedor separado para desacoplarla del formulario.
            const notificationHTML = `
                <div class="notification is-success is-light fade-in">
                    <button class="delete"></button>
                    <strong>¡Gracias por tu mensaje!</strong>
                    <hr>
                    Nos pondremos en contacto contigo pronto (esto es una simulación).
                </div>
            `;
            notificationContainer.innerHTML = notificationHTML;

            // Es crucial añadir el listener para el botón de cierre DESPUÉS de que la
            // notificación ha sido inyectada en el DOM.
            notificationContainer.querySelector('.delete').addEventListener('click', () => {
                notificationContainer.innerHTML = '';
            });

        }, 1500);
    });
}