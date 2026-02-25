import { useState } from 'react';

const HandleBackground = () => {
	const [backgroundColor, setBackgroundColor] = useState('blue');

	return (
		<>
			<div style={{ backgroundColor: backgroundColor }}>fondo</div>
			<button
				onClick={() =>
					setBackgroundColor(
						backgroundColor === 'blue' ? 'green' : 'blue',
					)
				}
			>
				Cambiar Fondo
			</button>
			<p>{backgroundColor === 'blue' ? 'Fondo Azul' : 'Fondo Verde'}</p>
		</>
	);
};

export default HandleBackground;
