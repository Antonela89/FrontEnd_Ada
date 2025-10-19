### **Clase 1: Introducción al DOM**

*   **1. Introducción al DOM (Document Object Model):** El DOM es una representación en forma de árbol de un documento HTML que crea el navegador al cargar una página. No es el código HTML en sí, sino una interfaz que permite a lenguajes como JavaScript acceder y manipular la estructura, el estilo y el contenido de la página de forma dinámica. Cada parte del documento (etiquetas, atributos, texto) es un **nodo** en este árbol.
*   **2. Carga del documento:** Se explica la importancia de esperar a que el DOM esté completamente cargado antes de ejecutar scripts que lo manipulen. El evento `onload` asegura que el código no intente acceder a elementos que aún no existen, evitando errores.
*   **3. Entorno del navegador:** Se describe el ecosistema en el que corre el código frontend:
    *   **Motor de JavaScript (V8, SpiderMonkey):** El "cerebro" del navegador que lee, compila y ejecuta el código JavaScript.
    *   **APIs del navegador:** Interfaces que el navegador provee para interactuar con él (DOM para el documento, BOM para la ventana del navegador, Fetch API para peticiones de red).
    *   **Event Loop:** El mecanismo que permite a JavaScript manejar tareas asíncronas sin bloquear el hilo principal de ejecución.
*   **4. Objeto `window` y `document`:** `window` es el objeto global en el navegador, representa la ventana completa. `document` es una propiedad de `window` y representa la página web cargada en esa ventana. A través de `document` accedemos al DOM.
*   **5. Selectores en el DOM:** Son métodos para encontrar y seleccionar nodos (elementos) específicos en el DOM para poder trabajar con ellos.
    *   `querySelector()`: Devuelve el **primer** elemento que coincide con un selector CSS.
    *   `querySelectorAll()`: Devuelve una **lista de todos** los elementos que coinciden.
    *   `getElementById()`: Busca un elemento por su atributo `id`. Es muy rápido.
*   **6. Manipulación de clases:** `classList` es una propiedad que permite añadir, quitar, alternar y verificar clases CSS de un elemento de forma sencilla, facilitando la aplicación de estilos dinámicos.
*   **7. Atributos dinámicos:** Se enseñan métodos para leer (`getAttribute`), establecer (`setAttribute`), verificar (`hasAttribute`) y eliminar (`removeAttribute`) atributos de las etiquetas HTML, lo que permite modificar su comportamiento o propiedades dinámicamente.

---

### **Clase 2: Relaciones en el DOM**

*   **1. Relaciones entre elementos:** El DOM es un árbol, por lo que los nodos tienen relaciones familiares. Se aprende a navegar por estas relaciones para moverse entre elementos:
    *   `parentElement`: Accede al nodo padre directo.
    *   `children`: Devuelve una colección de los nodos hijos directos.
    *   `previousElementSibling` / `nextElementSibling`: Acceden al hermano anterior o siguiente en el mismo nivel.
*   **2. Creación de nodos en el DOM:** Se enseña a crear nuevos elementos HTML desde cero en JavaScript (`createElement`) y a añadirlos al DOM (`appendChild`), permitiendo construir interfaces de usuario dinámicamente.
*   **3. Modificar el contenido:**
    *   `innerHTML`: Permite leer o escribir el contenido HTML completo *dentro* de un elemento. Es potente pero puede ser inseguro si se inserta contenido de usuarios sin sanitizar.
    *   `innerText`: Se enfoca solo en el contenido de texto visible para el usuario, ignorando etiquetas HTML.
