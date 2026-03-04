import styles from './ItemList.module.css';

const ItemList = ({ items }) => {
	return (
		<ul>
			{items.map((item, index) => (
				<li
					key={index}
					className={`${styles.item} ${styles[item.tipo]}`}
				>
					{item.nombre}
				</li>
			))}
		</ul>
	);
};

export default ItemList;
