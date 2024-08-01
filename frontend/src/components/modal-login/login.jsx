import { useState } from 'react';

export const Login = ({ title, error, loginUser = () => {}, setMode = () => {} }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  
  const buttonLogin = () => {
    loginUser({ email, password });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const inputs = {
      email: setEmail,
      password: setPassword
    };
    inputs[name](value);
  };

  return (
    <div className="container">
      <h1>{title}</h1>
      <div className="input-wrapper primary">
        <label htmlFor="input">Email:</label>
        <input 
          type="mail" 
          placeholder="Ingrese mail" 
          id="email"
          name="email"
          value={email}
          onChange={handleInputChange}
        />
      </div>
      <div className="input-wrapper primary">
        <label htmlFor="input">Contraseña:</label>
        <input 
          type="password" 
          id="password"
          name="password"
          value={password}
          onChange={handleInputChange}
          placeholder="Ingrese contraseña" />
      </div>
      {error && <span className="text-red-600">{error}</span>}
      <div className="input-wrapper primary" >
        <label>Si aun no tienes una cuenta puedes </label>
        <button onClick={() => setMode('register')} className="bg-red-600 px-5 py-2.5 rounded-lg text-center font-medium block text-white hover:bg-red-700">Registrarte</button>
      </div>
      <div className="input-wrapper primary">
        <button onClick={buttonLogin} className="px-5 py-2.5 bg-red-600  hover:bg-red-700 rounded-lg text-center font-medium block text-white">Iniciar sesión</button>
      </div>
    </div>
  );
};
