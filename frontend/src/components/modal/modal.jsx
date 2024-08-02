
import { useState } from 'react';
import { getCookie } from '../../utils/cookies';
import './styles.scss';
import { getYourLists, saveFilm, saveInList } from '../../hooks/listsApi';
import { getGenerics } from '../../data/genre';

export default function Modal({ title='hola mundo', overview, genreIds, imgUrl, closeModal = ()=>{} }) {
  const isLogged = getCookie('access_token');
  const [ lists, setLists] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false); 
  const [listSelected, setListSelected] = useState('');

  const getListOfUser = async () => {
    try {
      const { payload } = await getYourLists();
      setLists(payload);
      setIsLoaded(true);
    } catch (error) {
      console.error(error);
    }
  };

  if (!isLoaded) {
    getListOfUser();
  }
  
  const saveList = async () => {
    try {
      const { payload } = await saveFilm({
        title, description:overview, thumbnail: imgUrl, category: getGenerics(genreIds)
      });
      const { _id: idFilm } = payload;
      await saveInList({ idFilm, idList: listSelected });
      window.location = '/';
    } catch (error) {
      console.error(error);
    }


  };

  
  const handleInputChange = (e) => {
    setListSelected(e.target.value);
  };
  
  return (
    <>
      <div id="modal">
        <div className='body-modal'>
          <button className="close-btn" onClick={() => closeModal()} >&times;</button>
          <div className="main-container">
            
            {isLogged && 
            <div className="select-container">
              <h1>Donde guardar: {title}</h1>
              <div className="custom-select-wrapper">
                <select className="custom-select primary" name='list' onChange={handleInputChange}>
                  {lists.map(({ _id:id, title }) => {
                    return (<option key={id} value={id}>{title}</option>);
                  })
                  }
                </select>
              </div>


              {/* {lists.map(({ _id:id, title }) => {
                return (
                  <label key={id} className="checkbox-wrapper secondary">
                    <select id="genre" name='genre' onChange={handleInputChange}>
                      <option key={id} value='wqow'>dsdssd</option>
                      <option key={id} value='wqow'>dsdssd</option>
                      <option key={id} value='wqow'>dsdssd</option>
                      <option key={id} value='wqow'>dsdssd</option>
                    
                    </select>
                     <input type="checkbox" name={id} value=''onChange={handleInputChange}/>
                    <span className="custom-checkbox"> </span>
                    {title}
                  </label>
                );  
              })} */}
              <div className="input-wrapper primary">
                <button onClick={saveList} className="px-5 py-2.5 bg-red-600  hover:bg-red-700 rounded-lg text-center font-medium block text-white">Guardar</button>
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