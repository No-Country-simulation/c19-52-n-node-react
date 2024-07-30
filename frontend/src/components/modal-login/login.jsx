export const Login = ({ setMode = () => {} }) => {
  return (
    <div className="container">
      <h1>Iniciar sesión</h1>
      <div className="input-wrapper primary">
        <label htmlFor="input">Email:</label>
        <input type="mail" id="input" placeholder="Ingrese mail" />
      </div>
      <div className="input-wrapper primary">
        <label htmlFor="input">Contraseña:</label>
        <input type="password" id="input" placeholder="Ingrese contraseña" />
      </div>
      <div className="input-wrapper primary">
        <label>Si aun no tienes una cuenta puedes </label>
        <button onClick={() => setMode('register')} className="register-button bg-red-600 px-5 py-2.5 rounded-lg text-center font-medium block text-white hover:bg-red-700">Registrarte</button>
      </div>
      <div className="input-wrapper primary">
        <button className="px-5 py-2.5 bg-red-600  hover:bg-red-700 rounded-lg text-center font-medium block text-white">Iniciar sesión</button>
      </div>
    </div>
  );
};
