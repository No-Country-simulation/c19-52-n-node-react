import { useEffect, useState } from 'react';

import Menu from '../../components/menu/menu';
import Others from '../../components/others/others';
import ListCard from './components/ListCard';
import ModalCreateList from '../../components/modal-create-list/modal-create-list';
import { getCookie } from '../../utils/cookies';
import { createList, getYourLists } from '../../hooks/listsApi';

export const YourList = () => {
  const [ lists, setLists] = useState([]);
  const [ , setIsLoaded] = useState(false);
  const [ , setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const isLogged = getCookie('access_token');

  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };
  const saveList = async ({ title }) => {
    try {
      await createList({ title });
      setIsLoaded(true);
      setShowModal(false);
      await getListOfUser();

    } catch (error) {
      setError(error);
      setIsLoaded(false);
    }
  };
  
  const getListOfUser = async () => {
    try {
      const { payload } = await getYourLists();
      setLists(payload);
    } catch (error) {
      setError(error);
    }
  };

  const renderLists = () => {
    if (lists.length === 0) {
      return <p className='font-semibold text-gray-700 text-base dark:text-white'>Aun no tienes listas agregadas</p>;
    }
    return lists.map(({ _id: id, title, movies, owner }) => {

      return (<ListCard key={id} idList={id} name={title} movies={movies} owner={owner} />);
    });
  };
  useEffect(() => {
    getListOfUser();
    // updateMovies();
  }, []);
  

  return (
    <body className="font-montserrat text-sm bg-white dark:bg-zinc-900 ">
      <div className="flex min-h-screen  2xl:max-w-screen-2xl 2xl:mx-auto 2xl:border-x-2 2xl:border-gray-200 dark:2xl:border-zinc-700 ">
        <Menu></Menu>
        <main className="flex-1 py-10  px-5 sm:px-10 ">
          <section className="mt-9">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-gray-700 text-base dark:text-white">Tus listas</span>
              { isLogged && <button onClick={openModal} className="px-5 py-2.5 bg-red-600  hover:bg-red-700 rounded-lg text-center font-medium block text-white">Crear Lista</button>}
            </div>
            { isLogged ?
              <div className="mt-4 grid grid-cols-2 gap-y-5 sm:grid-cols-3 gap-x-5 ">
                {renderLists()}
              </div>
              :
              <div className="mt-4 grid grid-cols-2 gap-y-5  gap-x-5 ">
                <p className='font-semibold text-gray-700 text-base dark:text-white'>Debes iniciar sesión para ver tus listas</p>
              </div>
            }
            {showModal &&  <ModalCreateList saveList={saveList} closeModal={closeModal}/>}
          </section>
        </main>
        <Others></Others>
      </div>
    </body>
  );
};

export default YourList;