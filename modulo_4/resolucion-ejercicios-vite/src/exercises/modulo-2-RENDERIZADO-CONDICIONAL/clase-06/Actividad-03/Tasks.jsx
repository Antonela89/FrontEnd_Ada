const Tasks = ({ tareas }) => {
	const estaCompleta = tareas.filter((tarea) => !tarea.completa);

	return (
		<>
			{estaCompleta.length === 0 ? (
				<p className="list-empty">No hay tareas pendientes 🎉🎉</p>
			) : (
				<div className="list-container">
					{estaCompleta.map((tarea, index) => (
						<div key={index} className="list-item">
							<h3>{tarea.titulo}</h3>
						</div>
					))}
				</div>
			)}
		</>
	);
};

export default Tasks;
