const Notificacion = ({ cantidad }) => {
	return cantidad > 0 ? (
		<div className="mensaje-box">Tienen {cantidad} notificaciones</div>
	) : null;
};

export default Notificacion;
