### **Módulo: Introductorio**

#### **Clase 1: Introducción a React**

*   **Librería vs Framework:** Se aclara esta diferencia fundamental. Un **Framework** (como Angular) te impone una estructura y reglas estrictas. Una **Librería** (como React) te da un conjunto de herramientas para resolver un problema específico (en este caso, construir interfaces de usuario), pero te da más libertad sobre cómo estructurar el resto de tu aplicación.
*   **React y ReactDOM:**
    *   **React:** Es el núcleo de la librería, responsable de la lógica para crear componentes y manejar su estado. Es agnóstico a la plataforma (puede usarse para web, móvil, etc.).
    *   **ReactDOM:** Es el "renderizador" que actúa como puente entre la lógica de React y el DOM del navegador web. Le dice a React cómo traducir los componentes en elementos HTML reales.
*   **Create React App:** Es una herramienta oficial que te permite crear un nuevo proyecto de React con una configuración optimizada y lista para usar, sin necesidad de configurar manualmente herramientas complejas como Webpack o Babel.
*   **Entorno de desarrollo (Node y NPM):** Se explica que, aunque el código final corre en el navegador, el desarrollo de React se hace en un entorno local que usa **Node.js** para correr un servidor de desarrollo y **NPM** (Node Package Manager) para instalar y gestionar las librerías necesarias (dependencias) como React.

#### **Clase 2: Entendiendo JSX y sus reglas**

*   **JSX y sintaxis:** JSX (JavaScript XML) es una extensión de la sintaxis de JavaScript que te permite escribir "HTML" directamente en tu código JavaScript. Esto hace que la creación de componentes sea mucho más visual e intuitiva que crear cada elemento del DOM manualmente.
*   **Reglas de JSX:**
    *   Todo componente debe devolver un único elemento raíz.
    *   Para agrupar elementos sin añadir un `<div>` innecesario al DOM, se usa `<React.Fragment>` o su sintaxis corta `<>...</>`.
    *   Los atributos HTML como `class` se escriben en camelCase en JSX: `className`.
*   **Cambios de contexto entre JSX y JS:** Para insertar una variable o ejecutar código JavaScript dentro de JSX, se usan las llaves `{}`. Por ejemplo: `<h1>Hola, {nombre}</h1>`.
*   **Imports y exports:** Se utiliza el sistema de módulos de JavaScript (ES6) para organizar el código. Cada componente vive en su propio archivo y se `export`a para poder ser `import`ado y utilizado en otros archivos.

#### **Clase 3: Props**

*   **Props (Propiedades):** Son la forma de pasar datos desde un componente padre a un componente hijo. Funcionan como los argumentos de una función. Las `props` son **de solo lectura**; un componente hijo nunca debe modificar las props que recibe.
*   **Desestructurando props:** Es una técnica de JavaScript para extraer valores del objeto `props` directamente en los parámetros de la función del componente, haciendo el código más limpio. En lugar de `(props)`, se usa `({ nombre, edad })`.
*   **Props con valores por default:** Permiten definir un valor predeterminado para una prop en caso de que el componente padre no la envíe.
*   **`prop.children`:** Es una prop especial que contiene todo lo que se escribe entre la etiqueta de apertura y cierre de un componente. Permite crear componentes "contenedores".

---

### **Módulo: Renderizado condicional**

#### **Clase 4 y 5: Renderizado condicional**

*   Es la técnica para mostrar u ocultar elementos de la interfaz basándose en ciertas condiciones o el estado de la aplicación.
*   **`if / else`:** Se puede usar lógica `if/else` tradicional fuera del JSX para decidir qué bloque de JSX devolver. Para no renderizar nada, se puede devolver `null`.
*   **Operador ternario:** `condicion ? <JSX si es verdadero> : <JSX si es falso>`. Es una forma concisa de implementar un `if/else` directamente dentro de JSX.
*   **Circuito corto con `&&`:** `condicion && <JSX>`. Es una forma aún más corta para mostrar un elemento solo si una condición es verdadera. Si es falsa, no se renderiza nada.
*   **Listas y la prop `key`:** Para renderizar una lista de elementos (ej: desde un array), se usa el método `.map()`. React requiere que cada elemento de la lista tenga una prop `key` única. Esta `key` ayuda a React a identificar qué elementos han cambiado, se han añadido o eliminado, optimizando el rendimiento de las actualizaciones.

