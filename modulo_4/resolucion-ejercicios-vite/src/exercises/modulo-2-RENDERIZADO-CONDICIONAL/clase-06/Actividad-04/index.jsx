import { HeaderActividad } from '../../../../components/common/HeaderActividad';
import ListaAlumnas from './ListaAlumnas';

const Actividad04 = () => {
	const alumnas = [
		{
			nombre: 'Ana',
			asistencia: true,
		},
		{
			nombre: 'Bea',
			asistencia: false,
		},
		{
			nombre: 'Carla',
			asistencia: true,
		},
		{
			nombre: 'Diana',
			asistencia: false,
		},
		{
			nombre: 'Elena',
			asistencia: true,
		},
	];
	return (
		<div className="activity-block">
			<HeaderActividad>Actividad 04: Lista de Alumnas</HeaderActividad>
            <ListaAlumnas alumnas={alumnas} />
		</div>
	);
};

export default Actividad04;
