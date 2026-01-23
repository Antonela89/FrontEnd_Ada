import { HeaderActividad } from "../../../../components/common/HeaderActividad";
import LoginStatus from "./LoginStatus";


const Actividad01 = () => {
	return (
		<div>
			<HeaderActividad>
				{'Actividad 01: if/else = if (condición) {true} else {false}'}
			</HeaderActividad>
			<h4 className="qa-question">isLoggedIn: true</h4>
			<LoginStatus isLoggedIn />
			<h4 className="qa-question">isLoggedIn: false</h4>
			<LoginStatus />
		</div>
	);
};

export default Actividad01;
