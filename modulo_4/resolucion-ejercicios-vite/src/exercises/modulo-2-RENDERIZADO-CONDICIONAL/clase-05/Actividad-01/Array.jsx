const Array = () => {
	const frutas = ['Manzana', 'Banana', 'Pera'];
	return (
		<ul className="list-disc pl-10">
			{frutas.map((f, i) => (
				<li key={i}>{f}</li>
			))}
		</ul>
	);
};

export default Array;
