// **4\. Trabajando con Template Strings para generar contenido dinámico**

// **Objetivo:**

// Aprender a usar Template Strings para generar contenido en el DOM.

// **Consigna:**

// 1. Crea un formulario HTML con un input para ingresar un nombre y un botón que diga **"Mostrar Mensaje"**.

// 2. Al hacer clic en el botón, debe aparecer un mensaje en la página que diga:  
//    **"Hola \[nombre ingresado\], bienvenida a la clase de JavaScript\!"**

// 3. Usa Template Strings para construir el mensaje dinámicamente.

// 4. **Preguntas para reflexionar:**

//    * ¿Por qué no podemos usar comillas simples o dobles en lugar de los backticks (\`\\)?
//    * ¿Cómo podrías agregar más información en el mensaje sin concatenar con \+?


const input =  document.getElementById('nombre');
const mostrar = document.getElementById('mostrar');

mostrar.onclick = () => {
    let nombre = input.value;
    const p = document.createElement('p');
    
    p.innerHTML = `Hola ${nombre}, bienvenida a la clase de JavaScript\!`;
    document.body.appendChild(p);

    input.value = "";    
    input.focus();
}