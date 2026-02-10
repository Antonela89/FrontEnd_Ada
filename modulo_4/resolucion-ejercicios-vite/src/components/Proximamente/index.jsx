const Proximamente = ({ clase, fecha }) => (
	<div className="status-container">
		<div className="status-icon">⏳</div>
		<h1 className="status-title">{clase.replace('-', ' ')}</h1>
		<p className="status-text">
			Esta clase aún no ha sido resuelta o está en proceso de desarrollo.
		</p>
		{fecha && <div className="date-badge">Disponible el: {fecha}</div>}
	</div>
);
export default Proximamente;
