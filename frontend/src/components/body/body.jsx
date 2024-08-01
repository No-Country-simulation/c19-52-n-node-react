import { useEffect, useState } from 'react';
import HeaderMobile from '../common/headerMobile';
import { Film } from '../film/film';
import Openning from '../common/openning';
import { getTypeFilms, searchFilm } from '../../hooks/filmsApi';
import { useSearchParams } from 'react-router-dom';

export const Body = () => {
  const [searchParams, ] = useSearchParams();
  const type = searchParams.get('t');

  const [films, setFilms] = useState([]);
  const [ isLoaded, setIsLoaded] = useState(false);
  const [ , setError] = useState(null);


  const updateFilms = async () => {
    try {
      const { results } = await getTypeFilms(type);
      setFilms(results);
      setIsLoaded(true);
    } catch (error) {
      setError(error);
      setIsLoaded(false);
    }
  };
  const searchFilms = async({ by, input }) => {
    const typeCurrent = type || 'movies';
    try {
      const { results } = await searchFilm({ by, type:typeCurrent, input });
      setFilms(results);
      setIsLoaded(true);
    } catch (error) {
      setError(error);
      setIsLoaded(false);
    }
    
  };
  const semibold = (typeNavbar) => {
    const typeCurrent = type || 'movies';
    return typeNavbar === typeCurrent ? 'font-semibold': 'hover:text-gray-700 dark:hover:text-white'; 
  };

  useEffect(() => {
    if (!isLoaded) {
      updateFilms();
    }
  }, []);

  return (
    <>
      <main className="flex-1 py-10  px-5 sm:px-10 ">
        <HeaderMobile></HeaderMobile>
        <section>
          <nav className="flex space-x-6 text-gray-400 font-medium pb-6">
            <a href="/" className={`text-gray-700 dark:text-white  ${semibold('movies')}`}>Peliculas</a>
            <a href="/?t=series" className={`text-gray-700 dark:text-white  ${semibold('series')}`}>Series</a>
          </nav>
          <Openning searchFilms={searchFilms}></Openning>
        </section>
        <div className="mt-4 grid grid-cols-2  sm:grid-cols-4 gap-x-5 gap-y-5">
          {films && films.map((movie) => {
            const { id, title = '', name= '', poster_path ='', overview = '', genre_ids: genreIds = [] } = movie;
            return <Film key={id} canAdd title={title || name } genreIds={genreIds} imgUrl={`https://image.tmdb.org/t/p/w300${poster_path}`} overview={overview} ></Film>;
          })}
        </div>
      </main></>
  );
};

export default Body;
