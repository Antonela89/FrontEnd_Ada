const LoginStatus = ({ isLoggedIn }) => {
	if (isLoggedIn) {
		return <div className="mensaje-box saludo">Bienvenido</div>;
	} else {
		return <div className="mensaje-box despedida">Debes iniciar sesión</div>;
	}
};

export default LoginStatus;
