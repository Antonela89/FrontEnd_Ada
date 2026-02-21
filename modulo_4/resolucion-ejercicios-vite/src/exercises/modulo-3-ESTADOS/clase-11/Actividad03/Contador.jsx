import { useState } from 'react';
import BtnDecrementar from './BtnDecrementar';
import BtnIncrementar from './BtnIncrementar';

const Contador = () => {
	const [contador, setContador] = useState(0);
	return (
		<div className='flex gap-4 items-center justify-center'>
			<BtnDecrementar setContador={setContador} />
			<p className="mb-0 mensaje-box primary">{contador}</p>
			<BtnIncrementar setContador={setContador} />
		</div>
	);
};

export default Contador;
