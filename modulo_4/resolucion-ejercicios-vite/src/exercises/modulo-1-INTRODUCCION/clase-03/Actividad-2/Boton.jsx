const Boton = ({ text, onClick }) => {
	return (
		<button className="btn-custom" onClick={onClick}>
			{text}
		</button>
	);
};

export default Boton;
