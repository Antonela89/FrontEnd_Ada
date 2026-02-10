import { HeaderActividad } from '@/components/common/HeaderActividad.jsx';
import Productos from './Productos';

const Actividad03 = () => {
    const misProductos = [
        { id: 1, nombre: "Teclado Mecánico", precio: 150 },
        { id: 2, nombre: "Mouse Pad", precio: 25 },
        { id: 3, nombre: "Monitor 4K", precio: 400 },
        { id: 4, nombre: "Cable HDMI", precio: 15 },
        { id: 5, nombre: "Auriculares Pro", precio: 120 },
    ];

    return (
        <>
            <HeaderActividad>Actividad 3: Tabla de Productos</HeaderActividad>
            <p className="qa-answer">
                Renderizado de tabla con lógica condicional para productos con precio superior a $100.
            </p>
            
            <Productos lista={misProductos} />
        </>
    );
};

export default Actividad03;