import { useEffect, useState } from 'react';

import Menu from '../../components/menu/menu';
import Others from '../../components/others/others';
import { getMovies } from '../../hooks/filmsApi';
import ListCard from './components/ListCard';
import ModalCreateList from '../../components/modal-create-list/modal-create-list';

export const YourList = () => {
  const [ , setMovies] = useState([]);
  const [ , setIsLoaded] = useState(false);
  const [ , setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  
  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };
  const saveList = () => {
    // TODO save list
    console.log('🚀 ~ saveList:', saveList);
  };
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
              <span className="font-semibold text-gray-700 text-base dark:text-white">Tus listas</span>
              <button onClick={openModal} className="px-5 py-2.5 bg-red-600  hover:bg-red-700 rounded-lg text-center font-medium block text-white">Crear Lista</button>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-y-5 sm:grid-cols-3 gap-x-5 ">
              {/* TODO: listas de films */}
              <ListCard name='probemos'/>
              <ListCard name='test'/>
              <ListCard name='otro'/>
            </div>
            {showModal &&  <ModalCreateList saveList={saveList} closeModal={closeModal}/>}
          </section>
        </main>
        <Others></Others>
      </div>
    </body>
  );
};

export default YourList;