// ==========================================================================
// MÓDULO: ANIMACIÓN DEL SISTEMA SOLAR EN CANVAS (solarSystem.js)
// ==========================================================================
//
// Da vida a una representación animada y simplificada del sistema solar.
// He decidido usar la API de Canvas 2D nativa del navegador
// porque es ideal para este tipo de animaciones basadas en fotogramas y me da
// un control total a nivel de píxeles, sin necesidad de librerías externas.
// La lógica está completamente encapsulada: desde los datos hasta el bucle de animación.

export function initializeCanvas() {
	const canvas = document.getElementById('solarSystemCanvas');
	if (!canvas) return;

	const ctx = canvas.getContext('2d'); // Mi "pincel" para dibujar en 2D.
	let centerX, centerY; // Los declaro aquí para que sean accesibles en todo el módulo.
	let angle = 0; // Esta variable de estado controlará el "tiempo" de mi animación.

	// --- DATOS Y CONFIGURACIÓN ---
	//
	// He definido los datos de los planetas directamente en este módulo.
	// A diferencia de otros componentes, estos datos son específicos para la visualización
	// (radios y distancias no a escala real, velocidades relativas) y no los necesito
	// en ninguna otra parte de la aplicación. Mantenerlos aquí simplifica la arquitectura.
	const sun = {
		name: 'Sol',
		radius: 30,
		color: 'yellow',
	};

	const planets = [
		{
			name: 'Mercurio',
			radius: 4,
			color: 'grey',
			distance: 60,
			speed: 0.04,
		},
		{
			name: 'Venus',
			radius: 8,
			color: 'orange',
			distance: 90,
			speed: 0.025,
		},
		{
			name: 'Tierra',
			radius: 9,
			color: 'dodgerblue',
			distance: 130,
			speed: 0.015,
		},
		{ name: 'Marte', radius: 6, color: 'red', distance: 170, speed: 0.01 },
		{
			name: 'Júpiter',
			radius: 18,
			color: 'sandybrown',
			distance: 230,
			speed: 0.005,
		},
		{
			name: 'Saturno',
			radius: 15,
			color: 'gold',
			distance: 290,
			speed: 0.003,
		},
		{
			name: 'Urano',
			radius: 12,
			color: 'lightblue',
			distance: 340,
			speed: 0.002,
		},
		{
			name: 'Neptuno',
			radius: 11,
			color: 'darkblue',
			distance: 380,
			speed: 0.001,
		},
	];

	// --- LÓGICA RESPONSIVA ---
	//
	// El canvas no es responsivo por defecto. He creado esta función 'resizeCanvas'
	// para que se ajuste al tamaño de su contenedor padre cada vez que la ventana cambie.
	// Esto es crucial para que la animación se vea bien en todos los dispositivos.
	function resizeCanvas() {
		let parent = canvas.parentElement;
		canvas.width = parent.clientWidth;
		canvas.height = parent.clientHeight < 400 ? 400 : parent.clientHeight;

		// Recalculo el centro del canvas cada vez que se redimensiona.
		centerX = canvas.width / 2;
		centerY = canvas.height / 2;
	}

	// --- FUNCIONES DE DIBUJO MODULARES ---
	//
	// He dividido la lógica de dibujo en funciones pequeñas y con una única responsabilidad.
	// Esto hace que mi bucle principal de animación ('animate') sea mucho más limpio y legible.

	function drawSun() {
		ctx.beginPath();
		ctx.arc(centerX, centerY, sun.radius, 0, 2 * Math.PI);
		ctx.fillStyle = sun.color;
		ctx.fill();
	}

	function drawOrbit(distance) {
		ctx.beginPath();
		ctx.arc(centerX, centerY, distance, 0, 2 * Math.PI);
		ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
		ctx.stroke();
	}

	function drawPlanet(planet, currentAngle) {
		// Esta es la matemática central de la animación orbital.
		// Utilizo trigonometría (coseno para la 'x', seno para la 'y') para convertir
		// coordenadas polares (distancia, ángulo) a coordenadas cartesianas (x, y).
		const x = centerX + planet.distance * Math.cos(currentAngle);
		const y = centerY + planet.distance * Math.sin(currentAngle);

		ctx.beginPath();
		ctx.arc(x, y, planet.radius, 0, 2 * Math.PI);
		ctx.fillStyle = planet.color;
		ctx.fill();

		// He añadido una lógica especial solo para Saturno para dibujar sus anillos.
		// Usar 'ctx.ellipse' es la forma correcta de dibujar una elipse en Canvas 2D.
		if (planet.name === 'Saturno') {
			ctx.beginPath();
			ctx.strokeStyle = 'rgba(255, 215, 0, 0.7)';
			ctx.lineWidth = 2;
			ctx.ellipse(
				x,
				y,
				planet.radius + 10,
				planet.radius / 2,
				Math.PI / 8,
				0,
				2 * Math.PI
			);
			ctx.stroke();
		}

		// También he decidido dibujar el nombre del planeta aquí, manteniendo toda la
		// lógica de renderizado de un planeta en un solo lugar.
		ctx.fillStyle = 'white';
		ctx.font = '12px Arial';
		ctx.fillText(planet.name, x + planet.radius + 5, y + 5);
	}

	// --- EL BUCLE DE ANIMACIÓN (GAME LOOP) ---
	//
	// 'animate' es el corazón de la animación. Es una función que se llama a sí misma
	// repetidamente, una vez por cada fotograma que el navegador puede renderizar.
	function animate() {
		// 'clearRect' es el primer paso y el más importante. Limpia todo el canvas,
		//  borrando el fotograma anterior para poder dibujar el nuevo.
		ctx.clearRect(0, 0, canvas.width, canvas.height);

		// Redibujo todos los elementos en su nueva posición.
		drawSun();
		planets.forEach((planet) => {
			drawOrbit(planet.distance);
			// La velocidad orbital diferente de cada planeta la consigo multiplicando
			// el 'angle' global por la 'speed' individual de cada planeta.
			const currentPlanetAngle = angle * planet.speed;
			drawPlanet(planet, currentPlanetAngle);
		});

		// Incremento mi variable de "tiempo" para el siguiente fotograma.
		angle += 0.01; 

		// 'requestAnimationFrame()' es la forma moderna y optimizada de crear bucles de animación.
		// Le pido al navegador que llame a 'animate' de nuevo en el próximo ciclo de repintado.
		requestAnimationFrame(animate);
	}

	// --- INICIALIZACIÓN ---
	//
	// Finalmente, configuro los listeners y hago las llamadas iniciales para poner todo en marcha.
	window.addEventListener('resize', debounce(resizeCanvas)); // Usar debounce es buena práctica.
	resizeCanvas(); // Hago la primera llamada para establecer el tamaño inicial.
	animate(); // Inicio el bucle de animación.
}

// Función helper debounce que podría mover a un archivo de utilidades si la usara en más módulos.
function debounce(func, delay = 100) {
	let timeoutId;
	return (...args) => {
		clearTimeout(timeoutId);
		timeoutId = setTimeout(() => func.apply(this, args), delay);
	};
}
