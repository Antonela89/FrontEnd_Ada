// capturar nodo
const $btn = document.getElementById('btn');

$btn.addEventListener('click', () => {
	$btn.innerText = 'Espere 3 segundos...';
	$btn.disabled = true;
	$btn.classList.add('opacity-50', 'cursor-not-allowed');

	setTimeout(() => {
		$btn.innerText = '¡Listo!';
		$btn.disabled = false;
		$btn.classList.remove('opacity-50', 'cursor-not-allowed');

		// Volver al texto original después de 1 segundo para volver a jugar
		setTimeout(() => {
			$btn.innerText = 'Click Me!';
		}, 1000);
	}, 3000);
});
