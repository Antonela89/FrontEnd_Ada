import { useState } from 'react';

const Contador = () => {
	const [contador, setContador] = useState(0);

	return (
		<div className='flex flex-col gap-4 w-1/3 mx-auto'>
			<span className='mensaje-box primary text-center mt-0'>{contador}</span>
			<button className="btn-primary" onClick={() => setContador(contador + 1)}>
				Incrementar
			</button>
		</div>
	);
};

export default Contador;
