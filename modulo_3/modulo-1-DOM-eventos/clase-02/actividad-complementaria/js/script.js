// ---- SELECCIÓN DE ELEMENTOS ----
// Aquí guardamos en variables los elementos del HTML que vamos a necesitar.

// El botón para publicar el mensaje.
const boton = document.getElementById('publicarBtn');
// El campo de texto donde el usuario escribe.
const input = document.getElementById('mensaje');
// El contenedor donde se mostrarán todos los mensajes.
const feed = document.getElementById('feed');


// ---- EVENTO PRINCIPAL ----
// Le decimos al botón que esté atento a cuando alguien le haga clic.
// Cuando eso pase, se ejecutará todo el código que está dentro de esta función.
boton.onclick = () => {

    // Primero, revisamos si el usuario de verdad escribió algo.
    // .trim() le quita los espacios en blanco del principio y del final.
    if (input.value.trim() === "") {
        // Si no escribió nada, le mostramos una alerta para que lo haga.
        alert("⚠️ Por favor, escribí un mensaje antes de publicar.");
        // Con 'return' cortamos la ejecución para que no siga haciendo nada más.
        return;
    }

    // ---- CREACIÓN DE LA PUBLICACIÓN ----

    // Creamos un nuevo elemento <article> en la memoria del navegador.
    // Este será el contenedor de nuestro nuevo mensaje.
    const publicacion = document.createElement("article");

    // Le agregamos una clase CSS.
    publicacion.classList.add("publicacion");

    // Creamos un objeto 'Date' para saber la hora y fecha actual.
    const ahora = new Date();

    // Usamos 'innerHTML' para meter el contenido HTML dentro de nuestro <article>.
    // Las comillas invertidas (``) backtrick -> template o plantilla
    publicacion.innerHTML = `
        <p>${input.value}</p>
        <p class="fecha">🕓 Publicado el ${ahora.toLocaleTimeString()}</p>
    `;

    // ---- ACTUALIZACIÓN DEL FEED ----
    // Agregamos la nueva publicación que creamos al final del contenedor 'feed'.
    feed.appendChild(publicacion);

    // ---- LIMPIEZA Y ENFOQUE ----

    // Dejamos el campo de texto vacío para que el usuario pueda escribir otro mensaje.
    input.value = "";

    // Hacemos que el cursor vuelva a aparecer en el campo de texto automáticamente.
    input.focus();


    // ---- GUARDADO EN LOCAL STORAGE ----
    // Queremos que los mensajes no se borren si recargamos la página.
    // Para eso, los guardamos en el Local Storage del navegador.

    // Creamos un array (una lista) vacío para guardar todos los mensajes.
    let historial = [];
    // Buscamos todos los mensajes que ya están en el feed y los guardamos en una lista.
    const mensajes = document.querySelectorAll('.publicacion');

    // Recorremos la lista de mensajes uno por uno.
    mensajes.forEach((element, index) => {
        // Por cada mensaje, creamos un objeto con su información importante.
        const objetoMensaje = {
            id: index, // Le damos un ID según su posición.
            contenido: element.children[0].innerHTML, // Sacamos el texto del mensaje.
            fecha: element.children[1].innerHTML // Sacamos el texto de la fecha.
        }
        // Agregamos este objeto a nuestra lista 'historial'.
        historial.push(objetoMensaje)
    });

    // Local Storage solo puede guardar texto, no objetos ni arrays.
    // Así que usamos JSON.stringify para convertir nuestra lista en un string (texto plano).
    localStorage.setItem('historial', JSON.stringify(historial));
};


// ---- CARGA DEL HISTORIAL AL INICIAR ----
// Este código se ejecuta apenas carga la página.
// Sirve para recuperar los mensajes que guardamos antes.

// Buscamos en el Local Storage si hay algo guardado con la clave 'historial'.
let historialRecuperado = localStorage.getItem('historial');

// Comprobamos si de verdad encontramos algo.
if (historialRecuperado) {
    // Si hay algo, lo volvemos a convertir de string a un array de objetos con JSON.parse.
    const data = JSON.parse(historialRecuperado);

    // Ahora, recorremos el array de mensajes recuperados.
    data.forEach(element => {
        // Para cada mensaje guardado, hacemos lo mismo que cuando creamos uno nuevo:

        // 1. Creamos el elemento <article>.
        const publicacion = document.createElement("article");
        // 2. Le ponemos su clase CSS.
        publicacion.classList.add("publicacion");
        // 3. Le metemos el contenido y la fecha que recuperamos.
        publicacion.innerHTML = `
            <p>${element.contenido}</p>
            <p class="fecha">${element.fecha}</p>
        `;
        // 4. Lo agregamos al feed para que se vea en la pantalla.
        feed.appendChild(publicacion);
    })
} else {
    // Si no encontramos nada en el Local Storage, es la primera visita o se borró el historial.
    // Le avisamos al usuario que puede ser el primero en escribir.
    alert("No hay mensajes en el historial... Sé el primero en escribir");
}