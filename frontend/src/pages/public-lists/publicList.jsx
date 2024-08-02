import { useEffect, useState } from 'react';

import Menu from '../../components/menu/menu';
import Others from '../../components/others/others';
import ListCard from './components/ListCard';
import { getPublicLists } from '../../hooks/listsApi';

export const PublicLists = () => {
  const [ lists, setLists] = useState([]);
  const [ , setError] = useState(null);
  const getFilms = async () => {
    try {
      const { payload } = await getPublicLists();
      console.log('🚀 ~ file: publicList.jsx:16 ~ payload:', payload);
      setLists(payload);
    } catch (error) {
      setError(error);
    }
  };

  const renderLists = () => {
    if (lists.length === 0) {
      return <p className='font-semibold text-gray-700 text-base dark:text-white'>Aun no hay listas publicas</p>;
    }
    return lists.map(({ _id: id, title, movies }) => {

      return (<ListCard isPublic key={id} idList={id} name={title} movies={movies} />);
    });
  };
  useEffect(() => {
    getFilms();
  }, []);
  

  return (
    <body className="font-montserrat text-sm bg-white dark:bg-zinc-900 ">
      <div className="flex min-h-screen  2xl:max-w-screen-2xl 2xl:mx-auto 2xl:border-x-2 2xl:border-gray-200 dark:2xl:border-zinc-700 ">
        <Menu></Menu>
        <main className="flex-1 py-10  px-5 sm:px-10 ">
          <section className="mt-9">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-gray-700 text-base dark:text-white">Listas publicas</span>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-y-5 sm:grid-cols-3 gap-x-5 ">
              {renderLists()}
            </div>
          </section>
        </main>
        <Others></Others>
      </div>
    </body>
  );
};

export default PublicLists;