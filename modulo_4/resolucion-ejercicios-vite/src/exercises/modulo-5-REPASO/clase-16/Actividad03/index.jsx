import { HeaderActividad } from '@/components/common/HeaderActividad';
import ListProduct from './ListProduct/ListProduct';

const Actividad03 = () => {
  return (
    <div className="activity-block">
			<HeaderActividad>
				{'Actividad 3: Carrito de Compras Dinámicos'}
			</HeaderActividad>
      <ListProduct/>
    </div>
  )
}

export default Actividad03
