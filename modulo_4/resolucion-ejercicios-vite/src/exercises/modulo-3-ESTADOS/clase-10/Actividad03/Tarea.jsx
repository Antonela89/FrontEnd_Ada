const Tarea = ({ data, onEliminar }) => {

	return (
		<li className="list-item">
			<span>{data.texto}</span>
			<button className="btn-danger" onClick={() => onEliminar(data.id)}>x</button>
		</li>
	);
};

export default Tarea;
