import './Productos.css';

const Productos = ({ lista }) => {
	return (
		<table className="table-container">
			<thead>
				<tr>
					<th>Nombre del Producto</th>
					<th>Precio</th>
					<th>Categoría</th>
				</tr>
			</thead>
			<tbody>
				{lista.map((prod) => (
					<tr key={prod.id}>
						<td>{prod.nombre}</td>
						<td className="price-text">${prod.precio}</td>
						<td>
							{/* Condicional: Si es mayor a 100 muestra el badge */
                            prod.precio > 100 ? (
								<span className="badge-premium">Premium</span>
							) : (
								<span style={{ color: '#64748b' }}>
									Estándar
								</span>
							)}
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default Productos;
