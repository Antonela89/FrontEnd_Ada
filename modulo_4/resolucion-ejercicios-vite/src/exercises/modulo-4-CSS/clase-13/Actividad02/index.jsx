import { HeaderActividad } from '@/components/common/HeaderActividad';
import { Button } from './Button';

const Acividad02 = () => {
	const buttonsContainerStyles = "flex flex-col items-center justify-center w-full border border-border p-6 rounded-xl w-full xl:w-1/3 mx-auto flex flex-col gap-4 items-center";

	return (
		<div className="activity-block">
			<HeaderActividad>
				{'Actividad 2: Intermedio: Botones con Módulos CSS'}
			</HeaderActividad>

			<div className={buttonsContainerStyles}>
				<Button variant="primary" />
				<Button variant="secondary" />	
				<Button /> {/* Por defecto es primary */}
			</div>
		</div>
	);
};

export default Acividad02;
