import React from 'react';

const Boton = () => {
	const botonStyle = {
		backgroundColor: '#007bff',
		color: 'white',
		border: 'none',
		padding: '10px 20px',
		borderRadius: '5px',
		cursor: 'pointer',
		marginTop: '15px',
	};

	return <button style={botonStyle}>Ver más</button>;
};

export default Boton;
