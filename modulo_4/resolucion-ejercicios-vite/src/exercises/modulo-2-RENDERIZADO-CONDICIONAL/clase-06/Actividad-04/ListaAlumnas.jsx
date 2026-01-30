const ListaAlumnas = ({ alumnas }) => {
	const totalPresentes = alumnas.filter((alumna) => alumna.asistencia).length;
	return (
		<div className="activity-block">
			<ul className="list-container">
				{alumnas.map((alumna, index) => (
					<li
						key={index}
						className={`list-item ${alumna.asistencia ? 'success' : 'danger'}`}
					>
						<span className="list-item-text">{alumna.nombre}</span>
						<span className="font-bold">
							{alumna.asistencia ? '✅ Presente' : '❌ Ausente'}
						</span>{' '}
					</li>
				))}
			</ul>

			<div className="extra-info-box">
				<h4>📊 Resumen de Asistencia</h4>
				<p>
					Total de alumnas presentes hoy:{' '}
					<strong>{totalPresentes}</strong>
				</p>
			</div>
		</div>
	);
};

export default ListaAlumnas;
