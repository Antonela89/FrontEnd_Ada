import Actividad01 from './Actividad-1';
import Perfil from './Actividad-2/Perfil';
import { HeaderActividad } from '@/components/common/HeaderActividad';
import { SeccionTeoria } from '@/components/common/SeccionTeoria';
import HeaderClase from '@/components/HeaderClase';

const Clase01 = () => {
	const infoTeoriaClase01 = [
		{
			subtitulo: '1. El archivo index.html',
			preguntas: [
				{
					q: '¿Qué hace el <div id="root">?',
					a: (
						<>
							Es el <strong>punto de montaje</strong>. Funciona
							como un espacio reservado en el HTML real. Es el
							lugar donde React "inyectará" dinámicamente toda la
							aplicación.
						</>
					),
				},
				{
					q: '¿Por qué es importante?',
					a: 'React necesita un lugar físico en el DOM para dibujar los componentes. Sin este div, la lógica de React no tendría dónde manifestarse visualmente.',
				},
				{
					q: '¿Qué pasa si se elimina o cambia el ID?',
					a: 'La aplicación se rompe. Veríamos una pantalla en blanco y un error en la consola, ya que React buscaría un ID que no existe para inicializarse.',
				},
			],
		},
		{
			subtitulo: '2. El archivo de entrada (main.jsx)',
			preguntas: [
				{
					q: '¿Qué hace ReactDOM.createRoot()?',
					a: "Crea la 'raíz' de React. Es la función que le dice a React: 'Toma el control de este elemento del DOM y prepárate para renderizar aquí'.",
				},
				{
					q: '¿Qué significa root.render()?',
					a: 'Es el disparador. Convierte tus componentes de React (JSX) en nodos del DOM real para que el navegador pueda mostrarlos.',
				},
			],
		},
	];

	const notaExtraClase01 = (
		<>
			Si cambiamos <code>&lt;App /&gt;</code> por{' '}
			<code>&lt;Perfil /&gt;</code> en el render principal, Vite reemplaza
			instantáneamente toda la interfaz por la tarjeta de perfil,
			demostrando que React renderiza lo que nosotros le indiquemos como
			componente raíz.
		</>
	);

	return (
		<>
			<HeaderClase
				numero="01"
				titulo="Introducción a React - Parte 1"
			/>
			<div className="activity-block">
				<HeaderActividad>Actividad 1: ¡Tu primer componente!</HeaderActividad>
				<Actividad01 />
			</div>

			<div className="activity-block">
				<HeaderActividad>Actividad 2: Componente con estructura anidada</HeaderActividad>
				<Perfil />
			</div>

			<div className="activity-block">
				<SeccionTeoria
					titulo="Actividad 3: Explorando la estructura del proyecto y ReactDOM"
					secciones={infoTeoriaClase01}
					notaExtra={notaExtraClase01}
				/>
			</div>
		</>
	);
};

export default Clase01;
