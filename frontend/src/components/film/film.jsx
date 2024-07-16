import { useState } from 'react';
import Modal from '../modal/modal';

export const Film = ({title = 'Leo diCaprio', imgUrl = 'https://www.jolie.de/sites/default/files/styles/image_gallery360w/public/2020-02/leonardo-dicaprio-oscars.jpg?h=64dbc2fc&itok=EH0B3oo4', overview= '+12 movies' }) => {
  const [showModal, setShowModal] = useState(false);
  const guardar = () => {
    console.log(title);
    setShowModal(true);
  };
  const closeModal = () => {
    
    console.log('🚀 ~ closeModal ~ closeModal:');
    setShowModal(false);
  };
  return (
    <><div className="relative rounded-xl overflow-hidden">
      <img src={imgUrl}
        className="object-cover h-full w-full -z-10" alt="" />
      <div
        className="absolute top-0 h-full w-full bg-gradient-to-t from-black/50 p-3 flex flex-col justify-between">
        <button className="p-2.5 bg-gray-800/80 bg-white rounded-lg text-white self-end hover:bg-red-600/80" onClick={guardar}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20"
            fill="currentColor">
            <path fillRule="evenodd"
              d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
              clipRule="evenodd" />
          </svg>
        </button>

        <div className="self-center flex flex-col items-center space-y-2">
          <span className="capitalize text-white font-medium drop-shadow-md">{title}</span>
          <span className="text-gray-100 text-xs">{overview}</span>

        </div>
      </div>
    </div>
    {showModal && <Modal title={title} overview={overview} closeModal={closeModal} />}
    </>
  );
};