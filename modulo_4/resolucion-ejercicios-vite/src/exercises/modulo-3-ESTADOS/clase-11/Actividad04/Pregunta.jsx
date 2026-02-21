import { useState } from 'react';
import Card from './Card';
import Resultado from './Resultado';

const Pregunta = ({ lista }) => {
	// indice
	const [currentIndex, setCurrentIndex] = useState(0);
	// puntos acumulados
	const [puntos, setPuntos] = useState(0);
	// eleccion del usuario
	const [seleccionado, setSeleccionado] = useState(null);

	const quizTerminado = currentIndex === lista.length;
	const preguntaActual = lista[currentIndex];

	const handleNext = () => {
		//Validar si la respuesta es correcta antes de pasar
		if (seleccionado === preguntaActual.respuestaCorrecta) {
			setPuntos(puntos + 1);
		}

		// Avanzar y resetear la selección para la próxima pregunta
		setCurrentIndex((prev) => prev + 1);
		setSeleccionado(null);
	};

	if (quizTerminado) {
		// Pasamos el puntaje total al componente Resultado
		return <Resultado puntos={puntos} total={lista.length} />;
	}

	return (
		<div className="p-5 flex flex-col gap-4">
			<div className="flex justify-end">
				<p>
					<span className="font-bold text-blue-500">
						{currentIndex + 1}
					</span>{' '}
					de <span>{lista.length}</span>
				</p>
			</div>
			<Card
				elemento={preguntaActual}
				setSeleccionado={setSeleccionado}
				seleccionado={seleccionado}
			/>
			<div className="flex justify-end">
				<button
					className="btn-primary"
					onClick={handleNext}
					disabled={seleccionado === null}
				>
					{currentIndex === lista.length - 1
						? 'Finalizar'
						: 'Siguiente'}
				</button>
			</div>
		</div>
	);
};

export default Pregunta;
