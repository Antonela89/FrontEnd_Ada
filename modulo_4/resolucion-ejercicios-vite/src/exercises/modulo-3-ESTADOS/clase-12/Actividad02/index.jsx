import { HeaderActividad } from '@/components/common/HeaderActividad';
import ToggleTheme from './ToggleTheme';

const Acividad02 = () => {
  return (
   <div className="activity-block">
      <HeaderActividad>
        {'Actividad 2: Modo Claro / Oscuro'}
      </HeaderActividad>
      <ToggleTheme />
    </div>
  )
}

export default Acividad02
