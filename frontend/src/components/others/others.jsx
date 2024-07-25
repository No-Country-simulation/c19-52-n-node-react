import { useEffect, useState } from 'react';
import ListOthers from './components/listOthers';
import { getFilms } from '../../hooks/filmsApi';

export const Others = () => {
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);
  const [ , setIsLoaded] = useState(false);
  const [ , setError] = useState(null);
  

  
  const updateMovies = async () => {
    try {
      const { movies, series } = await getFilms();
      setMovies(movies);
      setSeries(series);
      setIsLoaded(true);
    } catch (error) {
      setError(error);
      setIsLoaded(false);
    }
  };
  
  useEffect(() => {
    updateMovies();
  }, []);

  return (
    <aside className=" w-1/5 py-10 px-10  min-w-min  border-l border-gray-300 dark:border-zinc-700 hidden lg:block ">
  
      <div className="relative items-center content-center flex">
        <span className="text-gray-400 absolute left-4 cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24"
            stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </span>
        <input type="text"
          className="text-xs ring-1 bg-transparent ring-gray-200 dark:ring-zinc-600 focus:ring-red-300 pl-10 pr-5 text-gray-600 dark:text-white  py-3 rounded-full w-full outline-none focus:ring-1"
          placeholder="Search ..." />
      </div>

      <ListOthers title={'Peliculas populares'} films={movies}/>
      <ListOthers title={'Series populares'} films={series}/>
    </aside>
  );
};

export default Others;
