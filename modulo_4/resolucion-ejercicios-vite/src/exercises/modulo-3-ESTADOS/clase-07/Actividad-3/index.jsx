import { HeaderActividad } from '@/components/common/HeaderActividad';
import ListaTareas from './ListaTareas';


const Actividad3 = () => {
	return (
		<div className="activity-block">
			<HeaderActividad>
				{"Actividad 3:"}
			</HeaderActividad>
			<ListaTareas />
		</div>
	);
};

export default Actividad3;