import Actividad01 from './Actividad-1';
import Actividad02 from './Actividad-2';
import Actividad03 from './Actividad-3';
import Actividad04 from './Actividad-4';
import { SeccionTeoria } from '../../../components/common/SeccionTeoria';

const teoriaCondicionales = [
	{
		subtitulo: "1. El valor 'null'",
		preguntas: [
			{
				q: '¿Qué sucede cuando un componente retorna null?',
				a: "React no dibuja nada en el DOM. Es la forma correcta de 'ocultar' un componente basándonos en una condición sin romper la aplicación.",
			},
		],
	},
	{
		subtitulo: '2. Operador de cortocircuito (&&)',
		preguntas: [
			{
				q: '¿Cuándo es mejor usar && en lugar de un ternario?',
				a: "Se utiliza cuando solo nos importa que algo se muestre si la condición es verdadera, y no necesitamos un 'else' o un estado alternativo.",
			},
		],
	},
];

const Clase04 = () => {
	return (
		<div>
			<div className="activity-block">
				<Actividad01 />
			</div>
			<div className="activity-block">
				<Actividad02 />
			</div>
			<div className="activity-block">
				<Actividad03 />
			</div>
			<div className="activity-block">
				<Actividad04 />
			</div>
			<SeccionTeoria
				titulo="Más sobre null y &&"
				secciones={teoriaCondicionales}
			/>
		</div>
	);
};

export default Clase04;
