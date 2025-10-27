// Captura de nodos del DOM
const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const modalOverlay = document.getElementById('modalOverlay');

// Función para abrir el modal
function openModal() {
    modalOverlay.classList.add('show');
}

// Función para cerrar el modal
function closeModal() {
    modalOverlay.classList.remove('show');
}

// 1. Abrir el modal al hacer clic en el botón principal
openModalBtn.addEventListener('click', openModal);

// 2. Cerrar el modal al hacer clic en el botón de cierre (la 'X')
closeModalBtn.addEventListener('click', closeModal);

// 3. Cerrar el modal al hacer clic fuera de él (en el overlay)
modalOverlay.addEventListener('click', (e) => {
    // Si el elemento en el que se hizo clic (e.target) es el overlay mismo...
    if (e.target === modalOverlay) {
        closeModal();
    }
});

// 4. Cerrar el modal al presionar la tecla "Escape"
document.addEventListener('keydown', (e) => {
    // Si el modal está visible y la tecla presionada es 'Escape'
    if (modalOverlay.classList.contains('show') && e.key === 'Escape') {
        closeModal();
    }
});