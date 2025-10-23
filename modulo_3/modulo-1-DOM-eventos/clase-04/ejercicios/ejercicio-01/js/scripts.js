// ### 1. Capturando y mostrando datos de un formulario

// **Objetivo:**
// Aprender a obtener datos de un formulario y mostrarlos en pantalla.

// **Consigna:**
// 1.  Crea un formulario con los siguientes campos:
//     *   Nombre (input type="text")
//     *   Edad (input type="number")
//     *   Un botón de envío (button type="submit")
// 2.  Cuando la usuaria presione el botón, muestra los datos ingresados en la página sin recargarla.

// **Preguntas para reflexionar:**
// *   ¿Cómo puedes capturar los valores de los inputs con JavaScript?
// *   ¿Por qué es importante usar `preventDefault()` en el evento submit?
// *   ¿Cómo podrías mostrar los datos dentro de un div en lugar de la consola?

// captura de variables
const form = document.querySelector("form");
const inputNombre = document.querySelector('input[type="text"]');
const inputEdad = document.querySelector('input[type="number"]');

// Escucha del evento submit del formulario, se dispara también si el usuario presiona Enter en un campo del formulario.
form.addEventListener("submit", (e) => {
  // prevenir la recarga de la página
  e.preventDefault();

  // capturar informacion de los input
  const nombre = inputNombre.value;
  const edad = inputEdad.value;
  // console.log(nombre, edad);

  if (nombre.trim() === "" || edad.trim() === "") {
    alert("Por favor, ingresa tu nombre y edad.");
    return; // Detiene la ejecución si los campos están vacíos
  }

  // crear una card para mostrar los datos
  const card = document.createElement("article");
  card.classList.add("card");
  card.innerHTML += `
        <p class="nombre">Nombre: ${nombre}</p>
        <p class="edad">Edad: ${edad} años</p>
        `;

  console.log(card);

  document.querySelector("body").appendChild(card);

  inputNombre.value = "";
  inputEdad.value = "";
  inputNombre.focus();
});
