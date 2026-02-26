import { useState } from 'react';

const HandleBackground = () => {
	const [backgroundColor, setBackgroundColor] = useState('blue');

	return (
		<div className="div-container-row">
			<div style={{ backgroundColor: backgroundColor }} className="div-background-grow"></div>
			<div className='div-subcontainer-column'>
				<button
					className="btn"
					onClick={() =>
						setBackgroundColor(
							backgroundColor === 'blue' ? 'green' : 'blue',
						)
					}
				>
					Cambiar Fondo
				</button>
				<p className="mensaje-box w-full">{backgroundColor === 'blue' ? 'Fondo Azul' : 'Fondo Verde'}</p>
			</div>
		</div>
	);
};

export default HandleBackground;
