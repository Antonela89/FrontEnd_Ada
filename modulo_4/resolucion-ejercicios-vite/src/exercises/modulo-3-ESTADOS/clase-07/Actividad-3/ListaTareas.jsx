import { useState } from 'react';

const ListaTareas = () => {
	const [tareas, setTareas] = useState([
		{ id: 1, texto: 'Comprar leche', completada: false },
		{ id: 2, texto: 'Llamar a mamá', completada: true },
		{ id: 3, texto: 'Hacer ejercicio', completada: false },
	]);

	const [nuevaTarea, setNuevaTarea] = useState('');

	return (
		<div className="activity-block">
			<form
				className="flex flex-col gap-2 items-center"
				onSubmit={(e) => e.preventDefault()}
			>
				<ul className='w-full'>
					{tareas.map((tarea) => (
						<li className="flex justify-between items-center pb-2" key={tarea.id}>
							<span
								style={{
									textDecoration: tarea.completada
										? 'line-through'
										: 'none',
								}}
							>
								{tarea.texto}
							</span>
							<button
								className="btn-primary"
								onClick={() => {
									setTareas(tareas.map(t => 
										t.id === tarea.id ? {...t, completada: !t.completada} : t
									));
								}}
							>
								Completar
							</button>
						</li>
					))}
				</ul>

				<input
					className="form-control outline rounded p-2 w-full"
					type="text"
					placeholder="Agregar nueva tarea"
					value={nuevaTarea}
					onChange={(e) => setNuevaTarea(e.target.value)}
				/>
				<button
					type="submit"
					className="btn-primary max-w-1/3"
					onClick={() => {
						if (nuevaTarea.trim() === '') return;
						setTareas([
							...tareas,
							{
								id: tareas.length + 1,
								texto: nuevaTarea,
								completada: false,
							},
						]);
						setNuevaTarea('');
					}}
				>
					Agregar tarea a la lista
				</button>
			</form>
		</div>
	);
};

export default ListaTareas;
