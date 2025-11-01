export function initializeCanvas() {
	const canvas = document.getElementById('solarSystemCanvas');
	if (!canvas) return; // Salir si el canvas no existe

	const ctx = canvas.getContext('2d');
	let centerX, centerY;
	// Variable para controlar el ángulo de la animación
	let angle = 0;

	// --- DATOS DEL SISTEMA SOLAR ---
	// Distancias y radios no están a escala real, están ajustados para la visualización.
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

	// --- FUNCION PARA REDIMENSIONAMIENTO ---
	function resizeCanvas() {
		let parent = canvas.parentElement;
		canvas.width = parent.clientWidth;
		canvas.height = parent.clientHeight < 400 ? 400 : parent.clientHeight;

		// Recalcular el centro
		centerX = canvas.width / 2;
		centerY = canvas.height / 2;
	}

	// --- FUNCIONES DE DIBUJO ---

	function drawSun() {
		ctx.beginPath();
		ctx.arc(centerX, centerY, sun.radius, 0, 2 * Math.PI);
		ctx.fillStyle = sun.color;
		ctx.fill();
	}

	function drawOrbit(distance) {
		ctx.beginPath();
		ctx.arc(centerX, centerY, distance, 0, 2 * Math.PI);
		ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)'; // Color de la órbita
		ctx.stroke();
	}

	function drawPlanet(planet, currentAngle) {
		// Calcular la posición X e Y usando trigonometría
		const x = centerX + planet.distance * Math.cos(currentAngle);
		const y = centerY + planet.distance * Math.sin(currentAngle);

		ctx.beginPath();
		ctx.arc(x, y, planet.radius, 0, 2 * Math.PI);
		ctx.fillStyle = planet.color;
		ctx.fill();

		// anillos de saturno
		if (planet.name === 'Saturno') {
			ctx.beginPath();
			ctx.strokeStyle = 'rgba(255, 215, 0, 0.7)'; // Un color dorado semitransparente
			ctx.lineWidth = 2; // El grosor de los anillos
			// Dibuja una elipse alrededor del planeta
			ctx.ellipse(
				x,
				y,
				planet.radius + 10,
				planet.radius / 2,
				Math.PI / 8,
				0,
				2 * Math.PI
			);
			ctx.stroke(); // Usa stroke() para dibujar solo el contorno
		}

		// --- CÓDIGO PARA DIBUJAR EL NOMBRE ---
		ctx.fillStyle = 'white'; // Elige un color para el texto
		ctx.font = '12px Arial'; // Define la fuente y el tamaño
		// Dibuja el nombre del planeta con un pequeño desfase para que no quede encima
		ctx.fillText(planet.name, x + planet.radius + 5, y + 5);
	}

	// --- EL LOOP DE ANIMACIÓN ---

	function animate() {
		// 1. Limpiar el canvas en cada fotograma
		ctx.clearRect(0, 0, canvas.width, canvas.height);

		// 2. Dibujar el Sol
		drawSun();

		// 3. Dibujar cada planeta y su órbita
		planets.forEach((planet) => {
			drawOrbit(planet.distance);
			// Cada planeta tiene su propio ángulo basado en su velocidad
			const currentPlanetAngle = angle * planet.speed;
			drawPlanet(planet, currentPlanetAngle);
		});

		// 4. Actualizar el ángulo para el siguiente fotograma
		angle += 1;

		// 5. Llamar a la siguiente animación
		requestAnimationFrame(animate);
	}

	// Llama a las funciones iniciales
	window.addEventListener('resize', resizeCanvas);
	resizeCanvas();
	animate();
}
