import { HeaderActividad } from '@/components/common/HeaderActividad';
import Boton from './Boton';

const Acividad01 = () => {
	return (
		<div className="activity-block">
			<HeaderActividad>
				{'Actividad 1: Básico: Botón simple con CSS Modules'}
			</HeaderActividad>
			<Boton tipo="success">Éxito!</Boton>
			<Boton tipo="error">Ha ocurrido un error</Boton>
		</div>
	);
};

export default Acividad01;
