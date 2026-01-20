import Footer from './Footer';
import Header from './Header';
import Main from './Main';

const ContenedorLayout = ({children}) => {
	return (
		<div
			style={{
				border: '1px solid #334155',
				borderRadius: '10px',
				overflow: 'hidden',
			}}
		>
			<Header content={<strong>Mi Encabezado Pro</strong>} />
			<Main>
                {children}
            </Main>
			<Footer content={<span>© 2024 - Curso de React</span>} />
		</div>
	);
};

export default ContenedorLayout;
