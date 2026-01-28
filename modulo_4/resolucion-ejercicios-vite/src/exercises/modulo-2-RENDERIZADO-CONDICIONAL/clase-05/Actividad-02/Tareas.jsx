const Tareas = () => {
	const listaTareas = [
		{
			id: 1,
			descripcion: 'Hacer ejercicios FrontEnd - React',
			completada: true,
		},
		{
			id: 2,
			descripcion: 'Elegir componente del proyecto ADAPets',
			completada: false,
		},
		{
			id: 3,
			descripcion: 'Crear un Tp con Next.js',
			completada: false,
		},
		{
			id: 4,
			descripcion: 'Revisar contenido de clase 5',
			completada: true,
		},
	];
	return (
		<ul className="list-disc">
			{listaTareas.map((tarea) => (
				tarea.completada ? (
					<li key={tarea.id} className="list-item success">
						{tarea.descripcion}
					</li>
				) : (
					<li key={tarea.id} className="list-item danger">
						{tarea.descripcion}
					</li>
				)
			))}
		</ul>
	);
};

export default Tareas;
