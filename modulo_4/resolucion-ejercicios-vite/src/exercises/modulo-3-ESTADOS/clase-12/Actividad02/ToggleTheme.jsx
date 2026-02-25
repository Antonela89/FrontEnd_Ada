import { useState } from 'react';

const ToggleTheme = () => {
	const [theme, setTheme] = useState('light');

	const ligthTheme = {
		backgroundColor: '#fff',
		color: '#000',
	};

	const darkTheme = {
		backgroundColor: '#000',
		color: '#fff',
	};

	const toggleTheme = () => {
		setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
	};
	return (
		<>
			<div style={theme === 'light' ? ligthTheme : darkTheme}>Tema Claro / Oscuro</div>
			<button style={theme === 'light' ? ligthTheme : darkTheme} onClick={toggleTheme}>Cambiar Tema</button>
		</>
	);
};

export default ToggleTheme;
