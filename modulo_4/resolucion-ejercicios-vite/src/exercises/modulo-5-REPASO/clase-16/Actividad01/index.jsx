import { HeaderActividad } from '@/components/common/HeaderActividad';
import ListMovies from './ListMovies/ListMovies';

const Actividad01 = () => {
	return (
		<div className="activity-block">
			<HeaderActividad>
				{'Actividad 1:  Lista de Películas Favoritas'}
			</HeaderActividad>
      <ListMovies/>
		</div>
	);
};

export default Actividad01;
