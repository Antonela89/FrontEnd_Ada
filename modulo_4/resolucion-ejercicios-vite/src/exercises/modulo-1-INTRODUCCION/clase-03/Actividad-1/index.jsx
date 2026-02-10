import { HeaderActividad } from '@/components/common/HeaderActividad';
import Saludo from './Saludo';

const Activiad01 = () => {
	return (
		<>
			<HeaderActividad>Actividad 1: Saludos con props</HeaderActividad>
			<h4 className="qa-answer">Saludo con props:</h4>
			<Saludo nombre="Antonela" />
			<h4 className="qa-answer">Saludo con props por default:</h4>
			<Saludo />
		</>
	);
};

export default Activiad01;
