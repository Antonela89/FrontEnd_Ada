import { HeaderActividad } from '@/components/common/HeaderActividad';
import Card from './Card';

const Acividad02 = () => {
	return (
		<div className="activity-block">
			<HeaderActividad>
				{'Actividad 2: Intermedio: Card con múltiples estilos'}
			</HeaderActividad>
			<Card tipo="alert" destacado={true}>
				<h3>Atención</h3>
				<p>Esta es una tarjeta de alerta destacada.</p>
			</Card>
			<Card destacado={false}>
				<h3>Info</h3>
				<p>Tarjeta estándar.</p>
			</Card>
		</div>
	);
};

export default Acividad02;
