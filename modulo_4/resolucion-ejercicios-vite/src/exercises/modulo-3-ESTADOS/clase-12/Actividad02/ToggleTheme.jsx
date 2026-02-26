import { useState } from 'react';

const ToggleTheme = () => {
	const [theme, setTheme] = useState('light');

	const toggleTheme = () => {
		setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
	};
	return (
		<div className={`div-container-row ${theme === 'dark' ? 'dark-theme' : 'light-theme'}`}>
			<div className="div-subcontainer-row">Tema Claro / Oscuro</div>
			<button className="btn w-1/3" onClick={toggleTheme}>Cambiar Tema</button>
		</div>
	);
};

export default ToggleTheme;
