const navData = [
    { text: 'Inicio', href: '#hero' },
    { text: 'Sol', href: '#sol' },
    {
        text: 'Planetas',
        href: '#planetas',
        children: [
            { text: 'Mercurio', href: '#mercurio' },
            { text: 'Venus', href: '#venus' },
            { text: 'Tierra', href: '#tierra' },
            { text: 'Marte', href: '#marte' },
            { text: 'Júpiter', href: '#jupiter' },
            { text: 'Saturno', href: '#saturno' },
            { text: 'Urano', href: '#urano' },
            { text: 'Neptuno', href: '#neptuno' },
            { isDivider: true }, // Esto creará un <hr>
            { text: 'Comparativas', href: '#comparativas' }
        ]
    },
    {
        text: 'Otros Cuerpos',
        href: '#otrosCuerpos',
        children: [
            { text: 'Lunas', href: '#show-lunas' },
            { text: 'Asteroides', href: '#show-asteroides' },
            { text: 'Cometas', href: '#show-cometas' },
            { text: 'Planetas Enanos', href: '#show-planetas-enanos' }
        ]
    },
    { text: 'Galería', href: '#galeria' },
    { text: 'Misiones', href: '#misiones' },
    { text: 'Contacto', href: '#contacto' },
];

export default navData;