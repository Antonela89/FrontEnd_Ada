import style from './ListProduct.module.css';
import productsList from '../data/products';
import Product from '../Product/Product';

const ListProduct = () => {
	return (
		<div className={style.containerProducts}>
			{productsList.map((product) => (
				<Product key={product.id} product={product} />
			))}
		</div>
	);
};

export default ListProduct;
