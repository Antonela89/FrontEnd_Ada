const ListaAlumnas = ({ alumnas }) => {
	const totalPresentes = alumnas.filter((alumna) => alumna.asistencia).length;
	return (
		<>
			<ul className="list-container">
				{alumnas.map((alumna, index) => (
					<li
						className={
							alumna.asistencia
								? 'list-item success'
								: 'list-item danger'
						}
						key={index}
					>
						<span>{alumna.nombre}</span>
						<span>
							{alumna.asistencia ? 'Presente' : 'Ausente'}
						</span>{' '}
					</li>
				))}
			</ul>

			<p className="extra-info-box">Total presentes: {totalPresentes}</p>
		</>
	);
};

export default ListaAlumnas;
