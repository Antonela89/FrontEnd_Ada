import { HeaderActividad } from '../../../../components/common/HeaderActividad';
import ContenedorLayout from './ContenedorLayout';
import  Boton  from '../Actividad-2/Boton'

const Actividad04 = () => {
	return (
		<div>
			<HeaderActividad>Actividad 4: Layout con Slots</HeaderActividad>
			<ContenedorLayout>
				<div>
					<p>
						Este es el cuerpo de la página enviado como prop
						"content".
					</p>
					<Boton
						text="Botón en Layout"
						onClick={() => console.log('Click!')}
					/>
				</div>
			</ContenedorLayout>
		</div>
	);
};

export default Actividad04;
