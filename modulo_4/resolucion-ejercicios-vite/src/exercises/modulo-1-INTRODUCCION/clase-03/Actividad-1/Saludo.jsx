const Saludo = ({ nombre = 'Invitada' }) => {
	return <div className="mensaje-box saludo">¡Hola, {nombre}!</div>;
};

export default Saludo;
