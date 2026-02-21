export const reactQuiz = [
	{
		id: 1,
		pregunta: '¿Qué es React?',
		opciones: [
			'Un framework de CSS',
			'Una biblioteca de JavaScript para construir interfaces de usuario',
			'Un motor de base de datos NoSQL',
			'Un lenguaje de programación derivado de Java',
		],
		respuestaCorrecta: 1,
	},
	{
		id: 2,
		pregunta: '¿Qué es JSX?',
		opciones: [
			'Una extensión de sintaxis para JS que permite escribir estructuras tipo HTML',
			'Un gestor de paquetes similar a NPM',
			'Una herramienta de depuración para el navegador',
			'El motor que permite el renderizado en el servidor (SSR)',
		],
		respuestaCorrecta: 0,
	},
	{
		id: 3,
		pregunta: '¿Cuál es la función principal del Virtual DOM?',
		opciones: [
			'Sustituir por completo al DOM real para hacerlo más rápido',
			'Almacenar las contraseñas de los usuarios de forma segura',
			'Actualizar solo las partes del DOM real que han cambiado, mejorando el rendimiento',
			'Renderizar la aplicación en dispositivos móviles',
		],
		respuestaCorrecta: 2,
	},
	{
		id: 4,
		pregunta: "¿Cuál es la principal diferencia entre 'props' y 'state'?",
		opciones: [
			'Props son internos al componente y State se pasa de padre a hijo',
			'Props son inmutables para el componente que las recibe; State es mutable y gestionado internamente',
			'No hay diferencia, son dos nombres para el mismo concepto',
			'State solo se usa en componentes de clase y Props en funcionales',
		],
		respuestaCorrecta: 1,
	},
	{
		id: 5,
		pregunta:
			'¿Qué Hook se utiliza para manejar efectos secundarios como llamadas a APIs o suscripciones?',
		opciones: ['useState', 'useContext', 'useMemo', 'useEffect'],
		respuestaCorrecta: 3,
	},
	{
		id: 6,
		pregunta: "¿Cuál de las siguientes es una 'Regla de Oro' de los Hooks?",
		opciones: [
			'Se pueden llamar dentro de condicionales (if/else)',
			'Solo se deben llamar en el nivel superior (top level) del componente',
			"Deben llamarse siempre dentro de un bucle 'for'",
			'Se pueden usar en funciones normales de JS fuera de React',
		],
		respuestaCorrecta: 1,
	},
	{
		id: 7,
		pregunta:
			"¿Para qué sirve el atributo 'key' cuando renderizamos listas en React?",
		opciones: [
			'Para aplicar estilos CSS específicos a cada elemento',
			'Para que React identifique qué elementos han cambiado, se han añadido o eliminado',
			'Para cifrar los datos que se muestran en la pantalla',
			'Es un requisito obligatorio de HTML, no de React',
		],
		respuestaCorrecta: 1,
	},
	{
		id: 8,
		pregunta: "¿Qué devuelve la función 'useState'?",
		opciones: [
			'Un objeto con todo el estado del componente',
			'Solo el valor actual del estado',
			'Un array con el valor actual del estado y una función para actualizarlo',
			'Un número que indica cuántas veces se ha renderizado el componente',
		],
		respuestaCorrecta: 2,
	},
	{
		id: 9,
		pregunta:
			"En un 'Componente Controlado', ¿quién es la fuente de verdad de los datos del formulario?",
		opciones: [
			'El DOM del navegador',
			'El estado (state) del componente de React',
			'La base de datos directamente',
			'El servidor de archivos estáticos',
		],
		respuestaCorrecta: 1,
	},
	{
		id: 10,
		pregunta: "¿Cuál es el propósito principal de un 'Custom Hook'?",
		opciones: [
			'Reemplazar el uso de JSX en el componente',
			'Añadir estilos globales a la aplicación',
			'Reutilizar lógica de estado entre diferentes componentes',
			'Mejorar la conexión con bases de datos SQL',
		],
		respuestaCorrecta: 2,
	},
];
