import HeaderClase from '../../../components/HeaderClase';
import Actividad01 from './Actividad-1';
import Actividad02 from './Actividad-2';
import Actividad03 from './Actividad-3';
import Actividad04 from './Actividad-4';

const Clase03 = () => {
	return (
		<>
			<HeaderClase
				numero="03"
				titulo="Introducción a React - Parte 3"
			/>
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

export default Clase03;
