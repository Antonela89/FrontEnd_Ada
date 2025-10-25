// Seleccionamos el botón que actuará como disparador
const trigger = document.querySelector('.collapse-trigger');

// Añadimos un "escuchador de eventos" que reaccione al clic
trigger.addEventListener('click', function () {
	// 'this' se refiere al botón que fue presionado
	this.classList.toggle('active');

	// Seleccionamos el panel de contenido que es hermano del botón
	const content = this.nextElementSibling;

	// Comprobamos si el panel ya tiene una altura máxima establecida
	if (content.style.maxHeight) {
		// Si la tiene, la quitamos (lo que lo colapsa a 0 debido al CSS)
		content.style.maxHeight = null;
	} else {
		// Si no, le damos la altura necesaria para que se vea todo su contenido
		content.style.maxHeight = content.scrollHeight + 'px';
	}
});
