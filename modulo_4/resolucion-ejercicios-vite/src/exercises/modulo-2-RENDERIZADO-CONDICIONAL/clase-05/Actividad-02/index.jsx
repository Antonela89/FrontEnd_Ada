import { HeaderActividad } from '@/components/common/HeaderActividad';
import Tareas from './tareas';

const Actividad02 = () => {
	
	return (
		<div className='activity-block'>
			<HeaderActividad>
				{'Actividad 02: Renderizado de Tareas - Array de Objetos'}
			</HeaderActividad>
            <Tareas/>
		</div>
	);
};

export default Actividad02;
