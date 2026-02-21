const Card = ({ elemento, seleccionado, setSeleccionado }) => {
    const { pregunta, opciones } = elemento;

    return (
        <article className="card">
            <h3 className="card-title">{pregunta}</h3>
            <div className="card-options">
                {opciones.map((element, i) => (
                    <button 
                        key={i} 
                        // Si este índice es el seleccionado, aplicar una clase de color
                        className={`options-buttons rounded-lg transition-all ${
                            seleccionado === i 
                            ? 'bg-blue-500 text-white border-blue-700' 
                            : 'bg-slate-800 text-slate-200 border-slate-600 hover:bg-slate-700'
                        }`}
                        onClick={() => setSeleccionado(i)}
                    >
                        {element}
                    </button>
                ))}
            </div>
        </article>
    );
};

export default Card;
