// nodos
const editor = document.getElementById('editor');
const preview = document.getElementById('preview');

// Función para actualizar el iframe
function updatePreview() {
	const codigoUsuario = editor.value;

	// crear el HTML completo que irá dentro del iframe
	// NOTA: colocar el script de Tailwind DENTRO del iframe para que tome las clases
	const htmlCompleto = `
                <!DOCTYPE html>
                <html>
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <script src="https://cdn.tailwindcss.com"><\/script>
                </head>
                <body class="p-4">
                    ${codigoUsuario}
                </body>
                </html>
            `;

	// Escribir en el documento del iframe
	const doc = preview.contentWindow.document;
	doc.open();
	doc.write(htmlCompleto);
	doc.close();
}

// Escuchar cuando el usuario escribe (evento 'input')
editor.addEventListener('input', updatePreview);

// Ejecutar una vez al inicio para mostrar el código por defecto
updatePreview();
