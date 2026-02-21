const BtnDecrementar = ({ setContador }) => {
	return (
		<button
			className="btn-danger"
			onClick={() => setContador((prev) => prev - 1)}
		>
			-
		</button>
	);
};

export default BtnDecrementar;
