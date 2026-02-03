const Hijo = ({ accion }) => {
	return (
		<div className="extra-info-box flex flex-col justify-center items-center gap-4">
            <p className="text-center">Soy un componente hijo y recibo una función como prop</p>
			<button className="btn-primary max-w-1/3" onClick={accion}>Haz clic aquí</button>
		</div>
	);
};

export default Hijo;
