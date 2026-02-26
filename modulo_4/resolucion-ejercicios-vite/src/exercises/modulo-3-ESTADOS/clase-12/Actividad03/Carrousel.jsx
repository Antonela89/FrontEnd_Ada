import { useState } from 'react';

const Carrousel = () => {
	const images = [
		'https://images.pexels.com/photos/14371564/pexels-photo-14371564.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
		'https://images.pexels.com/photos/2629372/pexels-photo-2629372.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
		'https://images.pexels.com/photos/12541926/pexels-photo-12541926.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
	];

	const [currentIndex, setCurrentIndex] = useState(0);
	return (
		<div className='div-container-row justify-center'>
			<img
				src={images[currentIndex]}
				alt={`Image ${currentIndex + 1}`}
                style={{ width: '200px', aspectRatio: '1/1', objectFit: 'cover' }}
			/>
			<div>
				<button
					className='btn'
					onClick={() =>
						setCurrentIndex((currentIndex + 1) % images.length)
					}
				>
					Next
				</button>
			</div>
		</div>
	);
};

export default Carrousel;
