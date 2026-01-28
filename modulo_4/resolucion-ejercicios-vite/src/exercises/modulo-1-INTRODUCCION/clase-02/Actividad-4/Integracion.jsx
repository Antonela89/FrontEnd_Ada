const Integracion = ({ usuario, temasAprendidos, mostrarAlerta }) => {
	return (
		// Uso de Fragment (<> es lo mismo que <React.Fragment>)
		<>
			<div className="integracion-container">
				{/* Saludo con JSX */}
				<h3 className="user-greeting">
					¡Bienvenid@ de nuevo,{' '}
					<span className="text-white">{usuario}</span>!
				</h3>

				<p className="qa-answer">
					Hoy hemos repasado los siguientes temas:
				</p>

				{/* Renderizar lista con map() */}
				<ul className="feature-list">
					{temasAprendidos.map((tema, index) => (
						<li key={index}>
							<span className="text-(--accent)">🔹</span>
							{tema}
						</li>
					))}
				</ul>

				{/* Condicional con && */}
				{mostrarAlerta && (
					<div className="alert-warning">
						<span className="text-lg">⚠️</span>
						Tienes ejercicios pendientes por revisar en el Módulo 4.
					</div>
				)}
			</div>
		</>
	);
};

export default Integracion;
