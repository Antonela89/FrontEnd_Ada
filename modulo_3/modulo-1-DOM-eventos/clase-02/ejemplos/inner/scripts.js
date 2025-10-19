    
// ===============================================
// Ejemplo con .innerHTML
// ===============================================
// .innerHTML trabaja con el contenido HTML COMPLETO de un elemento.
// Lee y puede escribir etiquetas HTML (<p>, <h1>, <span>, etc.), no solo texto.

// 1. Seleccionamos el primer div que tiene la clase 'nombre'.
const contenedorNombre = document.querySelector('div.nombre');
// console.log(contenedorNombre); // Muestra el elemento <div class="nombre"></div>

// 2. Leemos su contenido HTML. Como el div está vacío, no mostrará nada.
const contenido = contenedorNombre.innerHTML;
// console.log(contenido); // Muestra "" (un string vacío)

// 3. Escribimos DENTRO del div. innerHTML interpreta el string como si fuera HTML.
// En este caso, simplemente inserta el texto 'Dario'.
contenedorNombre.innerHTML = 'Dario';

// 4. Si volvemos a leer el contenido, ahora sí encontraremos el texto.
const contenido2 = contenedorNombre.innerHTML;
// console.log(contenido2); // Muestra "Dario"


// ===============================================
// Ejemplo con .innerText
// ===============================================
// .innerText trabaja ÚNICAMENTE con el TEXTO visible de un elemento.
// Ignora por completo cualquier etiqueta HTML y solo se enfoca en el contenido textual.

// 1. Seleccionamos el segundo div que tiene la clase 'compras'.
const contenedorCompras = document.querySelector('div.compras');
// console.log(contenedorCompras); // Muestra el elemento <div class="compras">Jamón, Queso, Pan</div>

// 2. Leemos su contenido de TEXTO. innerText nos devuelve solo el texto, sin las etiquetas <div>.
const texto = contenedorCompras.innerText;
// console.log(texto); // Muestra "Jamón, Queso, Pan"

// 3. Añadimos más texto al contenido existente.
// Para que quede más prolijo, agregamos una coma y un espacio antes del nuevo item.
contenedorCompras.innerText += ', Papitas';

// 4. Si volvemos a leer el texto, veremos la lista actualizada.
const texto2 = contenedorCompras.innerText;
// console.log(texto2); // Muestra "Jamón, Queso, Pan, Papitas"


// ==============================================================
//  LA DIFERENCIA CLAVE: ¿Qué pasa si usamos etiquetas HTML?
// ==============================================================

// --- Con .innerHTML ---
// Si le pasamos un string con etiquetas HTML, .innerHTML las va a interpretar
// y el navegador las va a renderizar como elementos HTML reales.
contenedorNombre.innerHTML = '<h1>Hola, <strong>Mundo</strong></h1>';
// En la página verás: un título grande (h1) que dice "Hola," y la palabra "Mundo" en negrita.


// --- Con .innerText ---
// Si le pasamos el MISMO string a .innerText, este NO interpreta las etiquetas.
// Las trata como si fueran texto simple y las muestra tal cual en la pantalla.
contenedorCompras.innerText = '<h1>Hola, <strong>Mundo</strong></h1>';
// En la página verás el texto literal: "<h1>Hola, <strong>Mundo</strong></h1>"

  