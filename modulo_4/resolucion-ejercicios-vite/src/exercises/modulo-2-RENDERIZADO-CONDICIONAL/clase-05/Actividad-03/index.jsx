import { HeaderActividad } from '@/components/common/HeaderActividad';
import Producto from './Producto';

const Actividad03 = () => {
	const productos = [
		{ id: 1, nombre: 'Teclado Mecánico', precio: 85 },
		{ id: 2, nombre: 'Mouse Gamer', precio: 45 },
		{ id: 3, nombre: "Monitor 24'", precio: 150 },
	];

	return (
		<div className="activity-block">
			<HeaderActividad>
				{'Actividad 03: Renderizado de Lista con componente'}
			</HeaderActividad>
			<div>
				{productos.map((producto) => (
					<Producto key={producto.id} {...producto} />
				))}
			</div>
		</div>
	);
};

export default Actividad03;
