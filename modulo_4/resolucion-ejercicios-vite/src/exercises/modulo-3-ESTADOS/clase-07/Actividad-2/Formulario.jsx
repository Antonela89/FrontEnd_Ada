import {useState } from 'react';

const Formulario = () => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    
	return (
        <>
		<form className='activity-block'>
			<label className='flex gap-4'>
				Nombre: 
                <input className="form-control outline rounded p-2 w-full" type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
			</label>
			<label className='flex gap-4'>
				Apellido: 
                <input className="form-control outline rounded p-2 w-full" type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} />
			</label>
		</form>

        <div className='extra-info-box text-center h-16 flex items-center justify-center'>
            <p>{nombre} {apellido}</p>
        </div>
        </>
	);
};

export default Formulario;
