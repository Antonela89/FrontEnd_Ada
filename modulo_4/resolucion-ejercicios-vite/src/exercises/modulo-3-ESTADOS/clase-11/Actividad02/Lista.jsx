const Lista = ({ tareas }) => {
	return (
		<>
			{tareas.length > 0 ? (
				<ul className="list-container">
					{tareas.map((t, i) => (
						<li className="list-item" key={i}>
							{t}
						</li>
					))}
				</ul>
			) : (
				<p className="list-empty">No hay tareas para mostrar</p>
			)}
		</>
	);
};

export default Lista;
