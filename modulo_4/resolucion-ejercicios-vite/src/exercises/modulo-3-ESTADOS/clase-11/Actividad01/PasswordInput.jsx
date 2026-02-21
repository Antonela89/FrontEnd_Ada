const PasswordInput = ({ onChange, value }) => {
	return (
		<input
			className="form-input"
			type="text"
			placeholder="Ingresa un Password"
			onChange={onChange}
			value={value}
		/>
	);
};

export default PasswordInput;
