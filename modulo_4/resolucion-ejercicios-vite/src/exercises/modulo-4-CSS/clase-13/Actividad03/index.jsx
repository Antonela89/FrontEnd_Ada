import { HeaderActividad } from '@/components/common/HeaderActividad';
import { CardProduct } from './CardProduct';

const Acividad03 = () => {
	return (
		<div className="activity-block">
			<HeaderActividad>
				{
					'Actividad 3: Avanzado: CardProducto: Estilos dinámicos + Íconos + Imágenes'
				}
			</HeaderActividad>
			<CardProduct />
		</div>
	);
};

export default Acividad03;
