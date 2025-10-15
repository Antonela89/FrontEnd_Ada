// **5\. Desafío final: Generador de tarjetas dinámicas**

// **Objetivo:**

// Integrar todos los conceptos vistos en la clase para manipular el DOM dinámicamente.

// **Consigna:**

// 1. Crea un formulario HTML con los siguientes campos:

//    * Un input para el nombre.
//    * Un input para una descripción.
//    * Un botón que diga **"Crear Tarjeta"**.

// 2. Cuando la usuaria complete los campos y haga clic en el botón, debe generarse una tarjeta dentro de un div.

// 3. La tarjeta debe mostrar el nombre en un \<h2\> y la descripción en un \<p\>, todo dentro de un article con borde y padding.

// 4. Usa createElement(), innerHTML y Template Strings para construir la tarjeta.

// 5. **Preguntas para reflexionar:**

//    * ¿Cómo puedes estructurar la tarjeta para que se vea bien sin usar CSS?
//    * ¿Cómo podrías permitir que la usuaria cree varias tarjetas sin borrar las anteriores?
//    * ¿Cómo podrías agregar un botón en cada tarjeta para eliminarla individualmente?

// **🔥 Desafío Extra:**

// * **Agrega un botón "Eliminar Última Tarjeta"** que borre la última tarjeta creada.
// * **Modifica el color de fondo de cada tarjeta de forma aleatoria al crearse.**

// armado de variables
const nombre = document.getElementById('nombre');
const descripcion = document.getElementById('descripcion');
const boton = document.getElementById('crear');
const eliminarUltima = document.getElementById('eliminar');

const body = document.querySelector('body');
const contenedor = document.createElement('div');
contenedor.classList.add('centrado', 'row');
body.appendChild(contenedor);

function generarNumeroAleatorio() {
    return Math.floor(Math.random() * 256);
}

boton.onclick = () => {
    let valorNombre = nombre.value;
    let valorDescripcion = descripcion.value;

    if (valorNombre.trim() === '' || valorDescripcion.trim() === '') {
        alert(`Los campos no pueden estar vacios.`)
    }

    const tarjeta = document.createElement('article');
    tarjeta.classList.add('tarjeta');

    // Armado de color random
    let r = generarNumeroAleatorio();
    let g = generarNumeroAleatorio();
    let b = generarNumeroAleatorio();

    let colorRandom = `rgb(${r},${g},${b})`;

    tarjeta.style.background = colorRandom;

    tarjeta.innerHTML = `
        <h2>${valorNombre}</h2>
        <p>${valorDescripcion}</p>
    `

    const button = document.createElement('button');
    button.classList.add('boton');
    button.innerHTML = 'Eliminar';

    button.onclick = (event) => {
        const tarjetaSeleccionada = event.target.parentElement;

        contenedor.removeChild(tarjetaSeleccionada)
    }

    tarjeta.appendChild(button);

    contenedor.appendChild(tarjeta);

    nombre.value = '';
    descripcion.value = '';

    nombre.focus();
}

eliminarUltima.onclick = () => {
    const tarjetas = contenedor.children;
    const indiceUltimoElemento = tarjetas.length - 1
    contenedor.removeChild(tarjetas[indiceUltimoElemento])

}