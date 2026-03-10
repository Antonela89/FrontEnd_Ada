import { HeaderActividad } from '@/components/common/HeaderActividad';
import Post from './Post/Post';

const Actividad02 = () => {
  return (
    <div className="activity-block">
			<HeaderActividad>
				{'Actividad 2: Contador de Likes para Post'}
			</HeaderActividad>
      <Post/>
      </div>
  )
}

export default Actividad02
