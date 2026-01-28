const Usuario = ({ nombre, edad, onEliminar }) => {
    return (
        <div className="list-item">
            <div className="list-item-info">
                <span className="list-item-title">{nombre}</span>
                <span className="list-item-subtitle">{edad} años</span>
            </div>
            <button className="btn-danger" onClick={onEliminar}>
                Eliminar
            </button>
        </div>
    );
};

export default Usuario;
