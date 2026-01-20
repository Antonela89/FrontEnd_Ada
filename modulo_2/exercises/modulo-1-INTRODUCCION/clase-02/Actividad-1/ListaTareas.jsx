import './ListaTareas.css';

const ListaTareas = ({ tareas }) => {
	// Si no hay tareas 
	if (tareas.length === 0) {
		return <div className="empty-tasks">No hay tareas pendientes.</div>;
	}

	// Renderizado de la lista
	return (
		<ul className="task-list-container">
			{tareas.map((tarea) => (
				<li key={tarea.id} className="task-item">
					<span className="task-icon">
						{tarea.completada ? '✅' : '⏳'}
					</span>
					<span
						className={
							tarea.completada
								? 'task-text-completed'
								: 'task-text'
						}
					>
						{tarea.texto}
					</span>
				</li>
			))}
		</ul>
	);
};

export default ListaTareas;
