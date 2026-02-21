const RepetirPasswordInput = ({ onChange, value }) => {
	return (
		<input
			className="form-input"
			type="text"
			placeholder="Repite el Password"
			onChange={onChange}
			value={value}
		/>
	);
};

export default RepetirPasswordInput;
