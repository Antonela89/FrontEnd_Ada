import HeaderClase from '@/components/HeaderClase';
import Actividad01 from './Actividad-01';
import Actividad02 from './Actividad-02';
import Actividad03 from './Actividad-03';
import Actividad04 from './Actividad-04';

const Clase05 = () => {
	return (
		<>
			<HeaderClase
				numero="05"
				titulo="Renderizado condicional - Parte 2"
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

export default Clase05;
