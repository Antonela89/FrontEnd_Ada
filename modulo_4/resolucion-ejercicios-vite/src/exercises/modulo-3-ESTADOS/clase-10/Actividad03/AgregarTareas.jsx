import { useState } from 'react';

const AgregarTareas = ({ setTareas }) => {
	const [nuevaTarea, setNuevaTarea] = useState('');

	return (
		<form className="form">
			<input
				className="form-input"
				type="text"
				value={nuevaTarea}
				onChange={(e) => setNuevaTarea(e.target.value)}
			/>
			<button
				className="btn-primary"
				onClick={(e) => {
					e.preventDefault();
					setTareas((prev) => [
						...prev,
						{ id: Date.now(), texto: nuevaTarea },
					]);
                    setNuevaTarea('');
				}}
			>
				Agregar Tarea
			</button>
		</form>
	);
};

export default AgregarTareas;
