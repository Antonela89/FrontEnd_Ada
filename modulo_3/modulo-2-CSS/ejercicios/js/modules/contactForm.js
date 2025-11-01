export function initializeContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    const button = form.querySelector('button[type="submit"]');
    const notificationContainer = document.getElementById('contact-notification-container');
    
    // Función para mostrar/ocultar errores
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

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        
        // Ocultar notificación anterior
        notificationContainer.innerHTML = '';

        // --- LÓGICA DE VALIDACIÓN ---
        let isValid = true;
        const name = form.querySelector('#name');
        const email = form.querySelector('#email');
        const message = form.querySelector('#message');

        // Validar Nombre
        if (name.value.trim() === '') {
            toggleError(name, true);
            isValid = false;
        } else {
            toggleError(name, false);
        }

        // Validar Email (expresión regular simple)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value)) {
            toggleError(email, true);
            isValid = false;
        } else {
            toggleError(email, false);
        }

        // Validar Mensaje
        if (message.value.trim() === '') {
            toggleError(message, true);
            isValid = false;
        } else {
            toggleError(message, false);
        }

        // Si el formulario NO es válido, detener aquí.
        if (!isValid) {
            return;
        }
        
        // --- Si es válido, proceder con el envío (simulado) ---
        button.classList.add('is-loading');

        setTimeout(() => {
            button.classList.remove('is-loading');
            form.reset(); // Limpiar el formulario

            const notificationHTML = `
                <div class="notification is-success is-light fade-in">
                    <button class="delete"></button>
                    <strong>¡Gracias por tu mensaje!</strong>
                    <hr>
                    Nos pondremos en contacto contigo pronto (esto es una simulación).
                </div>
            `;
            notificationContainer.innerHTML = notificationHTML;

            notificationContainer.querySelector('.delete').addEventListener('click', () => {
                notificationContainer.innerHTML = '';
            });

        }, 1500);
    });
}