import { HeaderActividad } from '../../../../components/common/HeaderActividad';
import EstadoCarga from './EstadoCarga';

const Actividad03 = () => {
	return (
		<div>
			<HeaderActividad>
				Actividad 03: Operador ternario = condición ? true : false
			</HeaderActividad>
            <h4 className="qa-question">loading: true</h4>
            <EstadoCarga loading/>
            <h4 className="qa-question">loading: false</h4>
            <EstadoCarga/>
		</div>
	);
};

export default Actividad03;
