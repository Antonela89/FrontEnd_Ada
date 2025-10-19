//----------------------------------Ejercicio-2: Agregar y Eliminar parrafo-----------------------------------
// acceder con get element
let addParrafo = document.getElementById('add');
let deleteParrafo = document.getElementById('delete');
// impresion de elemento por consola
// console.log(addParrafo);
// console.log(deleteParrafo);
// acceder al div 
let contenedor = document.querySelector('.contenedor');

// evento -> el boton escucha el evento click
addParrafo.addEventListener("click", () => {
  // se crea una variable que contiene un nuevo nodo -> <p></p>
  const nuevoParrafo = document.createElement("p");
  // a la variable se le agrega contenido
  nuevoParrafo.textContent = "Este es un nuevo párrafo agregado.";
  // al contenedor de los botones se le agrega un nuevo hijo (appendChild), en este caso es el nuevo parrafo
  contenedor.appendChild(nuevoParrafo);
});


deleteParrafo.addEventListener("click", () => {
  // Obtiene todos los párrafos que están DENTRO del contenedor
  let parrafosEnContenedor = contenedor.getElementsByTagName("p");

  // Verifica si hay al menos un párrafo para eliminar
  if (parrafosEnContenedor.length > 0) {
    // Elimina el último párrafo del contenedor
    contenedor.removeChild(parrafosEnContenedor[parrafosEnContenedor.length - 1]);
  }
});

//------------------------Ejercicio-3: Cambio de color---------------------------------------
let theme = document.getElementById('theme');

theme.addEventListener('click', () => {
  const body = document.querySelector('body');
  body.classList.toggle('color_fondo')

  body.removeAttribute('style');

})

let theme_varios = document.getElementById('theme-varios');
const palette = ['#025159', '#3E848C', '#7AB8BF', '#C4EEF2', '#A67458']
let colorIndex = 0;

theme_varios.addEventListener('click', () => {
  const body = document.querySelector('body');
  body.style.backgroundColor = palette[colorIndex];
  colorIndex++;

  if (colorIndex >= palette.length) {
    colorIndex = 0;
  }
})

let aleatorio = document.getElementById('theme-aleatorio');

// Función para generar un número aleatorio entre 0 y 255
function generarNumeroAleatorio() {
  return Math.floor(Math.random() * 256);
}

aleatorio.addEventListener('click', () => {
  const body = document.querySelector('body');

  // Armado de color random
  let r = generarNumeroAleatorio();
  let g = generarNumeroAleatorio();
  let b = generarNumeroAleatorio();

  let colorRandom = `rgb(${r},${g},${b})`;

  body.style.backgroundColor = colorRandom;
})

// usando variables globales
const paletaA = ['#4F7302', '#2C4001', '#1A2601', '#BF9775', '#F2D6BD']
let theme_Variable = document.getElementById('theme-varios-css');
let colorIndex2 = 0;

theme_Variable.addEventListener('click', () => {
  const body = document.querySelector('body');
  body.removeAttribute('style');

  const nuevoColor = paletaA[colorIndex2];
  colorIndex2 = (colorIndex2 + 1) % paletaA.length;

  // Actualiza el valor de la variable CSS en el elemento raíz (<html>)
  document.documentElement.style.setProperty('--color-principal', nuevoColor);

})

//------------------------Ejercicio-4: Cambio de Clase---------------------------------------
let destacar = document.getElementById('destacar');
let destacados = document.querySelectorAll('.destacado');
// console.log(destacados);

destacar.addEventListener('click', () => {
  destacados.forEach(li => {
    li.classList.toggle('destacado');
  });
})


