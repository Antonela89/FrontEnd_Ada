// **1\. Identificando Eventos en la Página**

// **Objetivo:**

// Comprender cómo detectar eventos en la web y visualizar su información.

// **Consigna:**

// 1. Abre una página web y accede a la consola del navegador (F12 \> **"Consola"**).

// 2. Usa JavaScript para agregar un evento que detecte cada clic en cualquier parte de la página y muestre en la consola qué elemento fue clickeado.

// 3. **Preguntas para reflexionar:**

//    * ¿Cómo puedes capturar el evento de clic en toda la página?
//    * ¿Qué propiedad del evento te dice qué elemento fue clickeado?
//    * ¿Cómo podrías hacer que solo se muestren los clics en botones específicos?

document.addEventListener('click', function(evento) {
  console.log('Elemento clickeado:', evento.target);
});

// Para capturar el evento de clic en toda la página, puedes agregar un detector de eventos al objeto document.El método addEventListener es la forma moderna y recomendada de hacerlo. Al adjuntar el detector de eventos al document, te aseguras de que cualquier clic que ocurra dentro del cuerpo de la página sea interceptado.

// La sintaxis básica es:
// document.addEventListener('click', tuFuncion);
// Donde `tuFuncion` es la función que se ejecutará cada vez que se detecte un clic.

// #### ¿Qué propiedad del evento te dice qué elemento fue clickeado?

// La propiedad del objeto de evento que te indica qué elemento fue clickeado es `target`. Cuando se dispara un evento, el navegador crea un objeto de evento que contiene información sobre dicho evento. La propiedad `event.target` es una referencia al elemento específico en el que se originó el evento. También existe la propiedad `event.srcElement`, que es una alternativa más antigua y menos estándar que `event.target`.

// #### ¿Cómo podrías hacer que solo se muestren los clics en botones específicos?

// Para registrar clics únicamente en botones específicos, primero necesitas seleccionar esos botones. Puedes hacerlo utilizando métodos como `getElementById`, `getElementsByClassName`, `getElementsByTagName` o `querySelectorAll`. Una vez que tienes una referencia a los botones, puedes adjuntarles un detector de eventos de clic.
