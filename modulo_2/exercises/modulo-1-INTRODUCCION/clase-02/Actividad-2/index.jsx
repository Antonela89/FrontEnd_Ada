import { HeaderActividad } from '../../../../components/common/HeaderActividad.jsx';
import { SeccionTeoria } from '../../../../components/common/SeccionTeoria'
import { Saludo } from './Saludo'; // Con llaves (Nombrado)
import Despedida from './Despedida'; // Sin llaves (Default)

const Actividad02 = () => {

	const teoriaModulos = [
		{
			subtitulo: 'Diferencia de Exportaciones',
			preguntas: [
				{
					q: 'Export Nombrado (export const...)',
					a: 'Se usa para exportar múltiples elementos de un archivo. Al importar, se debe usar exactamente el mismo nombre entre llaves { }.',
				},
				{
					q: 'Export Default (export default...)',
					a: 'Se usa para la exportación principal del archivo. Solo puede haber uno por archivo y se puede importar con cualquier nombre sin usar llaves.',
				},
			],
		},
	];

	return (
		<>
			<HeaderActividad>Actividad 2: Export nombrado vs Export Default</HeaderActividad>
			<Saludo mostrar={true}/>
			<Despedida  mostrar={true}/>

			<SeccionTeoria
					titulo="Teoría de Módulos (ES6)"
					secciones={teoriaModulos}
				/>
		</>
	);
};

export default Actividad02;
