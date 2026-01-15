const Actividad03 = () => {
	return (
		<div style={styles.container}>
			<h2 style={styles.mainTitle}>Actividad 3: Estructura y ReactDOM</h2>

			{/* Sección 1: index.html */}
			<section style={styles.section}>
				<h3 style={styles.sectionTitle}>1. El archivo index.html</h3>

				<div style={styles.qaGroup}>
					<h4 style={styles.question}>
						¿Qué hace el &lt;div id="root"&gt;?
					</h4>
					<p style={styles.answer}>
						Es el <strong>punto de montaje</strong>. Funciona como
						un espacio reservado en el HTML real. Es el lugar donde
						React "inyectará" dinámicamente toda la aplicación.
					</p>
				</div>

				<div style={styles.qaGroup}>
					<h4 style={styles.question}>¿Por qué es importante?</h4>
					<p style={styles.answer}>
						React necesita un lugar físico en el DOM para dibujar
						los componentes. Sin este div, la lógica de React no
						tendría dónde manifestarse visualmente.
					</p>
				</div>

				<div style={styles.qaGroup}>
					<h4 style={styles.question}>
						¿Qué pasa si se elimina o cambia el ID?
					</h4>
					<p style={styles.answer}>
						La aplicación se rompe. Veríamos una pantalla en blanco
						y un error en la consola, ya que React buscaría un ID
						que no existe para inicializarse.
					</p>
				</div>
			</section>

			{/* Sección 2: main.jsx (Vite) */}
			<section style={styles.section}>
				<h3 style={styles.sectionTitle}>
					2. El archivo de entrada (main.jsx)
				</h3>

				<div style={styles.qaGroup}>
					<h4 style={styles.question}>
						¿Qué hace ReactDOM.createRoot()?
					</h4>
					<p style={styles.answer}>
						Crea la "raíz" de React. Es la función que le dice a
						React: "Toma el control de este elemento del DOM y
						prepárate para renderizar aquí".
					</p>
				</div>

				<div style={styles.qaGroup}>
					<h4 style={styles.question}>
						¿Qué significa root.render()?
					</h4>
					<p style={styles.answer}>
						Es el disparador. Convierte tus componentes de React
						(JSX) en nodos del DOM real para que el navegador pueda
						mostrarlos.
					</p>
				</div>
			</section>

			{/* Sección Extra */}
			<div style={styles.extraBox}>
				<h4 style={{ color: '#fbbf24', marginTop: 0 }}>
					✨ Nota sobre el cambio de componente
				</h4>
				<p style={{ margin: 0, fontSize: '0.9rem' }}>
					Si cambiamos <code>&lt;App /&gt;</code> por{' '}
					<code>&lt;Perfil /&gt;</code> en el render principal, Vite
					reemplaza instantáneamente toda la interfaz por la tarjeta
					de perfil, demostrando que React renderiza lo que nosotros
					le indiquemos como componente raíz.
				</p>
			</div>
		</div>
	);
};

// Estilos internos para mantener el componente autocontenido
const styles = {
	container: {
		padding: '20px',
		lineHeight: '1.6',
	},
	mainTitle: {
		color: '#3b82f6',
		borderBottom: '1px solid #334155',
		paddingBottom: '10px',
		marginBottom: '20px',
	},
	section: {
		marginBottom: '30px',
	},
	sectionTitle: {
		color: '#94a3b8',
		fontSize: '1.1rem',
		textTransform: 'uppercase',
		letterSpacing: '1px',
		marginBottom: '15px',
	},
	qaGroup: {
		marginBottom: '15px',
		paddingLeft: '15px',
		borderLeft: '2px solid #3b82f6',
	},
	question: {
		color: '#f8fafc',
		margin: '0 0 5px 0',
		fontSize: '1rem',
	},
	answer: {
		color: '#94a3b8',
		margin: 0,
		fontSize: '0.95rem',
	},
	extraBox: {
		backgroundColor: '#1e293b',
		padding: '15px',
		borderRadius: '8px',
		border: '1px solid #fbbf24',
		marginTop: '20px',
	},
};

export default Actividad03;
