import { HeaderActividad } from '../../../../components/common/HeaderActividad';
import { tareas } from './tareas.js'
import Tasks from './Tasks';

const Actividad03 = () => {
	return (
		<div className="activity-block">
			<HeaderActividad>Actividad 03: Tareas</HeaderActividad>
			<Tasks tareas={tareas} />
		</div>
	);
};

export default Actividad03;
