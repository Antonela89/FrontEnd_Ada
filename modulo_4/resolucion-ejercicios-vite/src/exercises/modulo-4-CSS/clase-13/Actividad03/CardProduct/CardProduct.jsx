import { useState } from 'react';
import style  from './CardProduct.module.css';
import { FaShoppingCart } from 'react-icons/fa';

export const CardProduct = () => {
	const [inCart, setInCart] = useState(false);

	const toggleCart = () => {
		setInCart(!inCart);
	};

	return (
		<div className={style.container}>
		<article className={style.card}>
			<img
				src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRIiPgq2PNpHY-RBeG8P842WRZr74jR9NRnw&s"
				alt="Producto"
				className={style.image}
			/>
			<h2 className={style.title}>Terrario</h2>
			<button
				className={`${style.button} ${inCart ? style.inCart : ''}`}
				onClick={toggleCart}
			>
				<span className={style.icon}><FaShoppingCart /></span>
				{inCart ? 'Agregado' : 'Agregar al carrito'}
			</button>
		</article>
		</div>
	);
};
