import { useState } from 'react';
import InputMensaje from './InputMensaje';
import MostrarMensaje from './MostrarMensaje';

const Padre = () => {
	const [mensaje, setMensaje] = useState("");
	return (
		<>
			<InputMensaje mensaje={mensaje} setMensaje={setMensaje} />
			<MostrarMensaje mensaje={mensaje} />
		</>
	);
};

export default Padre;
