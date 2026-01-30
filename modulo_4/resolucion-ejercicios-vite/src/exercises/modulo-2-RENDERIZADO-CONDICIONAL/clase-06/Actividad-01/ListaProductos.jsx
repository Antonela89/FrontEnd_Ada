import Producto from './Producto';
import {productos} from './productos.js';

const ListaProductos = () => {
	return (
		<div className='grid-container'>
			{productos.map((producto) => (
				<Producto key={producto.id} producto={producto} />
			))}
		</div>
	);
};

export default ListaProductos;
