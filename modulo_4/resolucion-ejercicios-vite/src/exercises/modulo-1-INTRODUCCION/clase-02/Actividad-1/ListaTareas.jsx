const ListaTareas = ({ tareas }) => {
	// Si no hay tareas
	if (tareas.length === 0) {
		return (
			<div className="list-empty">
				<span className="block text-2xl mb-2">🎉</span>
				No hay tareas pendientes.
			</div>
		);
	}

	// Renderizado de la lista
	return (
		<ul className="list-container">
			{tareas.map((tarea) => (
				<li
					key={tarea.id}
					className={`list-item ${tarea.completada ? 'success' : ''}`}
				>
					<div className="flex items-center">
						<span className="list-item-icon">
							{tarea.completada ? '✅' : '⏳'}
						</span>
						<span>
							{tarea.texto}
						</span>
					</div>
				</li>
			))}
		</ul>
	);
};

export default ListaTareas;
