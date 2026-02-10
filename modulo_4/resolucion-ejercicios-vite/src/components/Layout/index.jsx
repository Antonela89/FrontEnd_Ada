import { NavLink, Outlet } from 'react-router-dom';
import { menuConfig } from './menu.js';
import './css/theme.css';
import './css/components.css';
import './css/Layout.css';

const Layout = () => {
    return (
        <div className='container'>
            <nav className='sidebar'>
                <h1 className='mainTitle'>Frontend - Módulo 4</h1>

                {menuConfig.map((modulo, index) => (
                    <div key={index} className='moduleSection'>
                        <h3 className='moduleTitle'>{modulo.titulo}</h3>
                        <div className='linkList'>
                            {modulo.clases.map((clase) => (
                                <NavLink
                                    key={clase}
                                    to={`/${clase}`}
                                    // React Router pone la clase "active" sola si coincide la ruta
                                    className='link' 
                                    style={({ isActive }) => ({
                                        color: isActive ? 'white' : '#94a3b8',
                                    })}
                                >
                                    {clase.replace('-', ' ')}
                                </NavLink>
                            ))}
                        </div>
                    </div>
                ))}
            </nav>

            <main className='content'>
                <div className='card-content'>
                    {/* El Outlet mostrará el contenido de cada ejercicio */}
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

export default Layout;