import { useState } from 'react';
import Modal from '../modal/modal';
import './styles.scss';
import { deleteFilmOFList } from '../../hooks/listsApi';


export const Film = ({ idList='', idFilm='', isListPage = false, title = '', genreIds=[], imgUrl = '', overview= '+12 movies' }) => {
  const [showModal, setShowModal] = useState(false);
  const edit = async() => {
    if (!isListPage) {
      return setShowModal(true);
    } else{
      try {
        await deleteFilmOFList({ idList, idFilm });
        window.location.reload();
      } catch (error) {
        console.error('🚀 error:', error);
      }
    }
  };
  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <><div className="relative rounded-xl overflow-hidden imagediv">
      <img src={imgUrl}
        className="object-cover h-full w-full -z-10" alt="" />
      <div className="absolute top-0 h-full w-full bg-gradient-to-t from-black/50 p-3 flex flex-col justify-between hover-parent">
        <button className="p-2.5 bg-gray-800/80 bg-white rounded-lg text-white self-end hover:bg-red-600/80" onClick={edit}>
          {!isListPage && 
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20"
            fill="currentColor">
            <path fillRule="evenodd"
              d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
              clipRule="evenodd" />
          </svg> 
          }
          {isListPage && 
          <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"/>
          </svg>
          }
        </button>
        <div className="self-center flex flex-col items-center space-y-2">
          <span className="capitalize text-white font-medium drop-shadow-md">{title}</span>
        </div>
        <div className="self-center flex flex-col items-center space-y-2 hover-children">
          <span className="">{overview}</span>
        </div> 
      </div>
    </div>
    {showModal && <Modal title={title} overview={overview} genreIds={genreIds} imgUrl={imgUrl} closeModal={closeModal} />}
    </>
  );
};