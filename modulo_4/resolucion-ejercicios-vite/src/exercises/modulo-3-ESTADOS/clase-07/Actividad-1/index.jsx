import { HeaderActividad } from '@/components/common/HeaderActividad';
import Contador from './Contador';

const Actividad1 = () => {
	return (
		<div className="activity-block">
			<HeaderActividad>
				{"Actividad 1: Uso de useState"}
			</HeaderActividad>
            <Contador/> 
		</div>
	);
};

export default Actividad1;
