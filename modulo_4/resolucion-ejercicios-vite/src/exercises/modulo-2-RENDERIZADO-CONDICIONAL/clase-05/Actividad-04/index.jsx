import { useState } from 'react';
import Usuario from './Usuario';
import { HeaderActividad } from '@/components/common/HeaderActividad'

const Actividad04 = () => {
    const [usuarios, setUsuarios] = useState([
        { id: 1, nombre: "Antonela", edad: 25 },
        { id: 2, nombre: "Juan", edad: 30 },
        { id: 3, nombre: "María", edad: 22 },
        { id: 4, nombre: "Pedro", edad: 28 },
    ]);

    const eliminarUsuario = (id) => {
        // Filtramos la lista para quitar el que tenga el ID seleccionado
        const nuevaLista = usuarios.filter(user => user.id !== id);
        setUsuarios(nuevaLista);
    };

    return (
        <div className='activity-block'>
            <HeaderActividad>Actividad 04: Lista Dinámica (Eliminar)</HeaderActividad>
            
            <div className="list-container">
                {usuarios.length > 0 ? (
                    usuarios.map(u => (
                        <Usuario 
                            key={u.id} 
                            nombre={u.nombre} 
                            edad={u.edad} 
                            onEliminar={() => eliminarUsuario(u.id)}
                        />
                    ))
                ) : (
                    <p className="p-10 text-center text-text-muted">No quedan usuarios en la lista.</p>
                )}
            </div>
        </div>
    );
};

export default Actividad04;