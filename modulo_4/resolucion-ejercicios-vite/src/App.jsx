import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Proximamente from './components/Proximamente/Proximamente';
import Home from './components/Home/Home';
import { Clase01 } from './exercises';

function App() {
	// Lista de  clases YA están terminadas
	const clasesCompletadas = {
		'clase-01': <Clase01 />,
		// 'clase-02': <Clase02 />,  <-- Vas agregando aquí
	};

	// Generamos un array del 1 al 18
	const todasLasClases = Array.from({ length: 18 }, (_, i) => {
		const num = (i + 1).toString().padStart(2, '0');
		return `clase-${num}`;
	});

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					{/* Pantalla inicial */}
					<Route index element={<Home />} />

					{/* Generación automática de las 18 rutas */}
					{todasLasClases.map((idClase) => (
						<Route
							key={idClase}
							path={idClase}
							element={
								clasesCompletadas[idClase] || (
									<Proximamente clase={idClase} />
								)
							}
						/>
					))}
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
