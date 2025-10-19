document.addEventListener('DOMContentLoaded', () => {

    const container = document.getElementById('container');

    // --- 1. Usando textContent ---
    // textContent obtiene TODO el contenido de texto, sin interpretar CSS ni HTML.
    // Es una representación "cruda" del texto dentro del nodo.

    const contentFromTextContent = container.textContent;

    // QUÉ VAS A VER EN LA SALIDA DE textContent:
    // - Incluirá el texto del <span> oculto ("Este texto está oculto.").
    // - Mantendrá los espacios en blanco múltiples del HTML original.
    // - Incluirá el contenido de las etiquetas <style> y <script>.
    // - Devolverá el texto en minúsculas de ".uppercase", ya que ignora el CSS.
    document.getElementById('output-textContent').textContent = contentFromTextContent;
    console.log('--- Salida de textContent ---');
    console.log(contentFromTextContent);


    // --- 2. Usando innerText ---
    // innerText intenta devolver el texto tal como lo vería un usuario en la página.
    // Es consciente del renderizado y el CSS aplicado.

    const contentFromInnerText = container.innerText;

    // QUÉ VAS A VER EN LA SALIDA DE innerText:
    // - OMITIRÁ el texto del <span> oculto.
    // - OMITIRÁ el contenido de las etiquetas <style> y <script>.
    // - Normalizará los espacios en blanco y añadirá saltos de línea donde visualmente los haya (ej. después de un <p> o <div>).
    // - Devolverá el texto "TODO EN MINÚSCULAS." en mayúsculas, porque lee el texto después de aplicar el CSS 'text-transform'.
    document.getElementById('output-innerText').innerText = contentFromInnerText;
    console.log('--- Salida de innerText ---');
    console.log(contentFromInnerText);

});