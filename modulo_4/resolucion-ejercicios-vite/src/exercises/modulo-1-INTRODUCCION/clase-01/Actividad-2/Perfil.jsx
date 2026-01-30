import Titulo from './Titulo';
import Descripcion from './Descripcion';
import Boton from './Boton';

const Perfil = () => {
	return (
		<div className='grid-container'>
			<article className="card">
				<Titulo />
				<Descripcion />
				<Boton />
			</article>
		</div>
	);
};

export default Perfil;
