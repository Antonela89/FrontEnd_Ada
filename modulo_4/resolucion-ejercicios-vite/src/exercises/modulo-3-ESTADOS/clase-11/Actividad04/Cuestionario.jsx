// import { useState } from "react";
import Pregunta from './Pregunta';
import { reactQuiz } from './data';

const Cuestionario = () => {
	return (
		<>
			<Pregunta lista={reactQuiz} />
		</>
	);
};

export default Cuestionario;
