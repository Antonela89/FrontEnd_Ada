import { useState } from 'react';
import style from './Product.module.css';

const Product = ({ product }) => {
    const [agregado, setAgregado] = useState(false);
    const { nombre, precio, disponible, imagen, categoria } = product;
    
    return (
        <article className={style.productCard}>
            <div className={style.imageContainer}>
                <img src={imagen} alt={nombre} className={style.productImage} />
                {!disponible && <span className={style.soldOutBadge}>Sin Stock</span>}
            </div>

            <div className={style.content}>
                <span className={style.categoryTag}>{categoria}</span>
                <h3 className={style.title} title={nombre}>{nombre}</h3>
                <p className={style.price}>${precio.toLocaleString('es-AR')}</p>
                
                <button 
                    className={style.addButton} 
                    disabled={!disponible}
                    onClick={() => setAgregado(true)}
                >
                    {!agregado ? 'Agregar al Carrito' : 'Producto agregado al carrito'}
                </button>
            </div>
        </article>
    );
};

export default Product;
