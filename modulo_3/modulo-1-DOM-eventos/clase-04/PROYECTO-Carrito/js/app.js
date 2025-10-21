// --- Captura de Variables ---
const carrito = document.querySelector("#carrito");
const listaCursos = document.querySelector("#lista-cursos");
const contenedorCarrito = document.querySelector("#lista-carrito tbody");
const vaciarCarritoBtn = document.querySelector("#vaciar-carrito");

// Esta variable es el "carrito de compras". Es un array que guardará los cursos.
let articulosCarrito = [];

// Funciones
// Función auxiliar para lectura de datos
function leerDatosCurso(curso) {
  // Creamos un objeto con la información del curso
  const infoCurso = {
    imagen: curso.querySelector(".imagen-curso").src,
    titulo: curso.querySelector("h4").textContent,
    precio: curso.querySelector(".precio span").textContent,
    id: curso.querySelector(".agregar-carrito").getAttribute("data-id"),
    cantidad: 1,
  };

  // Revisa si un elemento ya existe en el carrito
  const existe = articulosCarrito.some((curso) => curso.id === infoCurso.id);
  if (existe) {
    // Actualizamos la cantidad
    const cursos = articulosCarrito.map((curso) => {
      if (curso.id === infoCurso.id) {
        curso.cantidad++;
        return curso; // retorna el objeto actualizado
      } else {
        return curso; // retorna los objetos que no son los duplicados
      }
    });
    articulosCarrito = [...cursos];
  } else {
    // Agrega elementos al arreglo de carrito
    articulosCarrito = [...articulosCarrito, infoCurso];
  }

  // Una vez que tenemos el objeto y actualizado el array, dibujamos el carrito
  carritoHTML();
}

const carritoHTML = () => {
  // Limpiar el HTML previo para no duplicar contenido
  limpiarHTML();

  // Recorre el array del carrito y genera el HTML
  articulosCarrito.forEach((curso) => {
    // Usamos destructuring para acceder más fácil a las propiedades del objeto
    const { imagen, titulo, precio, cantidad, id } = curso;

    const row = document.createElement("tr");
    row.innerHTML = `
        <td><img src="${imagen}" width="100"></td>
        <td>${titulo}</td>
        <td>${precio}</td>
        <td>
            <p class="cantidad-controls">
                <a href="#" class="restar-cantidad" data-id="${id}"> - </a>
                <span>${cantidad}</span>
                <a href="#" class="sumar-cantidad" data-id="${id}"> + </a>
            </p>
        </td>
        <td>
            <a href="#" class="borrar-curso" data-id="${id}"> X </a>
        </td>
    `;

    // Agrega el HTML de la fila en el tbody
    contenedorCarrito.appendChild(row);
  });
};

const limpiarHTML = () => {
  while (contenedorCarrito.firstChild) {
    contenedorCarrito.removeChild(contenedorCarrito.firstChild);
  }
};

//Función que se dispara al hacer clic en "Agregar Al Carrito". Identifica el curso y lo añade al array del carrito.
const agregarCurso = (e) => {
  // Prevenimos la acción por defecto (que el enlace navegue)
  e.preventDefault();

  // Nos aseguramos de que el clic sea en el botón "Agregar Al Carrito"
  if (e.target.classList.contains("agregar-carrito")) {
    // Usamos .closest para encontrar el contenedor principal de la card
    const cursoSeleccionado = e.target.closest(".card");

    // Leemos los datos de la card y los convertimos en un objeto
    leerDatosCurso(cursoSeleccionado);
  }
};

const gestionarCarrito = (e) => {
  e.preventDefault();

  // captura del id del curso
  const cursoId = e.target.getAttribute("data-id");

  // --- Acción: Aumentar cantidad (botón '+') ---
  if (e.target.classList.contains("sumar-cantidad")) {
    const cursos = articulosCarrito.map((curso) => {
      if (curso.id === cursoId) {
        curso.cantidad++;
        return curso; // Retorna el objeto con la cantidad actualizada
      } else {
        return curso; // Retorna los otros objetos sin cambios
      }
    });
    articulosCarrito = [...cursos];
  }

  // --- Acción: Disminuir cantidad (botón '-') ---
  if (e.target.classList.contains("restar-cantidad")) {
    const cursos = articulosCarrito.map((curso) => {
      if (curso.id === cursoId && curso.cantidad > 1) {
        curso.cantidad--;
        return curso;
      } else {
        return curso;
      }
    });
    articulosCarrito = [...cursos];
  }

  // --- Acción: Eliminar curso (botón 'X') ---
  if (e.target.classList.contains("borrar-curso")) {
    articulosCarrito = articulosCarrito.filter((curso) => curso.id !== cursoId);
  }

  // Volver a dibujar el carrito con los datos actualizados
  carritoHTML();
};

// --- Función Principal para Cargar Eventos ---
// Esta función centraliza todos los event listeners.
cargarEventListeners();
function cargarEventListeners() {
  // 1. Listener para "Agregar Al Carrito" (cuando hacemos clic en un curso)
  listaCursos.addEventListener("click", agregarCurso);

  // 2. Listener para eliminar un curso del carrito
  carrito.addEventListener("click", gestionarCarrito);

  // 3. Listener para vaciar todo el carrito
  vaciarCarritoBtn.addEventListener("click", () => {
    articulosCarrito = []; // Reseteamos el array
    limpiarHTML(); // Eliminamos todo el HTML
  });
}
