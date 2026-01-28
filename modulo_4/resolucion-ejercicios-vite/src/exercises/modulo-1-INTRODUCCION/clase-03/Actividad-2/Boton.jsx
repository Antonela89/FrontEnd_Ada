const Boton = ({ text, onClick }) => {
	return (
		<button className="btn-primary" onClick={onClick}>
			{text}
		</button>
	);
};

export default Boton;
