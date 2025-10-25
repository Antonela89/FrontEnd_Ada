// Aunque el CSS maneja la animación, con JS podemos reaccionar al cambio.
const toggle = document.getElementById('notificationToggle');
const statusText = document.getElementById('toggle-status');

toggle.addEventListener('change', function () {
	// 'this.checked' es true si está activado, y false si no.
	if (this.checked) {
		statusText.textContent = 'Activado';
		console.log('El interruptor ha sido activado.');
	} else {
		statusText.textContent = 'Desactivado';
		console.log('El interruptor ha sido desactivado.');
	}
});
