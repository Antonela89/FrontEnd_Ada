import Titulo from './Titulo';
import Descripcion from './Descripcion';
import Boton from './Boton';

const Perfil = () => {
	const cardStyle = {
		backgroundColor: '#fff',
		borderRadius: '15px',
		boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
		padding: '20px',
		maxWidth: '300px',
		textAlign: 'center',
		fontFamily: 'Arial, sans-serif',
		margin: '20px auto',
	};

	return (
		<article style={cardStyle}>
			<Titulo />
			<Descripcion />
			<Boton />
		</article>
	);
};

export default Perfil;
