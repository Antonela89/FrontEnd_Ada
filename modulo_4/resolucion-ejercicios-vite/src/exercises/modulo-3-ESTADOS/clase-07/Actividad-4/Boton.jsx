import { useState } from 'react';

const Boton = () => {
    const [color, setColor] = useState(false);
    
	return (
		<div className='flex flex-col justify-center items-center gap-6'>
			<button className="btn-primary max-w-1/3" onClick={() => setColor(!color)}>Cambiar de color el texto</button>
            <p style={{color: color ? "red" : "white", textAlign: "center"}}>Soy un párrafo que cambia de color con useState</p>
		</div>
	);
};

export default Boton;
