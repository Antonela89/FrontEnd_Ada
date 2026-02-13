const InputMensaje = ({ mensaje, setMensaje }) => {
	return (
		<input className="form-input" type="text" value={mensaje} onChange={(e) => setMensaje(e.target.value)} />
	);
};

export default InputMensaje;
