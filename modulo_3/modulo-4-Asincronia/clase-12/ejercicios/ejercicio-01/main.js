// captura de boton
const $btn = document.getElementById('btn');

// boton escucha evento click
$btn.addEventListener('click', () => {
	//limpieza de consola
	console.clear();

	// Síncrono
	console.log(`Inicio (1-Síncrono)`);

	// Asíncrono
    // se va a la Web API y luego a la cola de tareas
	setTimeout(() => {
		console.log('Timeout (2-Asíncrono)');
		alert('¡Revisa la consola! El timeout se ejecutó al final.');
	},0);

    // Síncrono
    console.log(`Fin (3-Síncrono)`);
});
