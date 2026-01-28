import Footer from './Footer';
import Header from './Header';
import Main from './Main';

const ContenedorLayout = ({ children, customHeader, customFooter }) => {
	return (
		<div className="slot-container">
			<Header
				content={customHeader || <strong>Mi Encabezado Pro</strong>}
			/>
			<Main>{children}</Main>
			<Footer
				content={customFooter || <span>© 2026 - Curso de React</span>}
			/>
		</div>
	);
};

export default ContenedorLayout;
