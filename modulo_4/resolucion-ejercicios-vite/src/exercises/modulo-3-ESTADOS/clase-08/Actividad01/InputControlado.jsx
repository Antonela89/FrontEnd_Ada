import { useState } from 'react';

const InputControlado = () => {
	const [texto, setTexto] = useState('');
	return (
		<>
			<input 
            className='form-input'
				type="text"
				value={texto}
				onChange={(e) => setTexto(e.target.value)}
			/>
			<p className='form-message info'>{texto}</p>
		</>
	);
};

export default InputControlado;
