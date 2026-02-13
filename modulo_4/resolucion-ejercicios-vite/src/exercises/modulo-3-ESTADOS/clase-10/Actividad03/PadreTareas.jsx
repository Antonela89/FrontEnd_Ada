import { useState } from 'react';
import AgregarTareas from './AgregarTareas';
import ListaTareas from './ListaTareas';

const PadreTareas = () => {
	const [tareas, setTareas] = useState([]);

	// funcion eliminar
	const eliminarTarea = id => setTareas(prev => prev.filter(t => t.id !== id));

	return (
		<div>
			<AgregarTareas setTareas={setTareas} />
			<ListaTareas tareas={tareas} onEliminar={eliminarTarea}/>
		</div>
	);
};

export default PadreTareas;
