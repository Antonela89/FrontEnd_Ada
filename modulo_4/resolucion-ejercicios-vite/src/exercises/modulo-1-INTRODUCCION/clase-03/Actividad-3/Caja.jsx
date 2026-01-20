const Caja = ({ children }) => {

    // Definición de estilos dentro de una variable
	const styleBox = {
		border: '2px dashed #3b82f6',
		padding: '20px',
		borderRadius: '12px',
		backgroundColor: 'rgba(59, 130, 246, 0.05)',
		marginTop: '10px',
	};

	return <div style={styleBox}>{children}</div>;
};

export default Caja;
