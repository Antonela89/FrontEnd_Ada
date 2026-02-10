import { HeaderActividad } from '@/components/common/HeaderActividad';
import ContenedorLayout from './ContenedorLayout';
import Boton from '../Actividad-2/Boton';

const Actividad04 = () => {
	return (
		<div className="activity-block">
			<HeaderActividad>Actividad 4: Layout con Slots</HeaderActividad>

			<ContenedorLayout>
				{/* Todo esto entra como "children" al Main del Layout */}
				<div>
					<p>
						Este es el cuerpo de la página enviado como prop
						"children". El diseño está centralizado en el CSS.
					</p>
					<Boton
						text="Botón en Layout"
						onClick={() => console.log('Click desde el Slot!')}
					/>
				</div>
			</ContenedorLayout>
		</div>
	);
};

export default Actividad04;
