// **3\. Modificando el contenido de un elemento con innerHTML e innerText**

// **Objetivo:**

// Diferenciar el uso de innerHTML e innerText.

// **Consigna:**

// 1. Crea una estructura HTML con un div que contenga un texto inicial.

// 2. Agrega dos botones:

//    * Uno para cambiar el texto dentro del div usando innerText.
//    * Otro para cambiar el contenido del div usando innerHTML e insertando etiquetas \<strong\>.

// 3. **Preguntas para reflexionar:**

//    * ¿Qué diferencia notas entre innerText e innerHTML?
//    * ¿Qué sucede si intentas insertar una etiqueta \<strong\> dentro del div usando innerText?

const contenedor = document.getElementById('contenedor');
const contenido = document.getElementById('texto');
const btnInnerText = document.getElementById('innerText');
const btnInnerHTML = document.getElementById('innerHTML');

btnInnerText.onclick = () => {
    const texto = contenido.innerText;
    // console.log(texto);
    contenido.innerText = 'Estudiando JS'
};

btnInnerHTML.onclick = () => {
    const texto = contenido.innerHTML;
    // console.log(texto);
     contenido.innerHTML = `<strong>Estudiando JS</strong>`
};