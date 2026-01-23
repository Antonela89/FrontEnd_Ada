const Mensaje = ({ hayMensajes }) => {
	return (
		hayMensajes && (
			<div className="mensaje-box saludo">Tienes nuevos mensajes</div>
		)
	);
};

export default Mensaje;
