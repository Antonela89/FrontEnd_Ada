import { useState } from 'react';

const Formulario = () => {
	const [nombre, setNombre] = useState('');
	const [apellido, setApellido] = useState('');

	return (
		<>
			<form className="form">
				<div className="form-group">
					<label className="form-label" htmlFor="nombre">
						Nombre:
						</label>
						<input
							className="form-input"
							type="text"
							value={nombre}
							id="nombre"
							onChange={(e) => setNombre(e.target.value)}
						/>
				</div>
				<div className="form-group">
					<label className="form-label" htmlFor="apellido">
						Apellido:
					</label>
					<input
						className="form-input"
						type="text"
						id="apellido"
						value={apellido}
						onChange={(e) => setApellido(e.target.value)}
					/>
				</div>
			</form>

			<div className="form-message info">
				<p>
					{nombre} {apellido}
				</p>
			</div>
		</>
	);
};

export default Formulario;
