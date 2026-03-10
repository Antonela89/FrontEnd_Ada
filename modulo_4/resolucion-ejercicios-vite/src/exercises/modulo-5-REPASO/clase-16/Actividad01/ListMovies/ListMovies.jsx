import style from './ListMovies.module.css';
import moviesList from '../data/movies';
import Movie from '../Movie/Movie';

const ListMovies = () => {
	return (
		<div className={style.containerMovies}>
			{moviesList.map((movie) => (
				<Movie key={movie.id} movie={movie} />
			))}
		</div>
	);
};

export default ListMovies;
