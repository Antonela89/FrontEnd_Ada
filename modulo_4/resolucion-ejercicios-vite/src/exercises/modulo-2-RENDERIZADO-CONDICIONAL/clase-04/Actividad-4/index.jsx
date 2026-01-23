import { HeaderActividad } from '../../../../components/common/HeaderActividad';
import { SeccionTeoria } from '../../../../components/common/SeccionTeoria';
import Mensaje from './Mensaje';

<div className="extra-info-box" style={{ marginTop: '20px' }}>
	<h4>💡 </h4>
	<p></p>
</div>;

const Actividad04 = () => {
	const Cortocircuito = [
		{
			subtitulo: 'Concepto de Cortocircuito',
			preguntas: [
				{
					q: 'Resultado de usar &&',
					a: 'En "condicion && Componente", si la condición es "false", JavaScript ni siquiera evalúa lo que viene después. Por eso, cuando "hayMensajes" es falso, no se renderiza nada.',
				},
			],
		},
	];
	return (
		<div>
			<HeaderActividad>Actividad 04: Operador &&</HeaderActividad>
			<h4 className="qa-question">hayMensajes: true</h4>
			<Mensaje hayMensajes />
			<h4 className="qa-question">hayMensajes: false</h4>
			<Mensaje />

			<SeccionTeoria
				titulo="¿Por qué no se ve nada arriba?"
				secciones={Cortocircuito}
			/>
		</div>
	);
};

export default Actividad04;
