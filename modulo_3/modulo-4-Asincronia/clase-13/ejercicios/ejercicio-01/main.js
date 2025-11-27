async function peticion() {
	try {
		const respuesta = await fetch('https://api.ejemplo-sin-cors.com/data');

		if (!respuesta.ok) throw new Error('Error en la petición');

		const data = await respuesta.json();

		console.log(data);
	} catch (error) {
		console.error('Hubo un error:', error);
	}
}

peticion();


// 1. El mensaje de error que aparece

// Al inspeccionar la consola del navegador (Firefox en este caso), el mensaje principal de error es:

// "Pedido de origen cruzado bloqueado: La política de mismo origen no permite leer el recurso remoto en https://api.ejemplo-sin-cors.com/data."

// Además, el bloque try/catch capturó el resultado de ese bloqueo y mostró:

// "Hubo un error: TypeError: NetworkError when attempting to fetch resource."

// 2. Qué parte del error indica que es un problema de CORS

// El inicio del mensaje de error: "Pedido de origen cruzado bloqueado" (en inglés suele decir Cross-Origin Request Blocked).

// La razón específica entre paréntesis: "(Razón: El pedido CORS falló)".

// 3. Explicación y Solución

// ¿Por qué ocurre esto?
// Esto sucede por una medida de seguridad de los navegadores llamada Política de Mismo Origen (Same-Origin Policy).
// El navegador detecta que se intenta pedir datos desde un "origen" (http://127.0.0.1:5500, servidor local) hacia un "origen" diferente (https://api.ejemplo-sin-cors.com).

// Como el servidor no envió las "credenciales" o cabeceras necesarias autorizando a la página a leer esa información, el navegador bloquea la respuesta para proteger al usuario (evitando que sitios maliciosos lean datos de otros sitios donde el usuario pueda estar logueado).

// ¿Qué se necesitaría para solucionarlo? (Sin código)
// Para que esto funcione legalmente en un entorno real, se necesita una de estas dos cosas:

// Configurar el Servidor (API): El dueño de la API (api.ejemplo-sin-cors.com) debe configurar su servidor para que envíe una cabecera de respuesta específica llamada Access-Control-Allow-Origin. Esta cabecera debe contener el dominio (http://127.0.0.1:5500) o un asterisco (*) para permitir el acceso a todo el mundo.

// Usar un Proxy: Si no se tiene control sobre el servidor de la API, se debe hacer la petición a través de un servidor intermedio (un backend propio) que no tiene restricciones de CORS, y que ese servidor pase los datos a la página.