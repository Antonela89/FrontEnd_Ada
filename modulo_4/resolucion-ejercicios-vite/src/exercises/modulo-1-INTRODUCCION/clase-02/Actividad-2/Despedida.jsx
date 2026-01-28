// import './Mensajes.css';

// Export default: NO requiere llaves al importar
const Despedida = ({ mostrar }) => (
	<div className="mensaje-box despedida">
		¡Adiós!
		{mostrar && ` Este es un Export Default.`}
	</div>
);

export default Despedida;
