// ### 3. Limitando el número de caracteres en un textarea

// **Objetivo:**
// Evitar que la usuaria escriba más caracteres de los permitidos en un textarea.

// **Consigna:**
// 1.  Crea un textarea con un máximo de 150 caracteres.
// 2.  Muestra un contador de caracteres restantes en tiempo real.
// 3.  Si la usuaria intenta escribir más de 150 caracteres, impide que lo haga.

// **Preguntas para reflexionar:**
// *   ¿Cómo puedes detectar cada vez que la usuaria presiona una tecla dentro del textarea?
// *   ¿Cómo puedes actualizar el contador de caracteres sin recargar la página?
// *   ¿Qué método de JavaScript puedes usar para evitar que se escriban más caracteres?

// captura de elementos
const mensaje = document.getElementById("mensaje");
const cantidadCaracteresSpan = document.getElementById("cantidad");

// se estable cantidad maxima de caracteres
const maximoCaracteres = 150;

// funcion para actualizar contador
const actualizarContador = () => {
  // captura de cantidad elementos escritos por el usuario
  const caracteresEscritos = mensaje.value.length;
  // determinar la cantidad de caracteres que quedan por escribir
  const caracteresRestantes = maximoCaracteres - caracteresEscritos;

  // actualizar el contenido del span a medida que se escribe
  cantidadCaracteresSpan.textContent = caracteresRestantes;

  if (caracteresRestantes <= 10) {
    cantidadCaracteresSpan.classList.add("warning");
  } else {
    cantidadCaracteresSpan.classList.remove("warning");
  }

  // Si por alguna razón (ej. copy-paste) se excede el límite (aunque maxlength lo previene) podemos cortar el texto.
    if (caracteresEscritos > maximoCaracteres) {
        //Toma el texto actual del textarea, extrae una subcadena que comienza desde el primer carácter (índice 0) y tiene una longitud máxima de maximoCaracteres (150 en tu caso), y luego reemplaza el contenido actual del textarea con esta nueva subcadena
        mensaje.value = mensaje.value.substring(0, maximoCaracteres);
        cantidadCaracteresSpan.textContent = 0; // Aseguramos que el contador muestre 0
        cantidadCaracteresSpan.classList.add('warning'); // Aseguramos el color rojo
    }
};

actualizarContador();

// Escucha del evento 'input' en el textarea
// El evento 'input' se dispara cada vez que el valor del input/textarea cambia (tecleo, pegar, cortar, etc.)
mensaje.addEventListener("input", actualizarContador);