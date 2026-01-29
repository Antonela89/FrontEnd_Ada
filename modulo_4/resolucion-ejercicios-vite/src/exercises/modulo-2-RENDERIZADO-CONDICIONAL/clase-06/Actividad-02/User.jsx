const User = ({ usuario }) => {
	const { nombre, edad, estado } = usuario;
	return (
		<article className="card">
			<h2>{nombre}</h2>
			{edad >= 18 ? (
				<p className="mensaje-box success">Es mayor de edad</p>
			) : (
				<p className="mensaje-box danger">Es menor de edad</p>
			)}
			{estado === 'activo' ? (
				<p className="mensaje-box success">Usuario Activo</p>
			) : estado === 'inactivo' ? (
				<p className="mensaje-box danger">Usuario Inactivo</p>
			) : (
				<p className="mensaje-box warning">Usuario Invitado</p>
			)}
		</article>
	);
};

export default User;
