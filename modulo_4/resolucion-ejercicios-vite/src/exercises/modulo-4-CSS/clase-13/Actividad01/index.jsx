import { HeaderActividad } from '@/components/common/HeaderActividad';
import Tarjeta from './Tarjeta';

const Acividad01 = () => {
  return (
    <div className="activity-block">
			<HeaderActividad>
				{'Actividad 1: Básico: Tarjeta con estilos en línea'}
			</HeaderActividad>
      <Tarjeta/>
    </div>
  )
}

export default Acividad01
