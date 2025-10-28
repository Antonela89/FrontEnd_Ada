// CAPTURA DE NODOS Y CONSTANTES
const LOCAL_STORAGE_KEY = 'tareas';

// Nodos de la app principal
const formulario = document.getElementById('formulario');
const inputTarea = document.getElementById('tarea');
const selectCategoria = document.getElementById('categoria');
const listaTareas = document.getElementById('lista-tareas');
const btnBorrar = document.getElementById('borrar-todo');

// NUEVOS NODOS: Sidebar y Modal
const listaFiltros = document.getElementById('lista-filtros');
const modalBackdrop = document.getElementById('modal-backdrop');
const modal = document.getElementById('modal');
const modalTitulo = document.getElementById('modal-titulo');
const modalMensaje = document.getElementById('modal-mensaje');
const btnModalConfirmar = document.getElementById('modal-confirmar');
const btnModalCancelar = document.getElementById('modal-cancelar');


// ESTADO DE LA APLICACIÓN

let listadoTareas = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
// Variable de estado para el filtro actual.
let filtroActual = 'Todas'; 
// Variable para guardar la función a ejecutar al confirmar el modal.
let confirmacionCallback = null;

// LÓGICA DE DATOS 

function guardarTareas() {
	localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(listadoTareas));
}

function agregarTarea(texto, categoria) {
    const nuevaTarea = { id: Date.now(), texto, categoria, estaCompleta: false };
    listadoTareas.push(nuevaTarea);
    actualizarYRenderizar();
}

function eliminarTarea(id) {
	id = Number(id);
	listadoTareas = listadoTareas.filter(tarea => tarea.id !== id);
	actualizarYRenderizar();
}

function completarTarea(id) {
	id = Number(id);
	listadoTareas = listadoTareas.map(t => t.id === id ? { ...t, estaCompleta: !t.estaCompleta } : t);
	actualizarYRenderizar();
}

function borrarTodo() {
    listadoTareas = [];
    actualizarYRenderizar();
}

// LÓGICA DEL MODAL

function showModal(titulo, mensaje, callback) {
    modalTitulo.textContent = titulo;
    modalMensaje.textContent = mensaje;
    confirmacionCallback = callback; // Guardo la función que se debe ejecutar.
    
    // Si no hay callback, es un simple aviso, así que oculto el botón de cancelar.
    btnModalCancelar.style.display = callback ? 'inline-block' : 'none';
    btnModalConfirmar.textContent = callback ? 'Confirmar' : 'Aceptar';

    modalBackdrop.classList.add('active');
}

function hideModal() {
    modalBackdrop.classList.remove('active');
    confirmacionCallback = null; // Limpio el callback.
}


// RENDERIZADO Y MANEJO DEL DOM
function mostrarTareas(tareasAMostrar) {
	listaTareas.innerHTML = '';
    
    if (tareasAMostrar.length === 0) {
        listaTareas.innerHTML = '<p class="lista-vacia">No hay tareas para mostrar en esta categoría.</p>';
        return;
    }

	tareasAMostrar.forEach((tarea) => {
		const articleTarea = document.createElement('article');
        articleTarea.classList.add('tarea-item');
        if (tarea.estaCompleta) {
            articleTarea.classList.add('completada');
        }

		// Añado los atributos ARIA para los botones de acción.
		articleTarea.innerHTML = `
            <p>${tarea.texto} - <strong>${tarea.categoria}</strong></p>
            <div class="acciones">
                <button class="completar" data-id="${tarea.id}" aria-label="Completar tarea ${tarea.texto}" title="Completar tarea ${tarea.texto}">✔</button>
                <button class="eliminar" data-id="${tarea.id}" aria-label="Eliminar tarea ${tarea.texto}" title="Eliminar tarea ${tarea.texto}">✖</button>
            </div>
        `;
		listaTareas.appendChild(articleTarea);
	});
}

// FUNCIÓN "MAESTRA" para renderizar
function renderizarVista() {
    // Filtrar las tareas según el estado `filtroActual`.
    const tareasParaMostrar = filtroActual === 'Todas'
        ? listadoTareas
        : listadoTareas.filter(t => t.categoria === filtroActual);
    
    // Llamar a la función que dibuja las tareas.
    mostrarTareas(tareasParaMostrar);

    // Actualizar la clase 'active' en el sidebar.
    document.querySelectorAll('.sidebar-link').forEach(link => {
        if (link.dataset.categoria === filtroActual) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

function actualizarYRenderizar() {
    guardarTareas();
    renderizarVista();
}


// MANEJO DE EVENTOS

formulario.addEventListener('submit', (event) => {
	event.preventDefault();
	const tareaTexto = inputTarea.value.trim();
	const categoria = selectCategoria.value;

	if (tareaTexto === '') {
        // REEMPLAZO alert() con mi nuevo modal. Como no hay confirmación, no paso callback.
		showModal('Error de validación', 'La tarea no puede estar vacía.');
		return;
	}

	agregarTarea(tareaTexto, categoria);
    formulario.reset();
    inputTarea.focus();
});

listaTareas.addEventListener('click', (event) => {
    const target = event.target;
    if (target.classList.contains('eliminar')) {
        const id = target.dataset.id;
        showModal('Confirmar eliminación', '¿Estás seguro de que quieres eliminar esta tarea?', () => {
            eliminarTarea(id);
        });
    }
    
    if (target.classList.contains('completar')) {
        const id = target.dataset.id;
        completarTarea(id);
    }
});

btnBorrar.addEventListener('click', () => {
    // REEMPLAZO confirm() con mi nuevo modal.
    if (listadoTareas.length > 0) {
        showModal('Borrar todo', '¿Estás seguro de que quieres borrar TODAS las tareas? Esta acción no se puede deshacer.', () => {
            borrarTodo();
        });
    } else {
        showModal('Información', 'No hay tareas para borrar.');
    }
});

// Event listener para los filtros del sidebar (delegación de eventos).
listaFiltros.addEventListener('click', (event) => {
    event.preventDefault();
    if (event.target.matches('.sidebar-link')) {
        filtroActual = event.target.dataset.categoria;
        renderizarVista();
    }
});

// Event listeners para los botones del modal.
btnModalConfirmar.addEventListener('click', () => {
    if (confirmacionCallback) {
        confirmacionCallback(); // Ejecuto la función que guardé.
    }
    hideModal();
});

btnModalCancelar.addEventListener('click', hideModal);
modalBackdrop.addEventListener('click', (event) => {
    // Cierro el modal si se hace clic fuera de la ventana.
    if (event.target === modalBackdrop) {
        hideModal();
    }
});


// INICIALIZACIÓN DE LA APLICACIÓN

document.addEventListener('DOMContentLoaded', renderizarVista);