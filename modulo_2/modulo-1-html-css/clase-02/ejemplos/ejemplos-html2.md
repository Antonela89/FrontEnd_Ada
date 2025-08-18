# Ejemplos prácticos de HTML semántico + ARIA para accesibilidad

Perfecto — aquí tienes varios ejemplos pequeños y claros (listos para copiar) que muestran patrones comunes: estructura de página, navegación, formulario accesible, artículo, acordeón, modal, y un live region. Cada ejemplo tiene un comentario breve sobre por qué se usa cada atributo ARIA.

---

## 1 Plantilla básica con landmarks y "skip link"
```html
<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Ejemplo accesible</title>
  <style>
    .skip-link { position:absolute; left:-999px; top:auto; width:1px; height:1px; overflow:hidden; }
    .skip-link:focus { left:10px; top:10px; width:auto; height:auto; background:#fff; padding:8px; z-index:1000; }
  </style>
</head>
<body>
  <!-- Skip link para saltar directamente al contenido principal -->
  <a class="skip-link" href="#main">Saltar al contenido</a>

  <header role="banner">
    <h1>Mi sitio accesible</h1>
    <nav role="navigation" aria-label="Navegación principal">
      <ul>
        <li><a href="/" aria-current="page">Inicio</a></li>
        <li><a href="/about">Sobre nosotros</a></li>
        <li><a href="/contact">Contacto</a></li>
      </ul>
    </nav>
  </header>

  <main id="main" role="main">
    <article aria-labelledby="post-title">
      <h2 id="post-title">Título del artículo</h2>
      <p>Contenido del artículo...</p>
    </article>
  </main>

  <aside role="complementary" aria-label="Barra lateral">
    <p>Enlaces y recursos</p>
  </aside>

  <footer role="contentinfo">
    <p>© 2025 Mi sitio</p>
  </footer>
</body>
</html>
```
> **Por qué**: landmarks (`role="banner"`, `role="navigation"`, `role="main"`, `role="complementary"`, `role="contentinfo"`) permiten que lectores de pantalla y comandos de teclado naveguen rápido. El "skip link" ayuda a usuarios de teclado a evitar la navegación repetitiva.

---

## 2 Formulario con labels, descripción y manejo de errores
```html
<form action="/register" method="post" novalidate aria-labelledby="register-title">
  <h2 id="register-title">Registro</h2>

  <label for="name">Nombre</label>
  <input id="name" name="name" type="text" required aria-required="true" />

  <label for="email">Correo electrónico</label>
  <input id="email" name="email" type="email" required aria-required="true"
         aria-describedby="email-help email-error" />
  <div id="email-help">Usa un correo válido, por ejemplo: usuario@ejemplo.com</div>
  
  <!-- Mensaje de error, visible solo si hay error -->
  <div id="email-error" role="alert" aria-live="assertive" style="display:none;">
    Por favor ingrese un correo válido.
  </div>

  <label for="pwd">Contraseña</label>
  <input id="pwd" name="password" type="password" aria-describedby="pwd-help" minlength="8" />
  <div id="pwd-help">Mínimo 8 caracteres.</div>

  <button type="submit">Enviar</button>
</form>
```
> **Por qué**: `label` vincula texto con inputs; `aria-describedby` añade pistas contextuales; `role="alert"` y `aria-live` anuncian errores inmediatamente a usuarios de lectores de pantalla. `aria-required` comunica requisitos.

---

## 3 Botones con estados ARIA (ej. "Me gusta")
```html
<button id="likeBtn" aria-pressed="false" aria-label="Marcar como me gusta">
  ❤️ <span id="like-count">12</span>
</button>

<script>
  const btn = document.getElementById('likeBtn');
  btn.addEventListener('click', () => {
    const pressed = btn.getAttribute('aria-pressed') === 'true';
    btn.setAttribute('aria-pressed', String(!pressed));
  });
</script>
```
> **Por qué**: `aria-pressed` comunica el estado de un control tipo "toggle" a usuarios que no ven el cambio visual.

---

