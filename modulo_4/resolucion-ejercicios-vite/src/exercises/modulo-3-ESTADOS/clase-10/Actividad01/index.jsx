import { HeaderActividad } from '@/components/common/HeaderActividad';
import Padre from './Padre';

const Acividad01 = () => {
	return (
		<div className="activity-block">
			<HeaderActividad>{'Actividad 1: Básico: Mensaje compartido'}</HeaderActividad>
			<Padre />
		</div>
	);
};

export default Acividad01;
