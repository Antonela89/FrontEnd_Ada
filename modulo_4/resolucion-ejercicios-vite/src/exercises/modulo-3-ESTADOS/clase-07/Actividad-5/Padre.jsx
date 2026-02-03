import Hijo from './Hijo';

const Padre = () => {
	return (
		<div>
			<Hijo accion={() => alert('Hola desde el componente Padre')} />
		</div>
	);
};

export default Padre;
