const estado = {
	ACTIVO: 'activo',
	INACTIVO: 'inactivo',
	INVITADO: 'invitado',
};

const usuarios = [
	{
		nombre: 'Juan Pérez',
		edad: 28,
		estado: estado.ACTIVO,
	},
	{
		nombre: 'María Gómez',
		edad: 18,
		estado: estado.INACTIVO,
	},
	{
		nombre: 'Carlos Rodríguez',
		edad: 6,
		estado: estado.INVITADO,
	},
];

export { usuarios };
