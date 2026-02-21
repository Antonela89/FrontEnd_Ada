import { useState } from 'react';
import PasswordInput from './PasswordInput';
import RepetirPasswordInput from './RepetirPasswordInput';

const Padre = () => {
    const [password, setPassword] = useState('');
    
    const handleShowPassword = (e) => {
        setPassword(e.target.value);
    }

	return (
		<>
			<PasswordInput onChange={handleShowPassword} value={password}/>
			<RepetirPasswordInput onChange={handleShowPassword} value={password}/>
		</>
	);
};

export default Padre;
