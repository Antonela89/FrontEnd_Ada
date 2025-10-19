// Espera a que todo el contenido del DOM esté cargado antes de ejecutar el script
document.addEventListener('DOMContentLoaded', () => {

    // --- Eventos del Mouse ---

    // Evento 'click': Se dispara cuando se hace clic en un elemento.
    const clickBtn = document.getElementById('clickBtn');
    clickBtn.addEventListener('click', () => {
        alert('¡Hiciste clic en el botón!');
    });

    // Evento 'dblclick': Se dispara cuando se hace doble clic en un elemento.
    const dblClickBtn = document.getElementById('dblClickBtn');
    dblClickBtn.addEventListener('dblclick', () => {
        alert('¡Hiciste doble clic en el botón!');
    });

    // Evento 'mouseover': Se dispara cuando el puntero del mouse se mueve sobre un elemento.
    const mouseOverBox = document.getElementById('mouseOverBox');
    mouseOverBox.addEventListener('mouseover', () => {
        mouseOverBox.style.backgroundColor = '#5cb85c';
        mouseOverBox.textContent = '¡El mouse está encima!';
    });

    // Evento 'mouseout': Se dispara cuando el puntero del mouse sale de un elemento.
    mouseOverBox.addEventListener('mouseout', () => {
        mouseOverBox.style.backgroundColor = '#f0ad4e';
        mouseOverBox.textContent = 'Pasa el mouse sobre mí';
    });


    // --- Eventos del Teclado ---

    const keyInput = document.getElementById('keyInput');
    const keyLog = document.getElementById('keyLog');

    // Evento 'keydown': Se dispara cuando se presiona una tecla.
    keyInput.addEventListener('keydown', (event) => {
        keyLog.textContent = `Tecla presionada: ${event.key}`;
    });

    // Evento 'keyup': Se dispara cuando se suelta una tecla.
    keyInput.addEventListener('keyup', () => {
        console.log('Tecla liberada');
    });


    // --- Eventos de Formulario ---

    const myForm = document.getElementById('myForm');
    const formLog = document.getElementById('formLog');
    const nameInput = document.getElementById('name');

    // Evento 'submit': Se dispara cuando se envía un formulario.
    myForm.addEventListener('submit', (event) => {
        // previene el comportamiento por defecto del formulario (recargar la página)
        event.preventDefault();
        formLog.textContent = `Formulario enviado con el nombre: ${nameInput.value}`;
    });

    // Evento 'focus': Se dispara cuando un elemento recibe el foco.
    nameInput.addEventListener('focus', () => {
        nameInput.style.backgroundColor = '#e7f3fe';
    });

    // Evento 'blur': Se dispara cuando un elemento pierde el foco.
    nameInput.addEventListener('blur', () => {
        nameInput.style.backgroundColor = '';
    });

    // --- Eventos de Ventana ---

    const windowSize = document.getElementById('windowSize');

    // Evento 'resize': Se dispara cuando se cambia el tamaño de la ventana del navegador.
    window.addEventListener('resize', () => {
        windowSize.textContent = `Ancho: ${window.innerWidth}px, Alto: ${window.innerHeight}px`;
    });

    // Evento 'load': Se dispara cuando toda la página ha terminado de cargarse.
    window.addEventListener('load', () => {
        console.log('La página se ha cargado completamente.');
    });
});