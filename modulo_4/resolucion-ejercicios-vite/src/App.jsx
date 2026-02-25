import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Layout, Proximamente } from './components';
import {
	Clase01,
	Clase02,
	Clase03,
	Clase04,
	Clase05,
	Clase06,
	Clase07,
	Clase08,
	Clase09,
	Clase10,
	Clase11,
	Clase12,
} from './exercises';

function App() {
	// Lista de  clases YA están terminadas
	const clasesCompletadas = {
		'clase-01': <Clase01 />,
		'clase-02': <Clase02 />,
		'clase-03': <Clase03 />,
		'clase-04': <Clase04 />,
		'clase-05': <Clase05 />,
		'clase-06': <Clase06 />,
		'clase-07': <Clase07 />,
		'clase-08': <Clase08 />,
		'clase-09': <Clase09 />,
		'clase-10': <Clase10 />,
		'clase-11': <Clase11 />,
		'clase-12': <Clase12 />,
		// 'clase-13': <Clase13 />,
		// 'clase-14': <Clase14 />,
		// 'clase-15': <Clase15 />,
		// 'clase-16': <Clase16 />,
		// 'clase-17': <Clase17 />
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
