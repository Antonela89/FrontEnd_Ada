import { useState } from 'react';
import BotonRestar from './BotonRestar';
import MostrarContador from './MostrarContador';
import BotonSumar from './BotonSumar';

const PadreContador = () => {
	const [contador, setContador] = useState(0);
    
	return (
		<div className='box flex gap-4 items-center'>
			<BotonRestar setContador={setContador}/>
			<MostrarContador contador={contador} />
			<BotonSumar setContador={setContador}/>
		</div>
	);
};

export default PadreContador;
