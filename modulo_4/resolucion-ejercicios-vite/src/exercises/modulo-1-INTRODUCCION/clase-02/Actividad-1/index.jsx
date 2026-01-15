import ListaTareas from "./ListaTareas";
import { HeaderActividad } from '../../../../components/common/HeaderActividad'; 

const misTareas = [
	{ id: 1, texto: 'Instalar dependencias de Vite', completada: true },
	{ id: 2, texto: 'Crear componentes reutilizables', completada: false },
	{ id: 3, texto: 'Configurar React Router', completada: true },
	{ id: 4, texto: 'Estilizar el dashboard con CSS', completada: false },
];

const index = () => {
	return (
		<>
			<HeaderActividad>Actividad 1: Lista de Tareas</HeaderActividad>
			<ListaTareas tareas={misTareas} />

			<HeaderActividad>Ejemplo de Lista Vacía:</HeaderActividad>
			<ListaTareas tareas={[]} />
		</>
	);
};

export default index;
