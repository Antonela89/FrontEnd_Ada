import HeaderClase from '@/components/HeaderClase';
import Actividad01 from './Actividad01';
import Actividad02 from './Actividad02';
import Actividad03 from './Actividad03';
import Actividad04 from './Actividad04';

const Clase12 = () => {
	return (
		<>
			<HeaderClase
				numero="12"
				titulo="Práctica Estados II"
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

export default Clase12;
