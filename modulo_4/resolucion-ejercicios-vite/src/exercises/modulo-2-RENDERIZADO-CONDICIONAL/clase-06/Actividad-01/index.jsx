import { HeaderActividad } from '@/components/common/HeaderActividad';
import ListaProductos from './ListaProductos';

const Actividad01 = () => {
	return (
		<div className="activity-block">
			<HeaderActividad>Actividad 01: Lista de Productos</HeaderActividad>
			<ListaProductos />
		</div>
	);
};

export default Actividad01;
