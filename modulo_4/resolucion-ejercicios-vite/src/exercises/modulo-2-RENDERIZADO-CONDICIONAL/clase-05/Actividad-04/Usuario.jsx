import './Usuario.css';

const Usuario = ({ nombre, edad, onEliminar }) => {
    return (
        <div className="list-item">
            <div className="item-info">
                <span className="item-title">{nombre}</span>
                <span className="item-subtitle">{edad} años</span>
            </div>
            <button className="btn-danger" onClick={onEliminar}>
                Eliminar
            </button>
        </div>
    );
};

export default Usuario;
