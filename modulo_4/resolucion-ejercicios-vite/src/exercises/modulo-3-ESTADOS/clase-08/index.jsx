import HeaderClase from '../../../components/HeaderClase';
import Actividad01 from './Actividad01';
import Actividad02 from './Actividad02';
import Actividad03 from './Actividad03';

const Clase08 = () => {
	return (
		<>
			<HeaderClase numero="08" titulo="Formularios controlados vs no controlados" />
			<div className="activity-block">
				<Actividad01 />
			</div>
			<div className="activity-block">
				<Actividad02 />
			</div>
			<div className="activity-block">
				<Actividad03 />
			</div>
		</>
	);
};

export default Clase08;
