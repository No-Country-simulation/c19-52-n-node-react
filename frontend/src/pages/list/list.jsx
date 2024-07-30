import { useEffect, useState } from 'react';
import { Film } from '../../components/film/film';
import Menu from '../../components/menu/menu';
import Others from '../../components/others/others';
import { getMovies } from '../../hooks/filmsApi';
// import { useParams } from 'react-router-dom';

export const List = () => {
  const [movies, setMovies] = useState([]);
  const [ , setIsLoaded] = useState(false);
  const [ , setError] = useState(null);
  // const { id }=useParams();
  const updateMovies = async () => {
    try {
      const { results } = await getMovies();
      setMovies(results);
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
    <body className="font-montserrat text-sm bg-white dark:bg-zinc-900 ">
      <div className="flex min-h-screen  2xl:max-w-screen-2xl 2xl:mx-auto 2xl:border-x-2 2xl:border-gray-200 dark:2xl:border-zinc-700 ">
        <Menu></Menu>
        <main className=" flex-1 py-10  px-5 sm:px-10 ">
          <section className="mt-9">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-gray-700 text-base dark:text-white">Listado 1</span>
            </div>
            <div className="mt-4 grid grid-cols-2  sm:grid-cols-4 gap-x-5 gap-y-5">
              {movies && movies.map((movie) => {
                const { id, title = '', overview = '', poster_path ='' } = movie;
                return <Film key={id} title={title} imgUrl={`https://image.tmdb.org/t/p/w300${poster_path}`} overview={overview}></Film>;
              })}
            </div>
          </section>
        </main>
        <Others></Others>
      </div>
    </body>
  );
};

export default List;