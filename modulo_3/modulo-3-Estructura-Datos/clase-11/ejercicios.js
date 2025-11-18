// ## Ejercicios de Desestructuración

// #### Ejercicio 1: Desestructuración de Arrays
// Extrae el primer y el tercer hobby del siguiente array en dos variables llamadas `hobbyUno` y `hobbyTres`.

console.log(`Ejercicio 01:`);
const hobbies = ['Leer', 'Correr', 'Cocinar', 'Ver series'];

// Tu código aquí
const [hobbyUno, , hobbyTres] = hobbies;

console.log(hobbyUno); // Debería imprimir: "Leer"
console.log(hobbyTres); // Debería imprimir: "Cocinar"

//---------------------------------------------------------------------------------------------

// #### Ejercicio 2: Desestructuración de Objetos
// Extrae el `titulo` y el `autor` del siguiente objeto en variables con los mismos nombres.

console.log(`Ejercicio 02:`);
const libro = {
	titulo: 'Cien años de soledad',
	autor: 'Gabriel García Márquez',
	año: 1967,
};

// Tu código aquí
const { titulo, autor } = libro;

console.log(titulo); // Debería imprimir: "Cien años de soledad"
console.log(autor); // Debería imprimir: "Gabriel García Márquez"

//---------------------------------------------------------------------------------------------

// #### Ejercicio 3: Desestructuración con Renombramiento y Valores por Defecto
// Extrae la propiedad `nombre` como `nombreMascota` y la propiedad `raza` del siguiente objeto. Si la raza no existe, asígnale el valor "Mestizo".

console.log(`Ejercicio 03:`);
const mascota = {
	nombre: 'Fido',
	edad: 5,
};

// Tu código aquí
const { nombre: nombreMascota, raza = 'Mestizo' } = mascota;

console.log(nombreMascota); // Debería imprimir: "Fido"
console.log(raza); // Debería imprimir: "Mestizo"

//---------------------------------------------------------------------------------------------

// #### Ejercicio 4: Desestructuración Anidada
// Del siguiente objeto `estudiante`, extrae su `nombre` y la `materiaPrincipal` que se encuentra dentro de `curso`.

console.log(`Ejercicio 04:`);
const estudiante = {
	nombre: 'Laura',
	edad: 22,
	curso: {
		nombreCurso: 'Desarrollo Web',
		materiaPrincipal: 'JavaScript',
	},
};

// Tu código aquí
const {nombre, curso:{materiaPrincipal}} = estudiante;

console.log(nombre); // Debería imprimir: "Laura"
console.log(materiaPrincipal); // Debería imprimir: "JavaScript"

//---------------------------------------------------------------------------------------------

// ## Ejercicios con Operador de Propagación (Spread)

// #### Ejercicio 5: Combinar Arrays
// Crea un nuevo array llamado `comprasCompletas` que combine `frutas` y `verduras`.

console.log(`Ejercicio 05:`);
const frutas = ['manzana', 'plátano', 'fresa'];
const verduras = ['brócoli', 'zanahoria', 'espinaca'];

// Tu código aquí
const comprasCompletas = [...frutas, ...verduras];

console.log(comprasCompletas); // Debería imprimir: ["manzana", "plátano", "fresa", "brócoli", "zanahoria", "espinaca"]

//---------------------------------------------------------------------------------------------

// #### Ejercicio 6: Copiar y Modificar Objetos (Inmutabilidad)
// Crea un nuevo objeto `usuarioActualizado` que sea una copia del `usuarioOriginal` pero con la `ciudad` cambiada a "Barcelona". El objeto original no debe ser modificado.

console.log(`Ejercicio 06:`);
const usuarioOriginal = {
	nombre: 'Carlos',
	edad: 30,
	ciudad: 'Madrid',
};

// Tu código aquí
const usuarioActualizado = {...usuarioOriginal};
usuarioActualizado.ciudad = 'Barcelona';

console.log(usuarioActualizado); // Debería imprimir: { nombre: 'Carlos', edad: 30, ciudad: 'Barcelona' }
console.log(usuarioOriginal); // Debería imprimir: { nombre: 'Carlos', edad: 30, ciudad: 'Madrid' }

//---------------------------------------------------------------------------------------------

// ## Ejercicios con Parámetros Rest

// #### Ejercicio 7: Función con Parámetros Rest
// Crea una función llamada `multiplicar` que acepte cualquier número de argumentos y devuelva el resultado de multiplicarlos todos entre sí.

console.log(`Ejercicio 07:`);
// Tu código aquí
function multiplicar(...numeros) {
    return numeros.reduce((acumulador, numero) => acumulador *= numero, 1)
}

console.log(multiplicar(1, 2, 3, 4)); // Debería imprimir: 24
console.log(multiplicar(5, 10)); // Debería imprimir: 50    
console.log(multiplicar(2, 2, 2)); // Debería imprimir: 8

//---------------------------------------------------------------------------------------------

// ## Ejercicios de Copia Superficial vs. Profunda

// #### Ejercicio 8: Problema con Copia Superficial
// Analiza el siguiente código. ¿Por qué se modifica el `equipo1`? ¿Cómo lo solucionarías para que `equipo1` no se vea afectado (creando una copia profunda)?

console.log(`Ejercicio 08:`);
const equipo1 = {
	nombre: 'Equipo Alfa',
	lider: {
		nombre: 'Juan',
	},
};

// Intento de copia
// const equipo2 = { ...equipo1 };

// Modificación
// equipo2.lider.nombre = 'Pedro';

// El original se modifica ¡Esto es un problema!
//console.log(equipo1.lider.nombre); // Imprime "Pedro", pero debería ser "Juan"

// Tu solución para crear una copia profunda (deep copy)
const equipoCopiaProfunda = JSON.parse(JSON.stringify(equipo1));

// Modifica la copia profunda
equipoCopiaProfunda.lider.nombre = 'Pedro';

console.log(`Lider Equipo1: ${equipo1.lider.nombre}`); // Ahora sí debería imprimir "Juan"
console.log(`Lider Equipo con Copia Profunda: ${equipoCopiaProfunda.lider.nombre}`)