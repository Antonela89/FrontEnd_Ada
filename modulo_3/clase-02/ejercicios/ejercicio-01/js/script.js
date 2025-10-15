// **1\. Explorando las relaciones entre elementos en el DOM**

// **Objetivo:**

// Comprender cómo acceder a elementos padre, hijos y hermanos en el DOM.

// **Consigna:**

// 1. Crea una estructura HTML con un div que contenga tres párrafos (p).

// 2. Usa JavaScript para seleccionar uno de los párrafos y mostrar en la consola:

//    * Su elemento padre.
//    * Su primer hijo (si lo tiene).
//    * Su hermano anterior y su hermano siguiente (si existen).

// 3. Preguntas para reflexionar:
//    * ¿Qué sucede si intentas acceder a un previousElementSibling o nextElementSibling en el primer o último párrafo?
//    * ¿Cómo podrías recorrer todos los hijos de un div sin conocer la cantidad exacta?

// capturar el primer parrafo
const parrafo = document.querySelector('p');
console.log(parrafo);

// capturar al padre del parrafo
const padre = parrafo.parentElement;
console.log(padre);

// capturar todos los hijos del parrafo
const hijos = parrafo.children;
console.log(hijos);

// mostrar al primer hijo
const primerHijo = hijos[0];
console.log(primerHijo);

// mostrar cantidad de hijos 
const cantidadHijos = hijos.length
console.log(cantidadHijos);

// mostrar hermano anterior
const hermanoAnterior = parrafo.previousElementSibling;
console.log(hermanoAnterior); // -> resultado: null porque no existe un hermano anterior

// mostrar hermanos posterior
const hermanoPosterior = parrafo.nextElementSibling;
console.log(hermanoPosterior);

