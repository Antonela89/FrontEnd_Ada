const Producto = ({ producto }) => {
    const productoEnOferta = producto.precio < 100;

	return (
		<article className="card">
			{productoEnOferta && <span className="badge badge-premium mb-4">¡Producto en oferta!</span>}
			<h3>{producto.nombre}</h3>
			<p>{producto.descripcion}</p>
			<p>Precio: ${producto.precio.toLocaleString()}</p>
		</article>
	);
};

export default Producto;
