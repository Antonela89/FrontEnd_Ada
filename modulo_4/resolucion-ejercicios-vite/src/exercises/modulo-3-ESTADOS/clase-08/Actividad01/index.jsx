import InputControlado from "./InputControlado";
import { HeaderActividad } from '@/components/common/HeaderActividad';

const Actividad01 = () => {
	return (
		<div className="activity-block">
			<HeaderActividad>
                {"Actividad 1: Input Controlado"}
            </HeaderActividad>
			<InputControlado />
		</div>
	);
};

export default Actividad01;
