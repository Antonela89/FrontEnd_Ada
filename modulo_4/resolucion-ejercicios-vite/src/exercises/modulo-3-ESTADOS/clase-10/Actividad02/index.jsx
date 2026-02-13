import { HeaderActividad } from '@/components/common/HeaderActividad';
import PadreContador from './PadreContador';

const Acividad02 = () => {
  return (
    <div className="activity-block items-center">
			<HeaderActividad>{'Actividad 2: Intermedio: Contador compartido con botones'}</HeaderActividad>
      <PadreContador/>
    </div>
  )
}

export default Acividad02
