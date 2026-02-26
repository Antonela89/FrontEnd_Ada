const Tarjeta = () => {
	return (
		<div className="flex items-center justify-center w-full border border-border p-6 rounded-xl">
			<article
				style={{
					border: '1px solid #334155',
					borderRadius: '10px',
					padding: '10px',
					background:  '#94a3b8',
					width: '200px',
					aspectRatio: '1/1',
					textAlign: 'center',
				}}
			>
				<h2 style={{ color: 'blue', fontSize: '24px' }}>Nombre: </h2>
				<p style={{ color: '#334155' }}>
					ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
					voluptate.
				</p>
			</article>
		</div>
	);
};

export default Tarjeta;
