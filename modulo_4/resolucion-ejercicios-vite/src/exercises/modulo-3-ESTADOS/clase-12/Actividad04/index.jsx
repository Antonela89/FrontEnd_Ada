import { HeaderActividad } from '@/components/common/HeaderActividad';
import Carrito from './Carrito';

const Actividad04 = () => {
	return (
		<div className="activity-block">
			<HeaderActividad>
				{'Actividad 4: Carrito de Compras'}
			</HeaderActividad>
      <Carrito/>
		</div>
	);
};

export default Actividad04;
