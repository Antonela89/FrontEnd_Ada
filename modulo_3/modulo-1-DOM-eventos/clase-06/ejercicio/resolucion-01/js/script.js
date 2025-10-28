// CAPTURA DE NODOS Y CONSTANTES
// Defino una constante para la clave del localStorage.
// Si algún día quiero cambiarla, solo lo hago en un lugar.
const LOCAL_STORAGE_KEY = 'tareas';

// Sigo capturando todos los nodos que necesito para mi aplicación.
const formulario = document.getElementById('formulario');
const inputTarea = document.getElementById('tarea');
const selectCategoria = document.getElementById('categoria');
const listaTareas = document.getElementById('lista-tareas');
const btnBorrar = document.getElementById('borrar-todo');

// ESTADO Y LÓGICA DE DATOS
// Esta es mi "única fuente de verdad". Todo lo que se muestre en la pantalla saldrá de este array.
// Lo inicializo desde localStorage, o como un array vacío si no hay nada.
let listadoTareas = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];

// Función para guardar el estado actual en localStorage. Ahora usa mi constante.
function guardarTareas() {
	localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(listadoTareas));
}

// Función para agregar una nueva tarea. Solo se encarga de la lógica de datos.
function agregarTarea(texto, categoria) {
    const nuevaTarea = {
        id: Date.now(),
        texto: texto,
        categoria: categoria,
        estaCompleta: false,
    };
    listadoTareas.push(nuevaTarea);

	// IMPORTANTE: Después de agregar, la vista se reinicia sin filtros.
    // Esto es un comportamiento deliberado para evitar confusión.
    window.location.href = window.location.pathname; // Recargo la página sin parámetros de URL.


    actualizarVistaYGuardar(); // Llamo a mi función central para actualizar todo.
}

// Función para eliminar una tarea. Solo modifica el array.
function eliminarTarea(id) {
	id = Number(id); // Convierto el ID (que viene como string desde data-id) a número.
	listadoTareas = listadoTareas.filter(tarea => tarea.id !== id);
	actualizarVistaYGuardar();
}

// Función para completar/descompletar una tarea. Solo modifica el array.
function completarTarea(id) {
	id = Number(id);
	listadoTareas = listadoTareas.map((tarea) =>
		tarea.id === id
			? { ...tarea, estaCompleta: !tarea.estaCompleta }
			: tarea
	);
	actualizarVistaYGuardar();
}

// Función para borrar TODAS las tareas.
function borrarTodo() {
    listadoTareas = [];
    actualizarVistaYGuardar();
}

// RENDERIZADO Y MANEJO DEL DOM
// Mi función principal para dibujar las tareas.
function mostrarTareas(tareasAMostrar) {
	// Limpio el contenido actual para no duplicar.
	listaTareas.innerHTML = '';
    
    // Agrego una mejora de UX: si no hay tareas, muestro un mensaje.
    if (tareasAMostrar.length === 0) {
        listaTareas.innerHTML = '<p class="lista-vacia">No tienes tareas pendientes. ¡Añade una!</p>';
        return; // Corto la ejecución aquí.
    }

	// Recorro el array
	tareasAMostrar.forEach((tarea) => {
		const articleTarea = document.createElement('article');
        articleTarea.classList.add('tarea-item');
        if (tarea.estaCompleta) {
            articleTarea.classList.add('completada');
        }

		// Uso atributos `data-id` y clases para manejar los eventos.
		articleTarea.innerHTML = `
            <p>${tarea.texto} - <strong><a href="?categoria=${tarea.categoria}">${tarea.categoria}</a></strong></p>
            <div class="acciones">
                <button class="completar" data-id="${tarea.id}">✔</button>
                <button class="eliminar" data-id="${tarea.id}">✖</button>
            </div>
        `;

		listaTareas.appendChild(articleTarea);
	});
}

// función centralizada. Es el "motor" que se asegura de que la UI y los datos estén sincronizados.
function actualizarVistaYGuardar() {
    guardarTareas();
    mostrarTareas(listadoTareas);
}


// MANEJO DE EVENTOS
// Evento para el envío del formulario.
formulario.addEventListener('submit', (event) => {
	event.preventDefault();

	const tareaTexto = inputTarea.value.trim();
	const categoria = selectCategoria.value;

	if (tareaTexto === '') {
        // Mejora de UX: en lugar de un alert(), podría mostrar un mensaje de error en el HTML.
        // Por ahora, mantengo el alert para simplicidad, pero este sería el siguiente paso.
		alert('La tarea no puede estar vacía');
		return;
	}

	agregarTarea(tareaTexto, categoria);

    // Limpio el formulario para que el usuario pueda agregar otra tarea fácilmente.
    formulario.reset();
    inputTarea.focus(); // Pongo el foco de nuevo en el input.
});

listaTareas.addEventListener('click', (event) => {
    // Verifico si el elemento clickeado tiene la clase 'eliminar'.
    if (event.target.classList.contains('eliminar')) {
        const id = event.target.dataset.id; // Obtengo el ID desde el atributo data-id.
        eliminarTarea(id);
    }
    
    // Verifico si el elemento clickeado tiene la clase 'completar'.
    if (event.target.classList.contains('completar')) {
        const id = event.target.dataset.id;
        completarTarea(id);
    }
});

// Evento para el botón de borrar todo.
btnBorrar.addEventListener('click', () => {
    // Mejora de UX: pido confirmación antes de una acción destructiva.
    if (confirm('¿Estás seguro de que quieres borrar TODAS las tareas?')) {
        borrarTodo();
    }
});


// INICIALIZACIÓN DE LA APLICACIÓN
// Esta es mi nueva función que se encarga de arrancar todo.
function inicializarApp() {
    // 1. Obtengo el parámetro de la URL.
    const parametro = new URLSearchParams(window.location.search);
    const categoriaFiltrada = parametro.get('categoria');

    // 2. Decido qué array usar para mostrar las tareas.
    // Uso un operador ternario: es una forma corta de escribir un if/else.
    const tareasParaMostrar = categoriaFiltrada
        ? listadoTareas.filter((tarea) => tarea.categoria === categoriaFiltrada) // Si hay filtro, uso el array filtrado.
        : listadoTareas; // Si no, uso el array completo.

    // 3. Llamo a la función de dibujado con el array que he decidido.
    mostrarTareas(tareasParaMostrar);
}

// Escucho al evento DOMContentLoaded para asegurarme de que todo el HTML está cargado antes de ejecutar mi script.
document.addEventListener('DOMContentLoaded', inicializarApp);