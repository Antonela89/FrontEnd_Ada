import { useState } from 'react';

const Contador = () => {
	const [contador, setContador] = useState(0);
	return (
		<div className="flex gap-4 items-center justify-center">
			<button
				className="btn-primary"
				onClick={() => setContador(contador - 1)}
			>
				-
			</button>
			<p className="extra-info-box">{contador}</p>
			<button
				className="btn-primary"
				onClick={() => setContador(contador + 1)}
			>
				+
			</button>
		</div>
	);
};

export default Contador;
