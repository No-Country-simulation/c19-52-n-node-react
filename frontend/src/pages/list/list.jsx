import { useEffect, useState } from 'react';
import { Film } from '../../components/film/film';
import Menu from '../../components/menu/menu';
import Others from '../../components/others/others';
import { useParams } from 'react-router-dom';
import { getList } from '../../hooks/listsApi';

export const List = () => {
  const [movies, setMovies] = useState([]);
  const [title, setTitle] = useState('');
  const [ , setIsLoaded] = useState(false);
  const [ , setError] = useState(null);
  const { id:idList }=useParams();
  const updateMovies = async () => {
    try {
      const { payload } = await getList({ idList });
      setMovies(payload?.movies);
      setTitle(payload?.title);
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
              <span className="font-semibold text-gray-700 text-base dark:text-white">{title}</span>
            </div>
            <div className="mt-4 grid grid-cols-2  sm:grid-cols-4 gap-x-5 gap-y-5">
              {movies?.length === 0 && <p className='font-semibold text-gray-700 text-base dark:text-white'>Aun no tienes peliculas o series agregadas</p>}
              {movies && movies.map(({ movie }) => {
                const { id, _id:idFilm, title = '', description = '', thumbnail ='' } = movie;
                return <Film key={id} idList={idList} idFilm={id || idFilm} title={title} imgUrl={thumbnail} overview={description} isListPage></Film>;
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