import './Integracion.css';

const Integracion = ({ usuario, temasAprendidos, mostrarAlerta }) => {
	return (
		// Uso de Fragment (<> es lo mismo que <React.Fragment>)
		<>
			<div className="integracion-card">
				{/* Saludo con JSX */}
				<h3 className="user-greeting">
					¡Bienvenid@ de nuevo, {usuario}!
				</h3>

				<p className="qa-answer">
					Hoy hemos repasado los siguientes temas:
				</p>

				{/* Renderizar lista con map() */}
				<ul className="feature-list">
					{temasAprendidos.map((tema, index) => (
						<li key={index}>🔹 {tema}</li>
					))}
				</ul>

				{/* Condicional con && */}
				{mostrarAlerta && (
					<div className="alert-box">
						Tienes ejercicios pendientes por revisar en el Módulo
						4.
					</div>
				)}
			</div>
		</>
	);
};

export default Integracion;
