import { useState } from 'react';

const Carrito = () => {
	const [carrito, setCarrito] = useState([]);

	return (
		<>
			<div className="flex gap-2">
				<button
					className="btn-primary"
					onClick={() =>
						setCarrito([
							...carrito,
							'Producto ' + (carrito.length + 1),
						])
					}
				>
					Agregar Producto
				</button>
				<button className="btn-danger" onClick={() => setCarrito([])}>
					Vaciar Carrito
				</button>
			</div>
			{carrito.length === 0 ? (
				<p className="mensaje-box danger">El carrito está vacío</p>
			) : (
				<>
					<ul className="list-container">
						{carrito.map((item, index) => (
							<li className="list-item" key={index}>
								{item}
							</li>
						))}
					</ul>
					<p className="mensaje-box">
						Total de productos: {carrito.length}
					</p>
				</>
			)}
		</>
	);
};

export default Carrito;
