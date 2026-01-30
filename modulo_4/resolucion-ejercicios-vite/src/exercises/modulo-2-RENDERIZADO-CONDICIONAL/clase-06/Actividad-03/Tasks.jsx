const Tasks = ({ tareas }) => {
	const estaCompleta = tareas.filter((tarea) => !tarea.completa);

	return (
		<>
			{estaCompleta.length === 0 ? (
				<p className="list-empty">No hay tareas pendientes 🎉🎉</p>
			) : (
				<div className="list-container">
					{estaCompleta.map((tarea, id) => (
						<div key={id} className="list-item">
							<h3>{tarea.titulo}</h3>
							<span className="badge badge-standard">Pendiente</span>
						</div>
					))}
				</div>
			)}
		</>
	);
};

export default Tasks;
