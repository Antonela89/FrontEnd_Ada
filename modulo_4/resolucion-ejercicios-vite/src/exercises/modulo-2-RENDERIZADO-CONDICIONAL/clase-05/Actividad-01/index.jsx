import { HeaderActividad } from '../../../../components/common/HeaderActividad';
import Array from './Array';

const Actividad01 = () => {
	return (
		<div className='activity-block'>
			<HeaderActividad>
				{'Actividad 01: Renderizado de Lista - Array de String'}
			</HeaderActividad>
            <Array/>
		</div>
	);
};

export default Actividad01;
