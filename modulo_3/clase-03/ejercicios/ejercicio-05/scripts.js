// **5\. Controlando la Propagación de Eventos**

// **Objetivo:**

// Comprender cómo funciona la propagación de eventos y cómo stopPropagation() puede evitarla.

// **Consigna:**

// 1. Crea una estructura de div anidados, como en el ejemplo:

// \<div id="abuelo"\>

//     \<div id="padre"\>

//         \<div id="hijo"\>Haz clic aquí\</div\>

//     \</div\>

// \</div\>

// 2. Agrega eventos de clic en cada div que muestren un mensaje en la consola indicando qué elemento fue clickeado.

// 3. Usa stopPropagation() en el div hijo y observa qué sucede.

// 4. **Preguntas para reflexionar:**

//    * ¿Qué sucede cuando haces clic en el div hijo sin stopPropagation()?
//    * ¿Qué cambia al agregar stopPropagation() en el hijo?
//    * ¿Cómo podrías usar esta técnica en un proyecto real?

// Esperamos a que todo el contenido del DOM (la estructura HTML) esté completamente cargado y parseado
// antes de intentar adjuntar nuestros event listeners. Esto previene errores si el script se carga
// antes que los elementos HTML a los que hace referencia.
document.addEventListener('DOMContentLoaded', () => {

    // --- 1. event.target y event.currentTarget ---
    // 'target' es el elemento que originó el evento (donde se hizo clic).
    // 'currentTarget' es el elemento que está escuchando el evento.
    const parentDiv = document.getElementById('parent');

    parentDiv.addEventListener('click', (event) => {
        // Por ejemplo, si haces clic en el botón 'childButton', event.target será el botón.
        console.log(`event.target: El elemento que originó el clic fue ->`, event.target);

        // Sin importar dónde hagas clic dentro de 'parentDiv' (en el texto o en el botón),
        // event.currentTarget siempre será 'parentDiv', porque es el elemento con el listener.
        console.log(`event.currentTarget: El elemento que escucha el evento es ->`, event.currentTarget);
        alert(`Target: ${event.target.tagName}#${event.target.id}\nCurrentTarget: ${event.currentTarget.tagName}#${event.currentTarget.id}`);
    });


    // --- 2. event.preventDefault() ---
    // Este método cancela la acción por defecto del navegador para un evento.
    const myLink = document.getElementById('myLink');

    myLink.addEventListener('click', (event) => {
        // Prevenimos la acción por defecto de un enlace, que es navegar a la URL de su 'href'.
        event.preventDefault();
        alert('Navegación prevenida. Gracias a event.preventDefault(), no irás a Google.');
    });


    // --- 3. event.stopPropagation() ---
    // Detiene la propagación del evento hacia los elementos padre en el DOM (fase de "burbujeo").
    const outerBox = document.getElementById('outerBox');
    const innerBox = document.getElementById('innerBox');

    outerBox.addEventListener('click', () => {
        // Este listener se activará si haces clic en 'outerBox', pero también si haces clic en 'innerBox',
        // a menos que la propagación se detenga.
        alert('Clic detectado en el contenedor EXTERIOR');
    });

    innerBox.addEventListener('click', (event) => {
        // Al hacer clic aquí, se ejecuta este código primero.
        alert('Clic detectado en el contenedor INTERIOR.');

        // event.stopPropagation() evita que el evento "burbujee" hacia el 'outerBox'.
        // Como resultado, el listener del 'outerBox' no se ejecutará.
        // Si comentas la siguiente línea, verás que ambos alerts aparecen.
        event.stopPropagation();
    });


    // --- 4. event.key y event.code ---
    // Propiedades útiles para eventos de teclado.
    const keyInput = document.getElementById('keyInput');
    const keyInfo = document.getElementById('keyInfo');

    keyInput.addEventListener('keydown', (event) => {
        // event.key: Representa el carácter de la tecla presionada ("a", "A", "Enter", "Shift").
        // Es sensible a mayúsculas y a la distribución del teclado.
        const key = event.key;

        // event.code: Representa la tecla física en el teclado ("KeyA", "Enter", "ShiftLeft").
        // No cambia con mayúsculas o la distribución del teclado. Útil para controles de juegos.
        const code = event.code;

        const info = `event.key: "${key}" | event.code: "${code}"`;
        keyInfo.textContent = info;
    });


    // --- 5. event.clientX y event.clientY ---
    // Devuelven las coordenadas del puntero del mouse relativas al viewport (la parte visible de la ventana).
    const mouseCoordsBox = document.getElementById('mouseCoordsBox');
    const coordsInfo = document.getElementById('coordsInfo');

    mouseCoordsBox.addEventListener('mousemove', (event) => {
        // Obtenemos la coordenada horizontal (X) y vertical (Y) del mouse.
        const x = event.clientX;
        const y = event.clientY;

        // Actualizamos el contenido del párrafo para mostrar las coordenadas en tiempo real.
        coordsInfo.textContent = `Coordenadas relativas al viewport: X=${x}, Y=${y}`;
    });


    // --- 6. event.type ---
    // Devuelve una cadena con el nombre del tipo de evento que se disparó ("click", "mouseover", etc.).
    const childButton = document.getElementById('childButton');

    // Creamos una única función que puede manejar diferentes eventos.
    function handleMultipleEvents(event) {
        // Usamos event.type para saber qué evento activó la función y actuar en consecuencia.
        console.log(`El evento que se ha disparado es de tipo: "${event.type}"`);
    }

    // Adjuntamos la misma función a diferentes eventos en el mismo elemento.
    childButton.addEventListener('click', handleMultipleEvents);
    childButton.addEventListener('mouseover', handleMultipleEvents);
    childButton.addEventListener('mouseout', handleMultipleEvents);

});