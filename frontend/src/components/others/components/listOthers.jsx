import { useState } from 'react';
import FilmOthers from './filmOthers';

export const ListOthers = ({ title, films }) => {
  const [showFilms, setShowFilms] = useState(3);
  const [showMore, setShowMore] = useState(true);
  const clickSeeMore = () => {
    const newQuantity = showFilms + 3;
    setShowFilms(newQuantity);
    if (films.length <= newQuantity) {
      setShowMore(false);
    }
  };

  return (
    <div className="mt-10">
      <span className="font-semibold text-gray-700 dark:text-white">{title}</span>
      <ul className="mt-4 text-gray-400 text-xs space-y-3">
        {
          films.slice(0, showFilms).map(film => {
            return (
              <FilmOthers key={film?.id} film={film}/>
            );
          })
        }
        {showMore && 
        <li className="pt-1">
          <button onClick={clickSeeMore} style={{ width:'100%' }} className="px-5 py-2.5 bg-red-600  hover:bg-red-700 rounded-lg text-center font-medium block text-white">
                Ver Más
          </button>
        </li>}
      </ul>
    </div>
  );

};

export default ListOthers;
