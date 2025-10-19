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

const elementos = document.querySelectorAll('li');

// console.log(elementos);

elementos.forEach(elemento => {
    elemento.addEventListener('mouseover', (e) => {
        e.target.style.background = 'red';
        e.target.style.color = "white";
    });

    elemento.addEventListener('mouseout', (e) => {
        e.target.style.background = 'lightblue';
        e.target.style.color = "black";
    })
})