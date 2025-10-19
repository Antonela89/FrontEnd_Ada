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

// Lo primero que hago es guardar en variables los elementos del HTML con los que voy a trabajar.
const nombre = document.getElementById('nombre');
const descripcion = document.getElementById('descripcion');
const boton = document.getElementById('crear');
const eliminarUltima = document.getElementById('eliminar');

// Primero selecciono el body.
const body = document.querySelector('body');

// Ahora creo mi div contenedor con createElement.
const contenedor = document.createElement('div');

// Agrego unas clases css.
contenedor.classList.add('centrado', 'row');

// Agrego este nuevo div al body para que realmente aparezca en la página.
body.appendChild(contenedor);

// Esta función es para el desafío extra del color.
// Me va a dar un número al azar entre 0 y 255, que es lo que necesita el RGB.
function generarNumeroAleatorio() {
    // Math.random() me da un número entre 0 y 1.
    // Lo multiplico por 256 para que me dé hasta 255.99...
    // y con Math.floor() le quito los decimales (Redondeo).
    return Math.floor(Math.random() * 256);
}

// Le asigno una función al evento 'onclick' de mi botón.
boton.onclick = () => {
    // Primero, tengo que "capturar" lo que el usuario escribió en los inputs.
    // Para eso, uso la propiedad .value.
    let valorNombre = nombre.value;
    let valorDescripcion = descripcion.value;

    // Una pequeña validación. No quiero crear tarjetas vacías.
    // Uso .trim() para quitar espacios en blanco.
    if (valorNombre.trim() === '' || valorDescripcion.trim() === '') {
        // Si algo está vacío, muestro una alerta y no sigo adelante.
        alert(`Los campos no pueden estar vacios.`);
        return; // El 'return' detiene la función aquí.
    }

    // Uso createElement para crear un 'article'.
    const tarjeta = document.createElement('article');
    tarjeta.classList.add('tarjeta'); // Le pongo su clase para los estilos.

    // --- Parte del Desafío Extra: Color Aleatorio ---
    // Llamo a mi función tres veces para tener los tres valores de RGB.
    let r = generarNumeroAleatorio();
    let g = generarNumeroAleatorio();
    let b = generarNumeroAleatorio();

    // Construyo el string de CSS para el color
    let colorRandom = `rgb(${r},${g},${b})`;

    // Y se lo aplico directamente al estilo de la tarjeta que acabo de crear.
    tarjeta.style.background = colorRandom;

    // Ahora le meto el contenido a la tarjeta.
    // Uso Template Strings (los backticks ``)  para poner mis variables adentro con ${}.
    tarjeta.innerHTML = `
        <h2>${valorNombre}</h2>
        <p>${valorDescripcion}</p>
    `;

    // Ahora tengo que crear el botón para eliminar ESTA tarjeta en particular.
    const button = document.createElement('button');
    button.classList.add('boton');
    button.innerHTML = 'Eliminar';

    // A este nuevo botón también le pongo su propio evento onclick.
    button.onclick = (event) => {
        // 'event' es un objeto que me dice todo sobre el evento.
        // 'event.target' es el elemento exacto donde hice clic (o sea, este botón).
        // 'parentElement' me da el padre de ese botón, que es ¡la tarjeta!
        const tarjetaSeleccionada = event.target.parentElement;

        // Ahora le digo al contenedor grande que elimine a uno de sus hijos, que es la tarjeta que acabo de encontrar.
        contenedor.removeChild(tarjetaSeleccionada);
    }

    // Agrego el botón a la tarjeta.
    tarjeta.appendChild(button);

    // Y finalmente, agrego la tarjeta completa (con título, párrafo y botón)
    // a mi div contenedor.
    contenedor.appendChild(tarjeta);

    // Para que la experiencia sea mejor, limpio los inputs después de crear la tarjeta.
    nombre.value = '';
    descripcion.value = '';

    // Y pongo el cursor de nuevo en el primer input, listo para la siguiente tarjeta.
    nombre.focus();
}

// --- Parte del Desafío Extra: Eliminar la última tarjeta ---
// Le asigno una función al evento onclick del botón "Eliminar Última".
eliminarUltima.onclick = () => {
    // Primero, necesito saber cuántas tarjetas hay.
    // 'contenedor.children' me da una lista de todos los elementos hijos (las tarjetas).
    const tarjetas = contenedor.children;

    // Si no hay tarjetas, mejor no hacer nada para evitar un error.
    if (tarjetas.length === 0) {
        alert("No hay tarjetas para eliminar.");
        return;
    }

    // El índice del último elemento es siempre la cantidad de elementos menos 1
    const indiceUltimoElemento = tarjetas.length - 1;

    // Ahora le digo al contenedor que elimine al hijo que está en esa última posición.
    contenedor.removeChild(tarjetas[indiceUltimoElemento]);
}