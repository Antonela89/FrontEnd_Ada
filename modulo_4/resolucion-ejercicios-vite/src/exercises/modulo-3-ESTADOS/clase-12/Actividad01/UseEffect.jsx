import { useEffect, useState } from 'react';

const Acividad01 = () => {
	const [second, setSecond] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setSecond((prev) => prev + 1);
		}, 1000);
		return () => {
			clearInterval(interval);
		};
	}, []);

	return <div>{second}</div>;
};

export default Acividad01;
