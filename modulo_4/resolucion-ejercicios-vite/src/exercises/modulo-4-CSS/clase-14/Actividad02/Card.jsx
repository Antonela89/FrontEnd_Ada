import styles from './Card.module.css';

const Card = ({ tipo, destacado, children }) => {
	//Contruir la clase dinamicamente
	const classes = [styles.card];

	if (tipo === 'alert') classes.push(styles.alert);
	if (destacado) classes.push(styles.destacado);

	return <div className={classes.join(' ')}>{children}</div>;
};

export default Card;
