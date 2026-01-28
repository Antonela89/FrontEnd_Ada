import { HeaderActividad } from '../../../../components/common/HeaderActividad';
import Caja from './Caja';

const Actividad03 = () => {
	return (
		<div className="activity-block">
			<HeaderActividad>Clase 03: Uso de Children</HeaderActividad>
			<Caja>
				<h4 className="caja-title">Título dentro de Caja</h4>
				<p className="caja-description">
					Este párrafo está siendo pasado como "children".
				</p>
			</Caja>

			<Caja>
                <button className="btn-primary">
                    Incluso un botón como children
                </button>
            </Caja>
		</div>
	);
};

export default Actividad03;
