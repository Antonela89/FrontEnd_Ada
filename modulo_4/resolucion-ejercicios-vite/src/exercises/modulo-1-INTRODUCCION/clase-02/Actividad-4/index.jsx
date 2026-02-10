import { HeaderActividad } from '@/components/common/HeaderActividad';
import Integracion from './Integracion';
// IMPORTACIÓN DE OTRO ARCHIVO (Actividad 2)
import { Saludo } from '../Actividad-2/Saludo';
import  Despedida  from '../Actividad-2/Despedida';

const Actividad04 = () => {
	const datosWeb = {
		nombre: 'Antonela',
		temas: [
			'JSX profundo',
			'Renderizado de listas',
			'Fragmentos',
			'Props dinámicas',
		],
		pendiente: true,
	};

	return (
		<div className="activity-block">
			<HeaderActividad>Actividad 4: Integración Total</HeaderActividad>

			<div style={{ marginBottom: '20px' }}>
				<Saludo nombre={datosWeb.nombre}/>
			</div>

			<Integracion
				usuario={datosWeb.nombre}
				temasAprendidos={datosWeb.temas}
				mostrarAlerta={datosWeb.pendiente}
			/>

            <div style={{ marginBottom: '20px' }}>
				<Despedida />
			</div>
		</div>
	);
};

export default Actividad04;
