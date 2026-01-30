const HeaderClase = ({ numero, titulo }) => {
	return (
		<header className="class-header-wrapper">
			<span className="class-header-badge">
				Módulo 4 • Clase {numero}
			</span>

			<h1 className="class-header-title">{titulo}</h1>

			<div className="class-header-line"></div>
		</header>
	);
};

export default HeaderClase;