## 4 Acordeón accesible (region con botón que controla panel)
```html
<section>
  <h3>
    <button aria-expanded="false" aria-controls="panel1" id="accordion1">
      ¿Qué incluye el plan?
    </button>
  </h3>
  <div id="panel1" role="region" aria-labelledby="accordion1" hidden>
    <p>Detalles del plan...</p>
  </div>
</section>

<script>
  const btn = document.querySelector('button[aria-controls="panel1"]');
  const panel = document.getElementById('panel1');
  btn.addEventListener('click', () => {
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!expanded));
    panel.hidden = expanded;
  });
</script>
```
> **Por qué**: el botón controla el panel con `aria-controls` y `aria-expanded`; el panel tiene `role="region"` y `aria-labelledby` para darle contexto.

---

## 5 Modal/dialog accesible
```html
<button id="openModal">Abrir diálogo</button>

<div id="modal" role="dialog" aria-modal="true" aria-labelledby="modalTitle" aria-describedby="modalDesc" hidden>
  <div class="modal-content" role="document">
    <h2 id="modalTitle">Confirmar acción</h2>
    <p id="modalDesc">¿Estás seguro que deseas continuar?</p>
    <button id="confirm">Confirmar</button>
    <button id="close">Cancelar</button>
  </div>
</div>

<script>
  const open = document.getElementById('openModal');
  const modal = document.getElementById('modal');
  const close = document.getElementById('close');
  
  open.addEventListener('click', () => {
    modal.hidden = false;
    document.getElementById('confirm').focus();
  });

  close.addEventListener('click', () => {
    modal.hidden = true;
    open.focus();
  });
  
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.hidden) {
      modal.hidden = true;
      open.focus();
    }
  });
</script>
```
> **Por qué**: `role="dialog"` y `aria-modal="true"` informan que es un diálogo modal. `aria-labelledby` y `aria-describedby` proveen el título y la descripción accesible.

---

## 6 Imagen, icono y atributo alt + role para decoración
```html
<!-- Imagen informativa -->
<img src="equipo.jpg" alt="Equipo de trabajo reunido en la oficina" />

<!-- Imagen completamente decorativa -->
<img src="ornamento.svg" alt="" aria-hidden="true" />
```
> **Por qué**: si el `alt` está vacío y se añade `aria-hidden="true"`, los lectores de pantalla lo ignoran por completo, considerándolo decorativo.

---

## 7 Tabla de datos accesible
```html
<table>
  <caption>Ventas por mes</caption>
  <thead>
    <tr>
      <th scope="col">Mes</th>
      <th scope="col">Ventas</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Enero</th>
      <td>120</td>
    </tr>
    <tr>
      <th scope="row">Febrero</th>
      <td>98</td>
    </tr>
  </tbody>
</table>
```
> **Por qué**: `<caption>`, `scope="col"` y `scope="row"` ayudan a los lectores de pantalla a navegar y entender la estructura y relación entre las celdas de la tabla.

---

## 8 Live region para notificaciones dinámicas
```html
<div aria-live="polite" aria-atomic="true" id="toastRegion"></div>

<script>
  function showToast(message) {
    const region = document.getElementById('toastRegion');
    region.textContent = message;
    // Opcional: limpiar después de un tiempo
    setTimeout(() => { region.textContent = '' }, 5000);
  }

  // Ejemplo de uso
  // showToast('Tu archivo se subió correctamente.');
</script>
```
> **Por qué**: `aria-live="polite"` permite anunciar cambios dinámicos sin interrumpir bruscamente al usuario. `aria-atomic="true"` asegura que se lea toda la notificación.

---

### Consejos prácticos rápidos

*   **Prioriza etiquetas semánticas**: Usa `<header>`, `<nav>`, `<main>`, `<article>`, `<aside>`, `<footer>`, `<button>`, `<form>`, `<label>` antes de recurrir a ARIA.
*   **Usa ARIA para estados y relaciones dinámicas**: Es ideal para comunicar cambios que ocurren con JavaScript (ej. `aria-expanded`, `aria-pressed`, `aria-current`).
*   **Siempre prueba**: Usa un lector de pantalla (NVDA en Windows, VoiceOver en Mac) y navega únicamente con el teclado para verificar tu implementación.
*   **No abuses de ARIA**: Evita redundancias como usar `role="button"` en un elemento `<button>` nativo.
*   **Asegura el enfoque visible**: El estado `:focus` debe ser claro y visible. Gestiona el foco del teclado de forma lógica, especialmente en componentes como modales y menús desplegables.