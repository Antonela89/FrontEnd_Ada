// **2\. Creando y agregando elementos dinámicamente**

// **Objetivo:**

// Practicar la creación de nodos y su inserción en el DOM.

// **Consigna:**

// 1. Crea un botón en tu HTML con el texto **"Agregar Elemento"**.

// 2. Al hacer clic en el botón, debe crearse un nuevo párrafo dentro de un div con un texto aleatorio.

// 3. **Preguntas para reflexionar:**

//    * ¿Qué método de JavaScript puedes usar para crear un nuevo elemento?
//    * ¿Cómo puedes agregar ese nuevo elemento dentro del div?
//    * ¿Cómo podrías hacer que el texto del párrafo sea aleatorio en cada clic?

// capturar el botón
const boton = document.getElementById('agregar');
console.log(boton);

// poner el botón a escuchar un evento click
boton.onclick = () => {
    const div = document.createElement('div');
    const p = document.createElement('p');

    const frases = [
        "Esta es la primera frase.",
        "Esta es la segunda frase.",
        "Y esta es la tercera frase."
    ];

    function mostrarFraseAleatoria() {
        const indiceAleatorio = Math.floor(Math.random() * frases.length);
        return frases[indiceAleatorio];
    }

    p.innerHTML = mostrarFraseAleatoria();

    document.body.appendChild(div);
    div.appendChild(p);
}