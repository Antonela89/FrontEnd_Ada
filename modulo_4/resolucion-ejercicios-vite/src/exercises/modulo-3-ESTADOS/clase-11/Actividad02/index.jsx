import { HeaderActividad } from '@/components/common/HeaderActividad';
import AppTareas from './AppTareas';

const Acividad02 = () => {
  return (
    <div className="activity-block">
      <HeaderActividad>{'Actividad 2: Lista de tareas compartida'}</HeaderActividad>
      <AppTareas/>
    </div>
  )
}

export default Acividad02
