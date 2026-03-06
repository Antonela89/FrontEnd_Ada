import { HeaderActividad } from '@/components/common/HeaderActividad';
import Button from './Button';

const Acividad02 = () => {
  return (
    <div className='activity-block'>
        <HeaderActividad>
				{'Actividad 2: Botones con Módulos CSS'}
			</HeaderActividad>
      <Button />
      <Button variant='primary'/>
      <Button variant='secondary'/>
      <Button variant='danger'/>
    </div>
  )
}

export default Acividad02
