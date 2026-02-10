import { HeaderActividad } from '@/components/common/HeaderActividad';
import Contador from './Contador';

const Actividad02 = () => {
  return (
    <div className="activity-block">
      <HeaderActividad>{'Actividad 2: Contador con múltiples acciones'}</HeaderActividad>
      <Contador />
    </div>
  )
}

export default Actividad02
