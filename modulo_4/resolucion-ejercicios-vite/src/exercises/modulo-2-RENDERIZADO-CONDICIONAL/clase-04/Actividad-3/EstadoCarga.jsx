const EstadoCarga = ({ loading }) => {
	return loading ? (
		<div className="mensaje-box "> Cargando... </div>
	) : (
		<div className="mensaje-box ">Datos Listos</div>
	);
};

export default EstadoCarga;
