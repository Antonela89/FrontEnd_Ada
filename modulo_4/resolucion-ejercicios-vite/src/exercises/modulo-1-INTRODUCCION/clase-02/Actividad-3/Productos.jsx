const Productos = ({ lista }) => {
	return (
		<div className="overflow-x-auto rounded-(--radius-md)]">
			<table className="table-custom">
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
								{
									/* Condicional: Si es mayor a 100 muestra el badge */
									prod.precio > 100 ? (
										<span className="badge badge-premium">
											Premium
										</span>
									) : (
										<span className="badge badge-standard">
											Estándar
										</span>
									)
								}
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default Productos;
