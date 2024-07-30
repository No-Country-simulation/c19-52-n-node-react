import './openning.scss';

export const Openning = () => {
  return (
   
    <div className="search-container dark:text-white">
      <div className="form-group">
        <label htmlFor="search">Buscar por nombre:</label>
        <input type="text" id="search" placeholder="Buscar..."/>
      </div>
      <div className="form-group">
        <label htmlFor="genre">Filtrar por género:</label>
        <select id="genre">
          <option value="">Todos los géneros</option>
          <option value="accion">Acción</option>
          <option value="comedia">Comedia</option>
          <option value="drama">Drama</option>
          <option value="terror">Terror</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="sort">Ordenar por:</label>
        <select id="sort">
          <option value="popularity">Popularidad</option>
          <option value="votes">Votos</option>
          <option value="date">Fecha</option>
        </select>
      </div>
      
    </div>

  );
};

export default Openning;
