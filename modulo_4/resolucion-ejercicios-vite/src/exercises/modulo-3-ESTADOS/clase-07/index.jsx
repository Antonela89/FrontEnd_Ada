import HeaderClase from "@/components/HeaderClase";
import Actividad1 from "./Actividad-1";
import Actividad2 from "./Actividad-2";
import Actividad3 from "./Actividad-3";
import Actividad4 from "./Actividad-4";
import Actividad5 from "./Actividad-5";

const Clase07 = () => {
	return (
		<>
			<HeaderClase
				numero="07"
				titulo="useState - Práctica de Estados"
			/>
            <div className="activity-block">
				<Actividad1 />
			</div>
			<div className="activity-block">
				<Actividad2 />
			</div>
			<div className="activity-block">
				<Actividad3 />
			</div>
			<div className="activity-block">
				<Actividad4 />
			</div>
            <div className="activity-block">
				<Actividad5 />
			</div>
		</>
	);
};

export default Clase07;
