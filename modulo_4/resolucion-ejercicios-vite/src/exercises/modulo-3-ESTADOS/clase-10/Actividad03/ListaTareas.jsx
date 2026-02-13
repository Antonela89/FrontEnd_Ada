import Tarea from './Tarea';

const ListaTareas = ({ tareas, onEliminar }) => {
	return (
		<>
			{tareas.length > 0 && (
				<ul className="list-container">
					{tareas.map((t) => <Tarea data={t} key={t.id} onEliminar={onEliminar} />)}
				</ul>
			)}
		</>
	);
};

export default ListaTareas;
