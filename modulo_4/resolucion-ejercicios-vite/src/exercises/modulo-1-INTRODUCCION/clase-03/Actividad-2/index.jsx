import { HeaderActividad } from '../../../../components/common/HeaderActividad';
import Boton from './Boton';

const Actividad02 = () => {
	// Función para pasar al botón
	const handleClick = () => {
		alert("¡Botón clickeado desde el componente padre!");
	};

	return (
		<div>
			<HeaderActividad>Actividad 2: Botón con Eventos</HeaderActividad>
			<Boton text="Pulsar" onClick={handleClick} />
		</div>
	);
};

export default Actividad02;
