import styles from './Boton.module.css';

const Boton = ({ tipo, children }) => {
	return (
		<button className={`${styles.btn} ${styles[tipo]}`}>{children}</button>
	);
};

export default Boton;
