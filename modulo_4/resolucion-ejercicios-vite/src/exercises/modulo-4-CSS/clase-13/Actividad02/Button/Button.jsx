import {btn, primary, secondary} from './Button.module.css';

export const Button = ({ variant = 'primary' }) => {
	return <button className={`${btn} ${variant === 'primary' ? primary : secondary}`}>
        {variant === 'primary' ? 'Primary Button' : 'Secondary Button'}
    </button>;
};

