const Footer = ({content}) => {
	return (
		<footer
			style={{
				padding: '10px',
				background: '#0f172a',
				fontSize: '0.8rem',
				textAlign: 'center',
			}}
		>
			{content}
		</footer>
	);
};

export default Footer;
