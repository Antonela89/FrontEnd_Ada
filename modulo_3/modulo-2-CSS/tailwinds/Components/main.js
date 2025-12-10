// Función para "limpiar" la indentación extra
function dedent(str) {
	// Dividir el texto en líneas
	const lines = str.split('\n');

	// Eliminar líneas vacías al principio y al final para limpiar
	while (lines.length > 0 && lines[0].trim() === '') lines.shift();
	while (lines.length > 0 && lines[lines.length - 1].trim() === '')
		lines.pop();

	if (lines.length === 0) return '';

	// Encontrar la indentación mínima común (el espacio a la izquierda que sobra)
	let minIndent = Infinity;

	lines.forEach((line) => {
		// Medir las líneas que tengan código (no líneas vacías)
		if (line.trim().length > 0) {
			// Contar espacios al inicio
			const currentIndent = line.search(/\S/);
			if (currentIndent !== -1 && currentIndent < minIndent) {
				minIndent = currentIndent;
			}
		}
	});

	// Si hay indentación, quitarla
	if (minIndent !== Infinity && minIndent > 0) {
		return lines
			.map((line) => {
				// Si la línea está vacía, se deja vacía (sin espacios sobrantes)
				if (line.trim().length === 0) return '';
				// Cortar los primeros X caracteres
				return line.substring(minIndent);
			})
			.join('\n'); // salto de línea
	}

	return lines.join('\n');
}

// --- LÓGICA PRINCIPAL ---

document.querySelectorAll('.component-wrapper').forEach((wrapper) => {
	const sourceDiv = wrapper.querySelector('.source-code');
	const targetCode = wrapper.querySelector('code');

	if (sourceDiv && targetCode) {
		// Obtener el HTML "sucio" (con la indentación del editor)
		const rawHTML = sourceDiv.innerHTML;

		// Limpieza
		const cleanHTML = dedent(rawHTML);

		// Reemplazar los caracteres para que se vea como texto y no se ejecute
		const escapedHTML = cleanHTML
			.replace(/&/g, '&amp;')
			.replace(/</g, '&lt;')
			.replace(/>/g, '&gt;');

		// Insertar
		targetCode.innerHTML = escapedHTML;
	}
});
