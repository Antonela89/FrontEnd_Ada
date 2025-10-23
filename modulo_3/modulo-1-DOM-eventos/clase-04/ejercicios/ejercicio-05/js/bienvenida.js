document.addEventListener('DOMContentLoaded', () => {
    const welcomeMessage = document.getElementById('welcomeMessage');

    // 1. Obtener la cadena de consulta de la URL (ej. "?nombre=Maria")
    const queryString = window.location.search;

    // 2. Usar URLSearchParams para parsear la cadena de consulta
    const params = new URLSearchParams(queryString);

    // 3. Extraer el valor del parámetro 'nombre'
    const nombreUsuario = params.get('nombre');

    // 4. Mostrar el mensaje de bienvenida
    if (nombreUsuario) {
        welcomeMessage.textContent = `¡Bienvenido, ${nombreUsuario}!`;
    } else {
        welcomeMessage.textContent = '¡Bienvenido! No se encontró tu nombre.';
    }
});