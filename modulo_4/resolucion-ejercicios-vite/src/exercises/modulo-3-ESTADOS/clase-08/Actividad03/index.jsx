import { HeaderActividad } from '@/components/common/HeaderActividad';
import InputNoControlado from './InputNoControlado';

const Actividad03 = () => {
	return (
		<div className="activity-block">
			<HeaderActividad>
                {"Actividad 3: Input No Controlado con Botón"}
            </HeaderActividad>
			<InputNoControlado />
		</div>
	);
};

export default Actividad03
