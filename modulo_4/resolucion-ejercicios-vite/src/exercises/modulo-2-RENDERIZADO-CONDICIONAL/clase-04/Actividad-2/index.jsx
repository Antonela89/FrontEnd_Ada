import { HeaderActividad } from '../../../../components/common/HeaderActividad';
import { SeccionTeoria } from '../../../../components/common/SeccionTeoria';
import Notificacion from './Notificacion';

const Actividad02 = () => {
	const infoNull = [
		{
			subtitulo: 'Explicación del renderizado nulo',
			preguntas: [
				{
					q: 'Resultado de Cantidad: false',
					a: "Al pasar un valor que no cumple 'cantidad > 0', el componente retorna null. En el inspector de elementos verás que no se generó ninguna etiqueta HTML aquí.",
				},
			],
		},
	];

	return (
		<div className='activity-block'>
			<HeaderActividad>Actividad 02: null</HeaderActividad>
			<h4 className="qa-question">
				Caso con Notificaciones (cantidad={2}):
			</h4>
			<Notificacion cantidad={2} />

			<h4 className="qa-question">
				Caso sin Notificaciones (cantidad={0}):
			</h4>
			<Notificacion cantidad={0} />

			<SeccionTeoria
				titulo="¿Por qué no se ve nada arriba?"
				secciones={infoNull}
			/>
		</div>
	);
};

export default Actividad02;
