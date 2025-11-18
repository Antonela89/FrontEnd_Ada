### Ejercicios de Desestructuración

#### Ejercicio 1: Desestructuración de Arrays
Extrae el primer y el tercer hobby del siguiente array en dos variables llamadas `hobbyUno` y `hobbyTres`.

```javascript
const hobbies = ["Leer", "Correr", "Cocinar", "Ver series"];

// Tu código aquí


console.log(hobbyUno); // Debería imprimir: "Leer"
console.log(hobbyTres); // Debería imprimir: "Cocinar"
```

#### Ejercicio 2: Desestructuración de Objetos
Extrae el `titulo` y el `autor` del siguiente objeto en variables con los mismos nombres.

```javascript
const libro = {
  titulo: "Cien años de soledad",
  autor: "Gabriel García Márquez",
  año: 1967
};

// Tu código aquí


console.log(titulo); // Debería imprimir: "Cien años de soledad"
console.log(autor); // Debería imprimir: "Gabriel García Márquez"
```

#### Ejercicio 3: Desestructuración con Renombramiento y Valores por Defecto
Extrae la propiedad `nombre` como `nombreMascota` y la propiedad `raza` del siguiente objeto. Si la raza no existe, asígnale el valor "Mestizo".

```javascript
const mascota = {
  nombre: "Fido",
  edad: 5
};

// Tu código aquí


console.log(nombreMascota); // Debería imprimir: "Fido"
console.log(raza); // Debería imprimir: "Mestizo"
```

#### Ejercicio 4: Desestructuración Anidada
Del siguiente objeto `estudiante`, extrae su `nombre` y la `materiaPrincipal` que se encuentra dentro de `curso`.

```javascript
const estudiante = {
  nombre: "Laura",
  edad: 22,
  curso: {
    nombreCurso: "Desarrollo Web",
    materiaPrincipal: "JavaScript"
  }
};

// Tu código aquí


console.log(nombre); // Debería imprimir: "Laura"
console.log(materiaPrincipal); // Debería imprimir: "JavaScript"
```

---

### Ejercicios con Operador de Propagación (Spread)

#### Ejercicio 5: Combinar Arrays
Crea un nuevo array llamado `comprasCompletas` que combine `frutas` y `verduras`.

```javascript
const frutas = ["manzana", "plátano", "fresa"];
const verduras = ["brócoli", "zanahoria", "espinaca"];

// Tu código aquí


console.log(comprasCompletas); // Debería imprimir: ["manzana", "plátano", "fresa", "brócoli", "zanahoria", "espinaca"]
```

#### Ejercicio 6: Copiar y Modificar Objetos (Inmutabilidad)
Crea un nuevo objeto `usuarioActualizado` que sea una copia del `usuarioOriginal` pero con la `ciudad` cambiada a "Barcelona". El objeto original no debe ser modificado.

```javascript
const usuarioOriginal = {
  nombre: "Carlos",
  edad: 30,
  ciudad: "Madrid"
};

// Tu código aquí


console.log(usuarioActualizado); // Debería imprimir: { nombre: 'Carlos', edad: 30, ciudad: 'Barcelona' }
console.log(usuarioOriginal); // Debería imprimir: { nombre: 'Carlos', edad: 30, ciudad: 'Madrid' }
```

---

### Ejercicios con Parámetros Rest

#### Ejercicio 7: Función con Parámetros Rest
Crea una función llamada `multiplicar` que acepte cualquier número de argumentos y devuelva el resultado de multiplicarlos todos entre sí.

```javascript
// Tu código aquí


console.log(multiplicar(1, 2, 3, 4)); // Debería imprimir: 24
console.log(multiplicar(5, 10)); // Debería imprimir: 50
console.log(multiplicar(2, 2, 2)); // Debería imprimir: 8
```

---

### Ejercicios de Copia Superficial vs. Profunda

#### Ejercicio 8: Problema con Copia Superficial
Analiza el siguiente código. ¿Por qué se modifica el `equipo1`? ¿Cómo lo solucionarías para que `equipo1` no se vea afectado (creando una copia profunda)?

