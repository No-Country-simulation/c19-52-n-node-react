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
      <ListOthers title={'Peliculas populares'} films={movies}/>
      <ListOthers title={'Series populares'} films={series}/>
    </aside>
  );
};

export default Others;
