import { useState } from 'react';

const Contador = () => {
	const [contador, setContador] = useState(0);

	return (
		<div className='flex flex-col gap-4 w-1/3 mx-auto'>
			<button className="btn-danger" onClick={() => setContador(contador - 1)}>
				Decrementar
			</button>
			<span className='mensaje-box primary text-center mt-0'>{contador}</span>
			<button className="btn-success" onClick={() => setContador(contador + 1)}>
				Incrementar
			</button>
			<button className="btn-warning" onClick={() => setContador(0)}>
				Resetear
			</button>
		</div>
	);
};

export default Contador;
