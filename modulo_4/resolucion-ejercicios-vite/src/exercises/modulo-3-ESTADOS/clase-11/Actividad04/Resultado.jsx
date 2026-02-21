const Resultado = ({ puntos, total }) => {
	const porcentaje = (puntos / total) * 100;

	return (
		<div className="text-center p-10 border rounded-xl bg-slate-900 text-white">
			<h2 className="text-3xl font-bold mb-4">
				¡Cuestionario Finalizado!
			</h2>
			<p className="text-xl">
				Puntaje:{' '}
				<span className="text-blue-400 font-bold">{puntos}</span> de{' '}
				{total}
			</p>
			<div className="mt-6">
				{porcentaje >= 70 ? (
					<p className="text-green-400">
						¡Excelente trabajo, sabes mucho de React!
					</p>
				) : (
					<p className="text-yellow-400">
						¡Sigue practicando, vas por buen camino!
					</p>
				)}
			</div>
			<button
				className="mt-8 btn-primary"
				onClick={() => window.location.reload()} // Manera simple de reiniciar
			>
				Reintentar
			</button>
		</div>
	);
};

export default Resultado;
