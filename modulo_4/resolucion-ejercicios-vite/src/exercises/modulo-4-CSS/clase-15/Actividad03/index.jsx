import { HeaderActividad } from '@/components/common/HeaderActividad';
import CardProducto from './CardProducto';
import productoImg from '@/assets/zapas.jpg';
import productoImg2 from '@/assets/zapas2.jpg';

const Acividad03 = () => {
  return (
    <div>
        <HeaderActividad>
				{'Actividad 3:  CardProducto con Estilos Dinámicos + Íconos'}
			</HeaderActividad>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px', gap: '20px'  }}>
        <CardProducto titulo="Zapatillas Deportivas" imagen={productoImg} />
        <CardProducto titulo="Zapatillas Casuales" imagen={productoImg2} />
      </div>
    </div>
  )
}

export default Acividad03
