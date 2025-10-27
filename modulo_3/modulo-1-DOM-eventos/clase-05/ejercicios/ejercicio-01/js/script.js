document.addEventListener('DOMContentLoaded', () => {
	const preguntas = document.querySelectorAll('.question');

	preguntas.forEach((pregunta) => {
		pregunta.addEventListener('click', () => {
			const respuesta = pregunta.nextElementSibling; 

			 // Toggle 'show' class en el contenido
            respuesta.classList.toggle('show');
            // Toggle 'active' class en el header (para el +/-)
            pregunta.classList.toggle('active');

			// Cerrar otros acordeones si se abre uno nuevo
			preguntas.forEach((otrasPreguntas) => {
				if (otrasPreguntas !== pregunta) {
					const otrasRespuestas = otrasPreguntas.nextElementSibling;
					if (otrasRespuestas.classList.contains('show')) {
						otrasRespuestas.classList.remove('show');
						otrasPreguntas.classList.remove('active');
					}
				}
			});
		});
	});
});
