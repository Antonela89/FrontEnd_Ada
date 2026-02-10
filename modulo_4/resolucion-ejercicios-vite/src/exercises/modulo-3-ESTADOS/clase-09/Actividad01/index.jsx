import { HeaderActividad } from '@/components/common/HeaderActividad';
import Contador from './Contador';

const Actividad01 = () => {
	return (
		<div className="activity-block">
			<HeaderActividad>{'Actividad 1: Contador básico'}</HeaderActividad>
			<Contador />
		</div>
	);
};

export default Actividad01;
