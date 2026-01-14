import './App.css';
import Bienvenida from './Bienvenida';
import Perfil from './components/Perfil';
import Subtitulo from './Subtitulo';


function App() {

  return (
    <>
      <Bienvenida nombre={'Antonela'}/>
      <Subtitulo/>
      <Perfil/>
    </>
  )
}

export default App
