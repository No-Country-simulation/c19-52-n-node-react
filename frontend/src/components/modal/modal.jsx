
import { useEffect, useState } from 'react';
import { getCookie } from '../../utils/cookies';
import './styles.scss';
import { getYourLists } from '../../hooks/listsApi';
export default function Modal({ title='hola mundo', closeModal = ()=>{} }) {
  const isLogged = getCookie('access_token');
  const [ lists, setLists] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false); 

  const getListOfUser = async () => {
    try {
      const { payload } = await getYourLists();
      console.log('🚀 ~ file: modal.jsx:13 ~ payload:', payload);
      setLists(payload);
      setIsLoaded(true);
    } catch (error) {
      console.error(error);
    }
  };

  if (!isLoaded) {
    getListOfUser();
  }
  

  return (
    <>
      <div id="modal">
        <div className='body-modal'>
          <button className="close-btn" onClick={() => closeModal()} >&times;</button>
          <div className="main-container">
            
            {isLogged && 
            <div className="checkbox-container">
              <h1>Donde guardar: {title}</h1>
              {lists.map(({ _id:id, title }) => {
                return (
                  <label key={id} className="checkbox-wrapper secondary">
                    <input type="checkbox" />
                    <span className="custom-checkbox"></span>
                    {title}
                  </label>
                );  
              })}
              <div className="input-wrapper primary">
                <button className="px-5 py-2.5 bg-red-600  hover:bg-red-700 rounded-lg text-center font-medium block text-white">Guardar</button>
              </div>
            </div>}
            {!isLogged && 
            <div className="input-wrapper primary">
              <h1>Debes iniciar sesión para agregar peliculas a tu lista</h1>
              <button onClick={() => closeModal()} className="px-5 py-2.5 bg-red-600  hover:bg-red-700 rounded-lg text-center font-medium block text-white">Entendido</button>
            </div>}

            
          </div>
        </div>

      </div></>

  );
}