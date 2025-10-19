// **3\. Resaltando Elementos con Eventos del Mouse**

// **Objetivo:**

// Practicar el uso de mouseover y mouseout para interactuar con los elementos visualmente.

// **Consigna:**

// 1. Crea una lista de elementos (\<li\>) con diferentes palabras.

// 2. Agrega eventos para que, cuando el usuario pase el mouse sobre un elemento, este cambie de color. Cuando el mouse salga, el color debe volver a la normalidad.

// 3. **Preguntas para reflexionar:**

//    * ¿Cómo puedes capturar el evento de mouseover en cada elemento?
//    * ¿Cómo puedes hacer que el color original se recupere al salir el mouse?
//    * ¿Cómo podrías hacer que cada elemento tenga un color diferente al pasar el mouse?

// --- SELECCIÓN DE ELEMENTOS ---
// Seleccionar todos los elementos 'li' (ítems de lista) que existan en el documento HTML.
// document.querySelectorAll devuelve una NodeList, que es como un array de elementos.
const elementos = document.querySelectorAll('li');

// --- APLICAR EVENTOS A CADA ELEMENTO ---

// Recorrer cada uno de los elementos 'li' que se encontraron.
// 'forEach' es un método que ejecuta una función para cada elemento de la lista.
elementos.forEach(elemento => {

    // --- EVENTO 'MOUSEOVER' (cuando el ratón entra en el elemento) ---
    // Añadir un "escuchador de eventos" que se active cuando el puntero del ratón pase por encima del elemento 'li'.
    elemento.addEventListener('mouseover', (e) => {
        // 'e' es el objeto del evento, y 'e.target' se refiere al elemento específico que disparó el evento (el 'li' sobre el que está el ratón).
        
        // Cambiar el color de fondo del elemento a rojo.
        e.target.style.background = 'red';
        // Cambiar el color del texto del elemento a blanco.
        e.target.style.color = "white";
    });

    // --- EVENTO 'MOUSEOUT' (cuando el ratón sale del elemento) ---
    // Añadir otro "escuchador de eventos" que se active cuando el puntero del ratón salga del área del elemento 'li'.
    elemento.addEventListener('mouseout', (e) => {
        // De nuevo, 'e.target' es el 'li' del que acaba de salir el ratón.
        
        // Restaurar el color de fondo del elemento a 'lightblue'.
        e.target.style.background = 'lightblue';
        // Restaurar el color del texto del elemento a negro.
        e.target.style.color = "black";
    });
})