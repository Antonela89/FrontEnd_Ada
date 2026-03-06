import { useState } from 'react';
import styles from './CardProducto.module.css';
import { FaShoppingCart } from 'react-icons/fa';

const CardProducto = ({ titulo, imagen }) => {
  const [inCart, setInCart] = useState(false);

  const toggleCart = () => {
    setInCart(!inCart);
  };

  return (
    <article className={styles.card}>
      <img src={imagen} alt={titulo} className={styles.image} />
      <h3 className={styles.title}>{titulo}</h3>
      <button 
        className={`${styles.button} ${inCart ? styles.agregado : styles.noAgregado}`}
        onClick={toggleCart}
      >
        <FaShoppingCart />
        {inCart ? 'Agregado' : 'Agregar al carrito'}
      </button>
    </article>
  )
}

export default CardProducto
