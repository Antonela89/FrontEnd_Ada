import { HeaderActividad } from '@/components/common/HeaderActividad';
import ItemList from './ItemList';

const Acividad03 = () => {
	const listaItems = [
		{ nombre: 'Servidor caído', tipo: 'error' },
		{ nombre: 'Pago procesado', tipo: 'success' },
		{ nombre: 'Error de validación', tipo: 'error' },
	];

	return (
		<div className="activity-block">
			<HeaderActividad>
				{'Actividad 3: Avanzado: Lista de items con estilos dinámicos'}
			</HeaderActividad>
      <ItemList items={listaItems}/>
		</div>
	);
};

export default Acividad03;
