// **4\. Detección de Teclas Presionadas**

// **Objetivo:**

// Entender cómo capturar y utilizar eventos del teclado en una página web.

// **Consigna:**

// 1. Crea un campo de entrada (\<input type="text"\>).

// 2. Agrega eventos que detecten cuando el usuario presiona una tecla y muestren en la consola qué tecla fue presionada.

// 3. **Preguntas para reflexionar:**

//    * ¿Qué diferencia hay entre keydown, keypress y keyup?
//    * ¿Cómo podrías hacer que solo ciertas teclas disparen un evento específico?
//    * ¿Cómo podrías mostrar un mensaje en la página cuando se presiona la tecla "Enter"?

const entrada1 = document.getElementById('entrada1');
const entrada2 = document.getElementById('entrada2');
const entrada3 = document.getElementById('entrada3');

entrada1.addEventListener('keydown', (e) => {
    console.log(`Input 1: ${e.target.value}`);
})

entrada2.addEventListener('keypress', (e) => {
    console.log(`Input 2: ${e.target.value}`);
})

entrada3.addEventListener('keyup', (e) => {
    console.log(`Input 3: ${e.target.value}`);
})


// ¿Qué diferencia hay entre keydown, keypress y keyup?

// Entender la distinción entre estos tres eventos de teclado es fundamental para capturar las interacciones del usuario de manera precisa. El orden en que se ejecutan cuando se presiona y se suelta una tecla que produce un carácter es: keydown, keypress y finalmente keyup.

//     keydown: Este evento se dispara en el momento en que una tecla es presionada.

//         Se activa para todas las teclas: Incluye teclas de caracteres (como 'a', '7', '$') y teclas que no producen caracteres (como Ctrl, Shift, Alt, F5, Escape o las flechas de dirección).

//         Auto-repetición: Si mantienes una tecla presionada, el evento keydown se disparará repetidamente hasta que la sueltes.

//     keyup: Este evento se dispara cuando una tecla que había sido presionada es finalmente liberada.

//         Al igual que keydown, se activa para todas las teclas.[2]

//     keypress (Obsoleto): Este evento se dispara después de keydown cuando una tecla que produce un valor de carácter es presionada.

//         No se activa para todas las teclas: Solo funciona para teclas que generan un carácter visible (letras, números, símbolos). No se dispara para teclas como Shift, Escape, Ctrl, etc.

//         Importante: Este evento se considera obsoleto en los estándares web modernos y se recomienda evitar su uso. Es preferible utilizar keydown para la mayoría de los casos.

// Evento	¿Cuándo se dispara?	¿Para qué teclas?	¿Sigue siendo relevante?
// keydown	Al presionar una tecla.	Todas las teclas.	Sí, es el más recomendado.
// keyup	Al soltar una tecla.	Todas las teclas.	Sí, para detectar la liberación de una tecla.
// keypress	Al presionar una tecla que produce un carácter.	Solo teclas de caracteres.	No, está obsoleto.
// ¿Cómo podrías hacer que solo ciertas teclas disparen un evento específico?

// Para ejecutar una acción solo cuando se presiona una tecla específica, debes agregar una condición dentro de la función que maneja el evento. El objeto event, que se pasa automáticamente a la función, contiene información sobre la tecla que se presionó.

// La propiedad más moderna y recomendada para esto es event.key. Esta propiedad devuelve una cadena de texto que representa la tecla presionada (por ejemplo, "Enter", "a", "Escape", "ArrowUp").

// Ejemplo: Imagina que quieres mostrar un mensaje en la consola solo cuando se presiona la tecla de flecha hacia arriba.
// code JavaScript

    
// document.addEventListener('keydown', function(event) {
//   // Comprobamos si la tecla presionada es 'ArrowUp'
//   if (event.key === 'ArrowUp') {
//     console.log('¡Has presionado la flecha hacia arriba!');
//   }
// });

  
// Anteriormente se usaba la propiedad event.keyCode (que devuelve un número), pero está en proceso de obsolescencia y no se recomienda para proyectos nuevos.
// ¿Cómo podrías mostrar un mensaje en la página cuando se presiona la tecla "Enter"?

// Combinando los conceptos anteriores, puedes "escuchar" el evento keydown en un campo de entrada (o en toda la página) y verificar si la tecla presionada fue "Enter". Si lo fue, puedes realizar una acción, como mostrar un mensaje.

// Aquí tienes un ejemplo completo. Si escribes en el campo de texto y presionas Enter, se agregará un mensaje a la página.

// HTML:
// <!DOCTYPE html>
// <html lang="es">
// <head>
//   <title>Detectar Enter</title>
// </head>
// <body>
//   <h1>Escribe algo y presiona Enter</h1>
//   <input type="text" id="miInput" placeholder="Escribe aquí...">
//   <div id="mensajes"></div>
// </body>
// </html>

  

// JavaScript:
// // 1. Seleccionamos el campo de entrada y el contenedor de mensajes
// const input = document.getElementById('miInput');
// const contenedorMensajes = document.getElementById('mensajes');

// // 2. Añadimos un "escuchador" para el evento 'keydown'
// input.addEventListener('keydown', function(event) {
//   // 3. Verificamos si la tecla presionada es "Enter"
//   if (event.key === 'Enter') {
//     // Opcional: previene el comportamiento por defecto (como enviar un formulario)
//     event.preventDefault();

//     // 4. Creamos un nuevo párrafo para el mensaje
//     const nuevoMensaje = document.createElement('p');
//     nuevoMensaje.textContent = `Has escrito: "${input.value}" y presionado Enter.`;

//     // 5. Añadimos el nuevo mensaje al contenedor
//     contenedorMensajes.appendChild(nuevoMensaje);

//     // 6. Limpiamos el campo de entrada para el siguiente mensaje
//     input.value = '';
//   }
// });

  

// En este ejemplo, el código detecta la pulsación de la tecla Enter específicamente en el campo de texto (input). Cuando esto ocurre, crea un nuevo elemento <p>, le asigna el texto del input y lo añade al <div> con el id "mensajes".