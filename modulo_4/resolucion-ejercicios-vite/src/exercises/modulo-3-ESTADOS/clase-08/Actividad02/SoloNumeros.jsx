import { useState } from 'react';

const SoloNumeros = () => {
	const [showError, setShowError] = useState(false);

	const handleInputChange = (e) => {
		const regex = /^[0-9]$|^Backspace$/;
		if (!regex.test(e.key)) {
			e.preventDefault();
			setShowError(true);
		} else {
			setShowError(false);
		}
	};

	return (
		<form className="form">
			<input
				className="form-input"
				type="text"
				onKeyDown={(e) => handleInputChange(e)}
			/>
			{showError && (
				<p className="form-message error">Solo se permiten números</p>
			)}
		</form>
	);
};

export default SoloNumeros;
