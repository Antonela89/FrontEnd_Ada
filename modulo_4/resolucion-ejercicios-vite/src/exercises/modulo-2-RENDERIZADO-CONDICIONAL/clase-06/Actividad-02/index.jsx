import { HeaderActividad } from '@/components/common/HeaderActividad';
import User from './User.jsx';
import { usuarios } from './usuario.js';

const Actividad02 = () => {
	return (
		<div className="activity-block">
			<HeaderActividad>Actividad 02: Perfil de Usuarios</HeaderActividad>
			<div className="grid-container">
				{usuarios.map((usuario, index) => (
					<User key={index} usuario={usuario} />
				))}
			</div>
		</div>
	);
};

export default Actividad02;
