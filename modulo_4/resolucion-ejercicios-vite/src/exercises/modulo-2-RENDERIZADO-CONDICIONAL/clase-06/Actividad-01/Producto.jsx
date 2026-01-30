const Producto = ({ producto }) => {
	const productoEnOferta = producto.precio < 100;

	return (
		<article className="card">
			{/* Contenedor con altura fija para mantener la alineación */}
			<div className="card-badge-area">
				{productoEnOferta && (
					<span className="badge-offer">
						🔥 ¡Producto en oferta!
					</span>
				)}
			</div>

			<h3 className="card-title">{producto.nombre}</h3>

			<p className="card-description">{producto.descripcion}</p>

			<div className="card-price-area">
				<span className="price-label">Precio</span>
				<span className="price-value">
					${producto.precio.toLocaleString()}
				</span>
			</div>
		</article>
	);
};

export default Producto;