*   **4. Template Strings:** Una mejora de sintaxis en JavaScript moderno que usa comillas invertidas (`` ` ``) para crear cadenas de texto. Permiten incrustar variables y expresiones fácilmente con `${...}`, haciendo la construcción de HTML dinámico mucho más limpia que la concatenación tradicional.

---

### **Clase 3: Eventos**

*   **1. Web Reactiva y Eventos:** Una web reactiva es aquella que responde a las acciones del usuario. Los **eventos** son las señales que indican que algo ha sucedido (un clic, una tecla presionada, el ratón moviéndose).
*   **2. `onclick` y `preventDefault()`:**
    *   `onclick`: Es un evento que se dispara cuando el usuario hace clic en un elemento.
    *   `preventDefault()`: Es un método del objeto `event` que detiene el comportamiento por defecto de un elemento (ej: evita que un enlace navegue a otra página o que un formulario se envíe).
*   **3. El Objeto `event`:** Cuando un evento ocurre, el navegador crea un objeto `event` que contiene información detallada sobre ese suceso. `event.target` es una propiedad muy útil que identifica el elemento exacto que originó el evento.
*   **4. Manejadores de Eventos (`addEventListener`):** Es el método moderno y recomendado para "escuchar" eventos en un elemento. Permite asignar múltiples funciones a un mismo evento y ofrece más control.
*   **5. Eventos de Mouse y Teclado:** Se exploran otros tipos de eventos comunes como `mouseover` (ratón encima), `mouseout` (ratón sale), `onkeydown` (tecla presionada) y `onkeyup` (tecla soltada).
*   **6. Propagación de Eventos (Event Bubbling):** Cuando un evento ocurre en un elemento, se propaga hacia arriba a través de sus ancestros en el DOM (como una burbuja). `stopPropagation()` es un método para detener esta propagación.

---

### **Clase 4: Eventos de Formulario**

*   **1. Estructura de un formulario:** Se repasa cómo usar las etiquetas HTML para crear formularios.
*   **2. Evento `submit`:** Este evento se dispara en el elemento `<form>` cuando se intenta enviar. Usando `preventDefault()` en este evento es como se implementa la validación del lado del cliente antes de enviar los datos.
*   **3. Obtención de datos:** Se aprende a acceder al valor (`.value`) de los diferentes tipos de inputs para capturar la información que el usuario ha introducido.
*   **4. Normalización de datos:** Es el proceso de limpiar y estandarizar los datos del usuario antes de validarlos o enviarlos (ej: usando `.trim()` para quitar espacios en blanco, `.toLowerCase()` para convertir a minúsculas).
*   **5. Validaciones del lado del cliente:** Es el proceso de verificar en el navegador que los datos introducidos por el usuario son correctos (ej: que un campo no esté vacío) antes de enviarlos al servidor. Esto mejora la experiencia de usuario al dar feedback inmediato.
*   **6. El objeto `location`:** Un objeto que proporciona información sobre la URL actual de la página y permite la navegación (`location.href`) o recarga (`location.reload()`).

---

### **Clase 5: Componentes**

*   **1. Componentes en Desarrollo Web:** Se introduce el concepto de componentes como piezas de interfaz de usuario reutilizables, autocontenidas y con una funcionalidad específica (ej: un modal, una barra de navegación).
*   **2-5. Collapse, Sidebar, Modal, Toggle:** Se explican y construyen ejemplos prácticos de componentes comunes. Se aprende a manipular su visibilidad y comportamiento usando JavaScript para cambiar estilos CSS (`style.display`, `style.width`) en respuesta a eventos de `click`.

---

### **Clase 6-10: Frameworks CSS y Repaso**

*   **7. Frameworks CSS (Bulma):** Son colecciones de clases CSS predefinidas que aceleran el desarrollo al proporcionar componentes y un sistema de grillas listos para usar. Bulma es un ejemplo de un framework moderno y ligero.
*   **8. Sistema de Grillas:** La mayoría de los frameworks se basan en un sistema de grillas (generalmente de 12 columnas) para crear layouts responsivos de manera fácil y consistente.
*   **9. Formularios y Componentes:** Se explora cómo los frameworks CSS ofrecen clases para estilizar formularios y componentes comunes (botones, menús) rápidamente.
*   **10. Repaso de CSS:** Clase práctica para consolidar los conocimientos sobre frameworks CSS.

---

### **Clase 11: Estructuras de Datos (Desestructuración y Spread)**

*   **1. Desestructuración:** Una sintaxis de JavaScript que permite "desempacar" valores de arrays u objetos en variables distintas. Simplifica enormemente el acceso a los datos.
*   **2. Operador Spread (`...`):** Permite "expandir" un iterable (como un array u objeto) en lugares donde se esperan múltiples elementos o propiedades. Es muy útil para crear copias o combinar arrays/objetos.
*   **3. Operador Rest (`...`):** Con una sintaxis similar al spread, el operador rest agrupa el "resto" de los elementos en una sola variable, típicamente usado en parámetros de funciones.
*   **4. Inmutabilidad:** Se introduce el concepto de inmutabilidad, una práctica donde en lugar de modificar un objeto o array existente, se crea una nueva copia con los cambios. El operador spread es una herramienta clave para lograr esto.

---

### **Clase 12: Introducción a la Asincronía**

*   **1. Asincronía en el Frontend:** Se explica por qué es crucial: para realizar tareas "lentas" (como peticiones a una API) sin congelar la interfaz de usuario.
*   **2. Event Loop y Web API:** Se profundiza en cómo el navegador maneja la asincronía. Las tareas asíncronas se delegan a la Web API, y una vez completadas, sus resultados se ponen en una cola para ser procesados por el Event Loop cuando el hilo principal esté libre.
*   **3. Promesas (`Promise`):** Un objeto que representa el resultado eventual (éxito o fracaso) de una operación asíncrona. Simplifican el manejo de código asíncrono en comparación con los callbacks.
*   **4. `async/await`:** Es una sintaxis moderna construida sobre las promesas que permite escribir código asíncrono que se lee y se estructura como si fuera síncrono, mejorando enormemente su legibilidad.

---

### **Clase 13: CORS - Fetch, Then y Catch**

*   **1. CORS (Cross-Origin Resource Sharing):** Un mecanismo de seguridad del navegador que restringe las peticiones HTTP a un dominio diferente del que sirvió la página. Se explica que es una configuración que debe permitirse en el servidor para que una API pueda ser consumida desde un frontend.
*   **2. `fetch()`:** La API moderna del navegador para realizar peticiones de red (ej: a una API REST). Está basada en promesas.
*   **3. `.then()` y `.catch()`:** Son los métodos de las promesas para manejar los resultados. `.then()` se ejecuta si la promesa se resuelve con éxito, y `.catch()` se ejecuta si es rechazada (hay un error).

---

### **Clase 14-16: API REST**

*   **1. ¿Qué es una API REST?** Una API (Interfaz de Programación de Aplicaciones) es un conjunto de reglas que permite que diferentes aplicaciones se comuniquen entre sí. REST es un estilo de arquitectura para diseñar APIs que se basa en el protocolo HTTP.
*   **2. Estructura:**
    *   **URI / Endpoint:** La URL específica a la que se hace la petición (ej: `/api/users/123`).
    *   **Recursos:** La "cosa" que la API expone (ej: usuarios, productos).
    *   **Métodos HTTP:** Las acciones que se pueden realizar (`GET` para leer, `POST` para crear, `PUT`/`PATCH` para actualizar, `DELETE` para borrar).
    *   **Códigos de Estado:** Números que indican el resultado de la petición (`200 OK`, `404 Not Found`, etc.).
*   **3. Autenticación (API Keys):** Se explica que muchas APIs requieren una clave (API Key) para identificar y autorizar al cliente que realiza la petición.
*   **4. Parámetros de búsqueda, Filtrado, Paginado:** Se enseña a usar parámetros en la URL (ej: `?limit=10&page=2`) para solicitar al servidor que filtre, ordene o pagine los resultados, permitiendo manejar grandes cantidades de datos de forma eficiente.

---

### **Clase 17-18: Práctica y Desafío Final**

*   Las últimas clases están dedicadas a la práctica integradora, donde los estudiantes deben consumir una API REST real, manejar la asincronía, y construir una interfaz dinámica con los datos obtenidos, aplicando todos los conceptos avanzados vistos en el curso para el **Desafío Final**.