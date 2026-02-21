const Formulario = ({setTareas}) => {

    const handleSubmit = (e) => {
        e.preventDefault();

        const tarea = e.target[0].value;        
        setTareas((prev) => [...prev, tarea])
        e.target[0].value = ''
    }

	return (
		<form className="form" onSubmit={handleSubmit}>
			<div className="form-group">
				<label className="form-label" htmlFor="descripcion">
					Tarea
				</label>
				<input className="form-input" type="text"/>
			</div>

            <button type="submit" className="btn-primary">Agregar Tarea</button>
		</form>
	);
};

export default Formulario;
