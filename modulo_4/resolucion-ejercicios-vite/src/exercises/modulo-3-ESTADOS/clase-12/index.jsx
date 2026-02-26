import HeaderClase from '@/components/HeaderClase';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Actividad01 from './Actividad01';
import Actividad02 from './Actividad02';
import Actividad03 from './Actividad03';
import Actividad04 from './Actividad04';

const Clase12 = () => {
	return (
		<>
			<HeaderClase numero="12" titulo="Práctica Estados II" />

			<div>
				<h2 className="theory-subtitle">Hook useEffect</h2>
				<div className="code-container">
					<SyntaxHighlighter
						language="jsx"
						style={oneDark}
						wrapLongLines={true}
						customStyle={{
							margin: 0,
							padding: 0,
							fontSize: '0.875rem',
							backgroundColor: 'transparent', 
						}}
						codeTagProps={{
							style: { fontFamily: 'inherit' }, 
						}}
					>
{`import { useEffect, useState } from 'react'; // importar el hook useEffect y useState

const Acividad01 = () => {
	const [second, setSecond] = useState(0); // declarar el estado second y su función setSecond para actualizarlo , inicializado en 0

	useEffect(() => {
		const interval = setInterval(() => { // usar el hook useEffect para ejecutar una función cada vez que el componente se renderiza
			setSecond((prev) => prev + 1);
		}, 1000);

		return () => {
			clearInterval(interval); // limpiar el intervalo cuando el componente se desmonte para evitar fugas de memoria
		};
	}, []);

	return <div>{second}</div>; // renderizar el valor del estado second en un div
};

export default Acividad01;
`}
					</SyntaxHighlighter>
				</div>
			</div>

			<div className="activity-block">
				<Actividad01 />
			</div>
			<div className="activity-block">
				<Actividad02 />
			</div>
			<div className="activity-block">
				<Actividad03 />
			</div>
			<div className="activity-block">
				<Actividad04 />
			</div>
		</>
	);
};

export default Clase12;
