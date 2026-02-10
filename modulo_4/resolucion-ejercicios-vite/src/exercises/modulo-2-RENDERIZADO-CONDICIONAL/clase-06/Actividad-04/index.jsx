import { HeaderActividad } from '@/components/common/HeaderActividad';
import ListaAlumnas from './ListaAlumnas';
import { alumnas } from './alumnas.js';

const Actividad04 = () => {
	return (
		<div className="activity-block">
			<HeaderActividad>Actividad 04: Lista de Alumnas</HeaderActividad>
            <ListaAlumnas alumnas={alumnas} />
		</div>
	);
};

export default Actividad04;
