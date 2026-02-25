import { HeaderActividad } from '@/components/common/HeaderActividad';
import HandleBackground from './HandleBackground';

const index = () => {
	return (
		<div className="activity-block">
			<HeaderActividad>
				{'Actividad 1: Cambiar color de fondo'}
			</HeaderActividad>
            <HandleBackground />
		</div>
	);
};

export default index;
