// Export nombrado: requiere llaves { } al importar
export const Saludo = ({nombre, mostrar}) => (
    <div className="mensaje-box saludo">
        ¡Hola! 
        {nombre && ` ${nombre}`}
        {mostrar && ` Este es un Export Nombrado.`}
    </div>
);