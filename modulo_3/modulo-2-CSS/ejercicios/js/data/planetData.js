/**
 * planetData.js
 *
 * Este módulo exporta un array de objetos, donde cada objeto contiene
 * información detallada sobre un planeta del sistema solar.
 * Está diseñado para ser importado y utilizado para generar contenido dinámicamente.
 *
 * Para importarlo en otro módulo, usa:
 * import planetData from './data/planetData.js';
 */

const planetData = [
	{
		name: 'Mercurio',
		type: 'rocoso',
		subtitle: 'El Mensajero Veloz',
		image: 'https://content.nationalgeographic.com.es/medio/2022/07/31/el-planeta-mercurio_c7bafef8_1280x720.jpg',
		description:
			'El planeta más pequeño y más cercano al Sol. Su superficie está marcada por cráteres de impacto y no tiene una atmósfera significativa que atrape el calor.',
		data: {
			'Diámetro Ecuatorial': '4,879 km',
			'Distancia media al Sol': '57.9 millones km',
			'Período Orbital (Año)': '88 días terrestres',
			'Período de Rotación (Día)': '59 días terrestres',
			'Gravedad en la superficie': '3.7 m/s²',
			'Número de Lunas': '0',
		},
	},
	{
		name: 'Venus',
		type: 'rocoso',
		subtitle: 'El Gemelo Tóxico de la Tierra',
		image: 'https://content.nationalgeographic.com.es/medio/2022/07/31/el-planeta-venus_de3a3995_1280x1280.jpg',
		description:
			'Con una atmósfera densa y tóxica de dióxido de carbono y nubes de ácido sulfúrico, es el planeta más caliente de nuestro sistema solar debido a un efecto invernadero descontrolado.',
		data: {
			'Diámetro Ecuatorial': '12,104 km',
			'Distancia media al Sol': '108.2 millones km',
			'Período Orbital (Año)': '225 días terrestres',
			'Período de Rotación (Día)': '243 días terrestres (retrógrado)',
			'Gravedad en la superficie': '8.87 m/s²',
			'Número de Lunas': '0',
		},
	},
	{
		name: 'Tierra',
		type: 'rocoso',
		subtitle: 'Nuestro Hogar Azul',
		image: 'https://content.nationalgeographic.com.es/medio/2016/04/21/la-canica-azul_a3941285.jpg',
		description:
			'El único planeta conocido que alberga vida. Su atmósfera rica en nitrógeno y oxígeno y la presencia de agua líquida en su superficie lo hacen único en el sistema solar.',
		data: {
			'Diámetro Ecuatorial': '12,756 km',
			'Distancia media al Sol': '149.6 millones km',
			'Período Orbital (Año)': '365.25 días',
			'Período de Rotación (Día)': '23.9 horas',
			'Gravedad en la superficie': '9.8 m/s²',
			'Número de Lunas': '1',
		},
	},
	{
		name: 'Marte',
		subtitle: 'El Planeta Rojo',
		type: 'rocoso',
		image: 'https://content.nationalgeographic.com.es/medio/2025/07/04/marte_d348f18b_250704112631_1280x720.webp',
		description:
			'Conocido por su color rojizo debido al óxido de hierro. Tiene casquetes polares, volcanes gigantes y cañones, y es el foco principal de la búsqueda de vida pasada.',
		data: {
			'Diámetro Ecuatorial': '6,792 km',
			'Distancia media al Sol': '227.9 millones km',
			'Período Orbital (Año)': '687 días terrestres',
			'Período de Rotación (Día)': '24.6 horas',
			'Gravedad en la superficie': '3.7 m/s²',
			'Número de Lunas': '2 (Fobos y Deimos)',
		},
	},
	{
		name: 'Júpiter',
		subtitle: 'El Gigante Gaseoso',
		type: 'gaseoso',
		image: 'https://content.nationalgeographic.com.es/medio/2022/08/02/el-planeta-jupiter_b107cb4f_1280x1280.jpg',
		description:
			'El planeta más grande del sistema solar, tan masivo que podría contener a todos los demás planetas. Es famoso por su Gran Mancha Roja, una tormenta gigante.',
		data: {
			'Diámetro Ecuatorial': '142,984 km',
			'Distancia media al Sol': '778.5 millones km',
			'Período Orbital (Año)': '11.9 años terrestres',
			'Período de Rotación (Día)': '9.9 horas',
			'Gravedad en la superficie': '24.8 m/s²',
			'Número de Lunas': '95 (confirmadas)',
		},
	},
	{
		name: 'Saturno',
		subtitle: 'La Joya del Sistema Solar',
        type: 'gaseoso',
		image: 'https://content.nationalgeographic.com.es/medio/2022/08/03/el-planeta-saturno-y-sus-anillos_c05abbaa_1280x719.jpg',
		description:
			'Famoso por su espectacular sistema de anillos, compuestos principalmente por partículas de hielo. Es el segundo planeta más grande y el menos denso de todos.',
		data: {
			'Diámetro Ecuatorial': '120,536 km',
			'Distancia media al Sol': '1,434 millones km',
			'Período Orbital (Año)': '29.5 años terrestres',
			'Período de Rotación (Día)': '10.7 horas',
			'Gravedad en la superficie': '10.4 m/s²',
			'Número de Lunas': '146 (confirmadas)',
		},
	},
	{
		name: 'Urano',
		subtitle: 'El Gigante de Hielo Inclinado',
        type: 'helado',
		image: 'https://content.nationalgeographic.com.es/medio/2018/03/08/planeta-urano_127d77d6_1280x748.png',
		description:
			'Un gigante de hielo con una característica única: rota de lado, con su eje de rotación casi paralelo al plano de su órbita. Posee un tenue sistema de anillos.',
		data: {
			'Diámetro Ecuatorial': '51,118 km',
			'Distancia media al Sol': '2,871 millones km',
			'Período Orbital (Año)': '84 años terrestres',
			'Período de Rotación (Día)': '17.2 horas (retrógrado)',
			'Gravedad en la superficie': '8.7 m/s²',
			'Número de Lunas': '27',
		},
	},
	{
		name: 'Neptuno',
        type: 'helado',
		subtitle: 'El Mundo Ventoso y Distante',
		image: 'https://content.nationalgeographic.com.es/medio/2022/08/03/el-planeta-neptuno_bfb396f8_1280x1278.jpg',
		description:
			'El planeta más distante del Sol, es un mundo oscuro, frío y azotado por vientos supersónicos. Su color azul intenso se debe al metano en su atmósfera.',
		data: {
			'Diámetro Ecuatorial': '49,528 km',
			'Distancia media al Sol': '4,495 millones km',
			'Período Orbital (Año)': '165 años terrestres',
			'Período de Rotación (Día)': '16.1 horas',
			'Gravedad en la superficie': '11.15 m/s²',
			'Número de Lunas': '14',
		},
	},
];

// 'export default' permite que este array sea importado desde otros archivos JS.
export default planetData;
