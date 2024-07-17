import { useEffect, useState } from 'react';
import { Film } from '../../components/film/film';
import Menu from '../../components/menu';
import Others from '../../components/others';
import { getMovies } from '../../hooks/filmsApi';

export const List = () => {
  const [movies, setMovies] = useState([]);
  const [ , setIsLoaded] = useState(false);
  const [ , setError] = useState(null);
  
  const updateMovies = async () => {
    try {
      const {results} = await getMovies();
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
              <span className="font-semibold text-gray-700 text-base dark:text-white">Tu listado</span>
              <div className="flex items-center space-x-2 fill-gray-500">
                <svg className="h-7 w-7 rounded-full border p-1 hover:border-red-600 hover:fill-red-600 dark:fill-white dark:hover:fill-red-600"
                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M13.293 6.293L7.58 12l5.7 5.7 1.41-1.42 -4.3-4.3 4.29-4.293Z"></path>
                </svg>
                <svg className="h-7 w-7 rounded-full border p-1 hover:border-red-600 hover:fill-red-600 dark:fill-white dark:hover:fill-red-600"
                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M10.7 17.707l5.7-5.71 -5.71-5.707L9.27 7.7l4.29 4.293 -4.3 4.29Z"></path>
                </svg>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2  sm:grid-cols-4 gap-x-5 gap-y-5">
              {movies && movies.map((movie) => {
                const {id, title = '', overview = '', poster_path =''} = movie;
                return <Film key={id} name={title} imgUrl={`https://image.tmdb.org/t/p/w300${poster_path}`} overview={overview}></Film>;
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