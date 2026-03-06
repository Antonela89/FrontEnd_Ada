import styles from './Button.module.css';

const Button = ({variant}) => {
	return (
		<button className={`btn ${variant ? styles[variant] : ''}`}>
            {variant ? `Boton con variante: ".${variant}"` : 'Botón básico'}
            </button>
	);
};

export default Button;
