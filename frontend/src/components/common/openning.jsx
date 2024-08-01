import { useState } from 'react';
import './openning.scss';
import { genres as totalGenres } from '../../data/genre';

export const Openning = ({ searchFilms }) => {
  const [name, setName] = useState('');
  const [genre, setGenre] = useState('');
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const inputs = {
      name: setName,
      genre: setGenre,
    };
    inputs[name](value);
  };

  const genres = totalGenres;

  const searchFilmsByName = () => {
    searchFilms({ by: 'name', input: name });
  };
  const searchFilmsByGenre = () => {
    searchFilms({ by: 'genre', input: genre });
  };
  const renderGenres = genres.map(({ id, name }) => {
    return (<option key={id} value={id}>{name}</option>);
  });
  return (
   
    <div className="search-container dark:text-white">
      <div className="form-group">
        <label htmlFor="search">Buscar por nombre:</label>
        <input type="text" name='name' id="search" onChange={handleInputChange} placeholder="Buscar..."/>
      </div>
      <div className="form-group button-search">
        <label htmlFor="Search"></label>
        <button onClick={searchFilmsByName} className='bg-red-600  hover:bg-red-700'>Buscar</button>
      </div>
      <div className="form-group">
        <label htmlFor="genre">Buscar por género:</label>
        <select id="genre" name='genre' onChange={handleInputChange}>
          <option value="">Todos los géneros</option>
          {renderGenres}
        </select>
      </div>
      
      <div className="form-group button-search">
        <label htmlFor="Search"></label>
        <button onClick={searchFilmsByGenre} className='bg-red-600  hover:bg-red-700'>Buscar</button>
      </div>
      
    </div>

  );
};

export default Openning;
