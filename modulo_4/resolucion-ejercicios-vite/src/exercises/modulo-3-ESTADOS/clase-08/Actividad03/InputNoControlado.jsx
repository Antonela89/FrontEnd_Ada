import { useRef, useState } from "react";

const InputNoControlado = () => {
  const valorInput = useRef();
  const [valorAMostrar, setValorAMostrar] = useState("");

  const handleValorAMostrar = (e) => {
    e.preventDefault();
    setValorAMostrar(valorInput.current.value);
    valorInput.current.value = "";
  }

  return (
    <form className="form">
      <input className="form-input" type="text" ref={valorInput}/>
      <button className="btn-primary" onClick={(e) => handleValorAMostrar(e)}>Mostrar valor</button>
      {valorAMostrar && <p className="form-message info">{valorAMostrar}</p>}
    </form>

  )
}

export default InputNoControlado
