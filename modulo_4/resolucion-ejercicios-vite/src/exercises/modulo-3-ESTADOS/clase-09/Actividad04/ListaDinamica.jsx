import { useState } from 'react';

const ListaDinamica = () => {
	const [lista, setLista] = useState([]);
	const [tarea, setTarea] = useState('');

	return (
		<>
			<input
				className="form-input"
				type="text"
				onChange={(e) => setTarea(e.target.value)}
				value={tarea}
			/>
			<button
				className="btn-primary"
				onClick={() => {setLista([...lista, tarea]); setTarea('')}}>
				Agregar tarea
			</button>

			<ul className="lista-container">
				{lista.map((tarea, index) => (
					<li className="list-item" key={index}>
                        {tarea}
                        <button className="btn-danger" onClick={() => setLista(lista.filter((_, i) => i !== index))}>🗑️</button>
                        </li>

				))}
			</ul>
		</>
	);
};

export default ListaDinamica;
