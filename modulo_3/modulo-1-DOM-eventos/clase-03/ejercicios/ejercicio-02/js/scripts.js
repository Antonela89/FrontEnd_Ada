// **2\. Evitando el Comportamiento por Defecto**

// **Objetivo:**

// Aprender a usar preventDefault() para modificar el comportamiento de los elementos HTML.

// **Consigna:**

// 1. Crea una página con un enlace (\<a\>) que apunte a una URL externa.

// 2. Agrega un evento que, cuando se haga clic en el enlace, muestre un mensaje pero evite la redirección.

// 3. **Preguntas para reflexionar:**

//    * ¿Cómo puedes capturar el evento de clic en el enlace?
//    * ¿Qué sucede si no usas preventDefault()?
//    * ¿Cómo podrías permitir la redirección solo si el usuario confirma su acción?

const enlace = document.querySelector('a');

enlace.addEventListener('click', (event) => {
    event.preventDefault();
    alert(`No ha sido redireccionado`)
})