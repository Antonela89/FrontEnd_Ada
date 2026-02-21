import { useState } from 'react';
import Formulario from './Formulario';
import Lista from './Lista';

const AppTareas = () => {
	const [tareas, setTareas] = useState([]);

	return (
		<>
			<Formulario setTareas={setTareas} />
			<Lista tareas={tareas} />
		</>
	);
};

export default AppTareas;
