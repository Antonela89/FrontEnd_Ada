const Despedida = ({ mostrar }) => (
	<div className="mensaje-box despedida">
		¡Adiós!
		{mostrar && ` Este es un Export Default.`}
	</div>
);

// Export default: NO requiere llaves al importar
export default Despedida;
