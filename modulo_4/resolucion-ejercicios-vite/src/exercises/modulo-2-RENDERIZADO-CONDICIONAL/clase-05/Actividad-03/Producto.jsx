const Producto = ({ nombre, precio }) => {
    return (
        <div className="list-item">
            <div className="item-info">
                <span className="item-title">{nombre}</span>
            </div>
            <span className="font-bold text-(--accent)">${precio}</span>
        </div>
    );
};
export default Producto;