---

### **Módulo: Estados**

#### **Clase 7: useState**

*   **Hooks:** Son funciones especiales que te permiten "engancharte" a las características de React desde componentes funcionales.
*   **Estado (`State`):** Es la memoria de un componente. Es un objeto de datos que pertenece al componente y que puede cambiar con el tiempo en respuesta a acciones del usuario. Cuando el estado cambia, React **re-renderiza** automáticamente el componente para reflejar los nuevos datos.
*   **Inmutabilidad:** Una regla fundamental en React. Nunca debes modificar el estado directamente. En su lugar, usas la función que te da `useState` para reemplazarlo con un nuevo valor.
*   **Hook `useState`:** Es el hook fundamental para añadir estado a un componente. Se llama así: `const [valorDelEstado, setValorDelEstado] = useState(valorInicial);`. Devuelve el valor actual del estado y una función para actualizarlo.
*   **Estado vs Props:** La diferencia clave: las **props** vienen de *fuera* (del padre) y son de solo lectura. El **estado** es gestionado *dentro* del componente y puede cambiar.
*   **Inputs controlados:** Es la práctica de conectar el valor de un campo de formulario (como un `<input>`) al estado de React. El estado se convierte en la "única fuente de la verdad", y cada cambio en el input actualiza el estado.

#### **Clase 8: Módulos CSS**

*En el temario, los puntos de esta clase parecen ser una continuación de la Clase 7. Se explicarán como parte de la gestión de estado y eventos.*

*   **Eventos de teclado y El objeto evento:** React envuelve los eventos nativos del navegador. En un manejador de eventos como `onChange`, recibes un objeto `evento` que contiene información útil, como `evento.target.value` para obtener el valor actual de un input.
*   **La prop `value`:** En un input controlado, la prop `value` se enlaza directamente a una variable de estado, asegurando que lo que se muestra en el input siempre refleje el estado de React.

#### **Clase 10: Elevando el estado (Lifting State Up)**

*   Es el patrón a seguir cuando varios componentes hijos necesitan compartir o modificar el mismo estado.
*   **Cómo funciona:** En lugar de que cada hijo tenga su propio estado local, el estado se "eleva" al ancestro común más cercano. Este componente padre es ahora el dueño del estado y lo pasa hacia abajo a los hijos a través de `props`. También pasa las funciones para modificar ese estado como `props`, permitiendo que los hijos comuniquen los cambios hacia arriba.

---

### **Módulo: Módulos CSS**

#### **Clase 13 y 14: Módulos CSS**

*   Se exploran las diferentes formas de aplicar estilos a los componentes de React.
*   **Estilos en línea (`prop style`):** Permite aplicar estilos directamente a un elemento usando un objeto JavaScript. Es útil para estilos dinámicos que dependen del estado, pero no es la forma más performante ni mantenible para estilos estáticos.
*   **`prop className`:** La forma más común de aplicar estilos, asignando una o más clases CSS a un componente.
*   **Módulos de CSS:** Son archivos CSS (ej: `MiComponente.module.css`) donde cada clase se vuelve única para el componente que la importa. Esto resuelve el problema global de CSS y evita conflictos de nombres de clases entre diferentes componentes.
*   **Estilos condicionales:** Se enseña a cambiar dinámicamente el `className` de un elemento basándose en su estado o props, permitiendo aplicar diferentes estilos (ej: una clase `.active` cuando un botón está presionado).
*   **Íconos e Imágenes:** Se muestra cómo importar archivos de imagen o SVG directamente en los componentes para ser renderizados.

---

### **Módulo: Final de cursada**

#### **Clase 15, 16, 17: Práctica y Repaso**

*   Estas clases son eminentemente prácticas. Su objetivo es consolidar todo lo aprendido a través de ejercicios que combinan la creación de componentes, el manejo de estado con `useState`, la comunicación entre componentes a través de `props`, el renderizado condicional, la gestión de eventos de usuario y la aplicación de estilos de forma modular y dinámica.

#### **Clase 18: Presentación del Trabajo Práctico Final Integrador**

*   Se presenta la consigna del proyecto final del módulo. Los estudiantes deberán aplicar todos los conceptos vistos para construir una aplicación de React funcional desde cero, demostrando su dominio sobre los componentes, el estado, los hooks y los estilos.