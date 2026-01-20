import { HeaderActividad } from '../../../../components/common/HeaderActividad';
import Caja from './Caja';

const Actividad03 = () => {
	return (
		<div>
			<HeaderActividad>Clase 03: Uso de Children</HeaderActividad>
			<Caja>
				<h4 style={{ color: '#f8fafc', margin: 0 }}>
					Título dentro de Caja
				</h4>
				<p style={{ color: '#94a3b8', margin: '10px 0 0 0' }}>
					Este párrafo está siendo pasado como "children".
				</p>
			</Caja>
		</div>
	);
};

export default Actividad03;
