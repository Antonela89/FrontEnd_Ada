import { useState } from 'react';

const Carrito = () => {
	const [carrito, setCarrito] = useState([]);

	return (
		<>
			<h2>Carrito de Compras</h2>
			<button
				onClick={() =>
					setCarrito([...carrito, 'Producto ' + (carrito.length + 1)])
				}
			>
				Agregar Producto
			</button>
			{carrito.length === 0 ? (
				<p>El carrito está vacío</p>
			) : (
				<ul>
					{carrito.map((item, index) => (
						<li key={index}>{item}</li>
					))}
                <p>Total de productos: {carrito.length}</p>
				</ul>
			)}
		</>
	);
};

export default Carrito;
