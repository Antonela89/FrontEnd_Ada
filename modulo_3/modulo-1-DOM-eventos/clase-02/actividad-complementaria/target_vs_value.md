Aquí, 'input' es una variable que contiene una REFERENCIA DIRECTA al elemento <input> del DOM. No es un evento.
const input =  document.getElementById('nombre');
const mostrar = document.getElementById('mostrar');

// El evento 'onclick' ocurre en el botón 'mostrar'
mostrar.onclick = () => {
    // Para obtener el valor del input, accedes directamente a su propiedad '.value'
    let nombre = input.value; // Esto es correcto

    // Si intentaras usar input.target.value...
    // 1. JavaScript buscaría la propiedad 'target' en tu variable 'input'.
    // 2. No la encontraría, porque el elemento <input> no tiene una propiedad llamada 'target'.
    // 3. 'input.target' devolvería 'undefined'.
    // 4. Intentar obtener '.value' de 'undefined' (undefined.value) provocaría un error y el código se rompería.
    
    const p = document.createElement('p');
    p.innerHTML = `Hola ${nombre}, bienvenida a la clase de JavaScript\!`;
    document.body.appendChild(p);
}

¿Cuándo se usa event.target.value?

La propiedad .target pertenece al objeto event que se genera cuando ocurre una acción (como un clic, un cambio en un input, etc.). El event.target es una referencia al elemento exacto que originó el evento.

Se usa comúnmente cuando tienes una función que maneja eventos y necesitas saber qué elemento la activó.

Ejemplo correcto de event.target.value:

Imagina que quieres hacer algo mientras el usuario escribe en el input. En ese caso, el evento (oninput) estaría en el propio input.
code JavaScript
const input = document.getElementById('nombre');

// El evento 'oninput' se dispara CADA VEZ que el valor del input cambia.
input.oninput = (event) => {
    // 1. 'event' es el objeto que describe el evento 'input'.
    // 2. 'event.target' es el elemento que disparó el evento (el propio <input>).
    // 3. 'event.target.value' es el valor actual de ese input.
    console.log("El valor actual es:", event.target.value);
};
En resumen:

    input.value: Lo usas cuando tienes una variable que apunta directamente al elemento del DOM y quieres obtener su valor en un momento determinado (como al hacer clic en un botón).

    event.target.value: Lo usas dentro de una función que maneja un evento para obtener el valor del elemento que específicamente disparó dicho evento.