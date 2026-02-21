const BtnIncrementar = ({ setContador }) => {
	return (
		<button
			className="btn-success"
			onClick={() => setContador((prev) => prev + 1)}
		>
			+
		</button>
	);
};

export default BtnIncrementar;
