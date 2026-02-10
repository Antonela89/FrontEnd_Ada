import { HeaderActividad } from "@/components/common/HeaderActividad";
import SoloNumeros from "./SoloNumeros";

const Actividad02 = () => {
	return (
		<div className="activity-block">
			<HeaderActividad>
                {"Actividad 2: Validación con eventos de teclado"}
            </HeaderActividad>
			<SoloNumeros />
		</div>
	);
};
export default Actividad02
