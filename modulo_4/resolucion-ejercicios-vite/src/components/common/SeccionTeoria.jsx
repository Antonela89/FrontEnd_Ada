import { HeaderActividad } from "./HeaderActividad";

export const SeccionTeoria = ({ titulo, secciones, notaExtra }) => (
	<div className="theory-container-custom">
		<HeaderActividad>{titulo}</HeaderActividad>

		{secciones.map((sec, idx) => (
			<section key={idx} className="theory-section">
				<h3 className="theory-subtitle">{sec.subtitulo}</h3>
				{sec.preguntas.map((p, pIdx) => (
					<div key={pIdx} className="qa-group">
						<h4 className="qa-question">{p.q}</h4>
						<p className="qa-answer">{p.a}</p>
					</div>
				))}
			</section>
		))}

		{notaExtra && (
			<div className="extra-info-box">
				<h4>✨ Nota</h4>
				<p>{notaExtra}</p>
			</div>
		)}
	</div>
);
