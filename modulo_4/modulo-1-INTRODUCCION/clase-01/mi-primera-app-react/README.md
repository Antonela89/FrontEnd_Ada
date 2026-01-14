# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

---

Actividad 3: Explorando la estructura del proyecto y ReactDOM
Consigna:
1. Abrí el archivo public/index.html y encontrá la línea:
2. Explicá con tus palabras (en un archivo .md o .txt que podés llamar explicacion-react.txt):
• ¿Qué hace ese <div>?
• ¿Por qué es importante para React?
• ¿Qué pasa si lo eliminás o cambiás su id?
• ¿Dónde en el proyecto se usa ese id?
Abrí src/index.js y explicá:
• ¿Qué hace ReactDOM.createRoot()?
• ¿Qué significa root.render(<App />)?
• ¿Qué pasa si cambiás el componente que se renderiza por otro?
Extra: Probá cambiar el App por un componente propio que hayas creado (Perfil, por ejemplo).

---

#### 1. Sobre el `div` en `public/index.html`
*   **¿Qué hace ese `<div>`?**
    Es un contenedor vacío. Funciona como un "gancho" o un espacio reservado en el HTML real del navegador. Es el punto de aterrizaje donde React va a dibujar toda tu aplicación.
*   **¿Por qué es importante para React?**
    React es una librería de JavaScript que construye interfaces de forma dinámica. Necesita un lugar físico en el DOM (el árbol de elementos del navegador) para poder "inyectar" todos los componentes que crees. Sin ese div, React no sabría dónde mostrarse.
*   **¿Qué pasa si lo eliminás o cambiás su id?**
    La aplicación dejaría de funcionar y se veria una pantalla en blanco. React buscaría un elemento con el ID específico (por defecto "root") y, al no encontrarlo, lanzaría un error en la consola y no podría renderizar nada.
*   **¿Dónde en el proyecto se usa ese id?**
    Se usa en el archivo **`src/index.js`** (o `main.jsx` en Vite), dentro de la función `document.getElementById('root')`.

#### 2. Sobre `src/index.js`
*   **¿Qué hace `ReactDOM.createRoot()`?**
    Es la función que inicializa el "punto de entrada" de React en el DOM real. Crea una raíz (root) vinculada al elemento HTML. Es como decirle a React: "Toma el control de este pedazo de la página".
*   **¿Qué significa `root.render(<App />)`?**
    Es la orden de ejecución. Le dice a la raíz que acaba de crear: "Dibuja el componente `<App />` (y todos sus hijos) dentro de mi contenedor". Es el momento en que el código de React se convierte en HTML real para el usuario.
*   **¿Qué pasa si cambiás el componente que se renderiza por otro?**
    React simplemente borrará lo que estaba antes y dibujará el nuevo componente. Por ejemplo, si se cambia `<App />` por `<Perfil />`, la página mostrará directamente la tarjeta de perfil en lugar de la pantalla de bienvenida de React.


### ¿Qué notarás?
*   En el navegador, el logo de React giratorio desaparecerá.
*   Ahora se vera únicamente la **Card de Perfil** centrada.
*   Si se inspecciona la página (F12), dentro del `<div id="root"></div>` ahora están todos los estilos y etiquetas definidos.