export const Register = () => {
  return (
    <div className="container">
      <h1>Registrarse</h1>
      <div className="input-wrapper primary">
        <label htmlFor="input">Nombre:</label>
        <input type="text" id="input" placeholder="Ingrese nombre" />
      </div>
      <div className="input-wrapper primary">
        <label htmlFor="input">Apellido:</label>
        <input type="text" id="input" placeholder="Ingrese apellido" />
      </div>
      <div className="input-wrapper primary">
        <label htmlFor="input">Email:</label>
        <input type="mail" id="input" placeholder="Ingrese mail" />
      </div>
      <div className="input-wrapper primary">
        <label htmlFor="input">Contraseña:</label>
        <input type="password" id="input" placeholder="Ingrese contraseña" />
      </div>

      <div className="input-wrapper primary">
        <button className="px-5 py-2.5 bg-red-600  hover:bg-red-700 rounded-lg text-center font-medium block text-white">Registrarse</button>
      </div>
    </div>
  );
};