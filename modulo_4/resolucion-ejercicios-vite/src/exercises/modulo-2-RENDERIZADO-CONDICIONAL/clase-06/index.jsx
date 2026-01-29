import { HeaderActividad } from '../../../components/common/HeaderActividad';
import Actividad01 from './Actividad-01';
import Actividad02 from './Actividad-02';
import Actividad03 from './Actividad-03';
import Actividad04 from './Actividad-04';

const Clase06 = () => {
	return (
		<>
			<HeaderActividad>Clase 06 - Práctica de componentes</HeaderActividad>
			<div className="activity-block">
				<Actividad01 />
			</div>
			<div className="activity-block">
				<Actividad02 />
			</div>
			<div className="activity-block">
				<Actividad03 />
			</div>
			<div className="activity-block">
				<Actividad04 />
			</div>
		</>
	);
};

export default Clase06;
