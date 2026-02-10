import { useState } from 'react';

const InputControlado = () => {
	const [inputValue, setInputValue] = useState('');
	return (
		<>
			<input
				className="form-input"
				type="text"
				onChange={(e) => setInputValue(e.target.value)}
                value={inputValue}
			/>
			<p className='mensaje-box primary h-12'>{inputValue}</p>
		</>
	);
};

export default InputControlado;
