import style from './Movie.module.css';

const Movie = ({ movie }) => {
	const { name, image, year, rating } = movie;
	return (
		<article className={style.containerMovie}>
			<div className={style.overlay}></div>
			<img className={style.movieImage} src={image} alt={name} />
			<h3 className={style.title}>{name}</h3>
			<p className={style.year}>{year}</p>
			<p className={style.rating}>
				{'⭐'.repeat(Math.round(rating))}
				{` (${rating}/10)`}
			</p>
		</article>
	);
};

export default Movie;


// Otro ejemplo para hacer el rating
// const Rating = ({ rating = 8.6, totalStars = 10 }) => {
//   return (
//     <div style={{ display: 'flex', gap: '5px' }}>
//       {[...Array(totalStars)].map((_, index) => {
//         const starIndex = index + 1;
//         return (
//           <span 
//             key={index} 
//             style={{ 
//               color: starIndex <= rating ? '#ffc107' : '#e4e5e9', 
//               fontSize: '2rem' 
//             }}
//           >
//             {/* Entidad HTML para estrella rellena: ★ */}
//             &#9733; 
//           </span>
//         );
//       })}
//     </div>
//   )
// }

// export default Rating