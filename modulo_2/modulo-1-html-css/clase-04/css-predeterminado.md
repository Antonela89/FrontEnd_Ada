### Resumen Detallado de Atributos CSS por Defecto en Etiquetas HTML

Los navegadores web aplican una hoja de estilos predeterminada, conocida como "hoja de estilos del agente de usuario" (user agent stylesheet), para renderizar los elementos HTML. Esto garantiza una presentación base antes de que se aplique cualquier estilo personalizado. Es crucial entender que estos valores pueden tener ligeras variaciones entre diferentes navegadores como Chrome, Firefox o Safari. A continuación, se presenta un resumen detallado en formato Markdown de los estilos por defecto para las etiquetas HTML más comunes.

---

### Elementos de Bloque (Block-level Elements)

Estos elementos comienzan en una nueva línea y ocupan todo el ancho disponible.

| Etiqueta | `display` | `font-size` | `font-weight` | Márgenes (`margin`) | Padding (`padding`) | Otros |
|---|---|---|---|---|---|---|
| `<body>` | `block` | `1em` (16px) | `normal` | `8px` (puede variar) | `0` | El color de fondo por defecto suele ser blanco. |
| `<h1>` | `block` | `2em` | `bold` | `margin-block-start: 0.67em;`<br>`margin-block-end: 0.67em;` | `0` | |
| `<h2>` | `block` | `1.5em` | `bold` | `margin-block-start: 0.83em;`<br>`margin-block-end: 0.83em;` | `0` | |
| `<h3>` | `block` | `1.17em` | `bold` | `margin-block-start: 1em;`<br>`margin-block-end: 1em;` | `0` | |
| `<h4>` | `block` | `1em` | `bold` | `margin-block-start: 1.33em;`<br>`margin-block-end: 1.33em;` | `0` | |
| `<h5>` | `block` | `0.83em` | `bold` | `margin-block-start: 1.67em;`<br>`margin-block-end: 1.67em;` | `0` | |
| `<h6>` | `block` | `0.67em` | `bold` | `margin-block-start: 2.33em;`<br>`margin-block-end: 2.33em;` | `0` | |
| `<p>` | `block` | `1em` | `normal` | `margin-block-start: 1em;`<br>`margin-block-end: 1em;` | `0` | |
| `<div>` | `block` | heredado | heredado | `0` | `0` | Contenedor genérico sin estilos propios. |
| `<blockquote>` | `block` | `1em` | `normal` | `margin-block-start: 1em;`<br>`margin-block-end: 1em;`<br>`margin-inline-start: 40px;`<br>`margin-inline-end: 40px;` | `0` | |
| `<ul>`, `<ol>`, `<dl>` | `block` | `1em` | `normal` | `margin-block-start: 1em;`<br>`margin-block-end: 1em;` | `padding-inline-start: 40px;` | `list-style-type`: `disc` para `<ul>`, `decimal` para `<ol>`. |
| `<li>` | `list-item` | `1em` | `normal` | `0` | `0` | |
| `<hr>` | `block` | `N/A` | `N/A` | `margin-block-start: 0.5em;`<br>`margin-block-end: 0.5em;`<br>`margin-inline-start: auto;`<br>`margin-inline-end: auto;` | `0` | `border-style: inset;`<br>`border-width: 1px;` |
| `<form>` | `block` | `1em` | `normal` | `0` | `0` | |
| `<article>`, `<section>`, `<nav>`, `<aside>`, `<header>`, `<footer>` | `block` | heredado | heredado | `0` | `0` | Elementos semánticos que se comportan como `<div>`. |

---

### Elementos de Línea (Inline-level Elements)

Estos elementos no comienzan en una nueva línea y solo ocupan el ancho necesario.

| Etiqueta | `display` | Estilos de Fuente | Decoración de Texto | Otros |
|---|---|---|---|---|
| `<a>` | `inline` | `color`: azul (no visitado), morado (visitado) | `text-decoration: underline;` | `cursor: pointer;` |
| `<span>` | `inline` | heredado | heredado | Contenedor genérico en línea sin estilos propios. |
| `<strong>`, `<b>` | `inline` | `font-weight: bold;` | `none` | |
| `<em>`, `<i>`, `<cite>` | `inline` | `font-style: italic;` | `none` | |
| `<code>`, `<kbd>`, `<samp>` | `inline` | `font-family: monospace;` | `none` | |
| `<sub>` | `inline` | `vertical-align: sub;`<br>`font-size: smaller;` | `none` | |
| `<sup>` | `inline` | `vertical-align: super;`<br>`font-size: smaller;` | `none` | |
| `<br>` | `N/A` | `N/A` | `N/A` | Crea un salto de línea. |
| `<img>` | `inline` | `N/A` | `none` | Elemento reemplazado, su tamaño depende de los atributos `width` y `height`. |

---

### Elementos Ocultos por Defecto

Ciertas etiquetas no se renderizan visualmente en la página y tienen `display: none;` por defecto.

*   `<head>`
*   `<title>`
*   `<meta>`
*   `<link>`
*   `<style>`
*   `<script>`
*   `<datalist>`
*   `<template>`

**Nota Importante sobre "Reset CSS":**

Debido a las inconsistencias entre los estilos predeterminados de los diferentes navegadores, es una práctica muy común que los desarrolladores web utilicen un archivo "CSS Reset" o de "normalización" (como Normalize.css). Estas hojas de estilo anulan muchos de los valores por defecto del navegador para proporcionar una base más consistente y predecible antes de aplicar los estilos personalizados del proyecto.