```javascript
const equipo1 = {
  nombre: "Equipo Alfa",
  lider: {
    nombre: "Juan"
  }
};

// Intento de copia
const equipo2 = { ...equipo1 };

// Modificación
equipo2.lider.nombre = "Pedro";

// El original se modifica ¡Esto es un problema!
console.log(equipo1.lider.nombre); // Imprime "Pedro", pero debería ser "Juan"

// Tu solución para crear una copia profunda (deep copy)
// const equipoCopiaProfunda = ...

// Modifica la copia profunda
// ...

// console.log(equipo1.lider.nombre); // Ahora sí debería imprimir "Juan"
```

---

### Soluciones

<details>
<summary><strong>Ver Solución Ejercicio 1</strong></summary>

```javascript
const hobbies = ["Leer", "Correr", "Cocinar", "Ver series"];

const [hobbyUno, , hobbyTres] = hobbies;

console.log(hobbyUno); // "Leer"
console.log(hobbyTres); // "Cocinar"
```
</details>

<details>
<summary><strong>Ver Solución Ejercicio 2</strong></summary>

```javascript
const libro = {
  titulo: "Cien años de soledad",
  autor: "Gabriel García Márquez",
  año: 1967
};

const { titulo, autor } = libro;

console.log(titulo); // "Cien años de soledad"
console.log(autor); // "Gabriel García Márquez"
```
</details>

<details>
<summary><strong>Ver Solución Ejercicio 3</strong></summary>

```javascript
const mascota = {
  nombre: "Fido",
  edad: 5
};

const { nombre: nombreMascota, raza = "Mestizo" } = mascota;

console.log(nombreMascota); // "Fido"
console.log(raza); // "Mestizo"
```
</details>

<details>
<summary><strong>Ver Solución Ejercicio 4</strong></summary>

```javascript
const estudiante = {
  nombre: "Laura",
  edad: 22,
  curso: {
    nombreCurso: "Desarrollo Web",
    materiaPrincipal: "JavaScript"
  }
};

const { nombre, curso: { materiaPrincipal } } = estudiante;

console.log(nombre); // "Laura"
console.log(materiaPrincipal); // "JavaScript"
```
</details>

<details>
<summary><strong>Ver Solución Ejercicio 5</strong></summary>

```javascript
const frutas = ["manzana", "plátano", "fresa"];
const verduras = ["brócoli", "zanahoria", "espinaca"];

const comprasCompletas = [...frutas, ...verduras];

console.log(comprasCompletas); // ["manzana", "plátano", "fresa", "brócoli", "zanahoria", "espinaca"]
```
</details>

<details>
<summary><strong>Ver Solución Ejercicio 6</strong></summary>

```javascript
const usuarioOriginal = {
  nombre: "Carlos",
  edad: 30,
  ciudad: "Madrid"
};

const usuarioActualizado = {
  ...usuarioOriginal,
  ciudad: "Barcelona"
};

console.log(usuarioActualizado); // { nombre: 'Carlos', edad: 30, ciudad: 'Barcelona' }
console.log(usuarioOriginal); // { nombre: 'Carlos', edad: 30, ciudad: 'Madrid' }
```</details>

<details>
<summary><strong>Ver Solución Ejercicio 7</strong></summary>

```javascript
function multiplicar(...numeros) {
  return numeros.reduce((producto, num) => producto * num, 1);
}

console.log(multiplicar(1, 2, 3, 4)); // 24
console.log(multiplicar(5, 10)); // 50
console.log(multiplicar(2, 2, 2)); // 8
```
</details>

<details>
<summary><strong>Ver Solución Ejercicio 8</strong></summary>

<p>
El objeto anidado <code>lider</code> se copia por referencia en una copia superficial. La solución es usar <code>JSON.parse(JSON.stringify())</code> para crear una copia profunda.
</p>

```javascript
const equipo1 = {
  nombre: "Equipo Alfa",
  lider: {
    nombre: "Juan"
  }
};

// Solución: Crear una copia profunda
const equipoCopiaProfunda = JSON.parse(JSON.stringify(equipo1));

// Modificar la copia
equipoCopiaProfunda.lider.nombre = "Pedro";

console.log("Original:", equipo1.lider.nombre); // Imprime "Juan" (¡Correcto!)
console.log("Copia:", equipoCopiaProfunda.lider.nombre); // Imprime "Pedro"
```
</details>