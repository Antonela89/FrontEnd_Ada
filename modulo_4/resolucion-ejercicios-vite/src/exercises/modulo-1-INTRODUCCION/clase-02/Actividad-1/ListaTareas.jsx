const ListaTareas = ({ tareas }) => {
	// Si no hay tareas
	if (tareas.length === 0) {
		return (
			<div className="empty-tasks">
				<span className="block text-2xl mb-2">🎉</span>
				No hay tareas pendientes.
			</div>
		);
	}

	// Renderizado de la lista
	return (
		<ul className="flex flex-col gap-2 p-0 m-0 list-none">
			{tareas.map((tarea) => (
				<li
					key={tarea.id}
					className={`item-row ${tarea.completada ? 'success' : ''}`}
				>
					<div className="flex items-center">
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
					</div>
				</li>
			))}
		</ul>
	);
};

export default ListaTareas;
