
import { useState } from 'react';
import { getCookie } from '../../utils/cookies';
import './styles.scss';
import { getYourLists, saveFilm, saveInList } from '../../hooks/listsApi';
import { getGenerics } from '../../data/genre';

export default function Modal({ title='hola mundo', overview, genreIds, imgUrl, closeModal = ()=>{} }) {
  const isLogged = getCookie('access_token');
  const [ lists, setLists] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false); 
  const [checklist, setChecklist] = useState({});

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
    const trueIdsArray = [];
    const falseIdsArray = [];

    Object.keys(checklist).forEach(key => {
      if (checklist[key]) {
        trueIdsArray.push(key);
      } else {
        falseIdsArray.push(key);
      }
    });

    try {
      const { payload } = await saveFilm({
        title, description:overview, thumbnail: imgUrl, category: getGenerics(genreIds)
      });

      if(trueIdsArray.length > 0) {
        const { _id: idFilm } = payload;
        const [idList] = trueIdsArray;
        await saveInList({ idFilm, idList });
      }
    } catch (error) {
      console.error(error);
    }


  };

  
  const handleInputChange = (e) => {
    const { name, checked } = e.target;
    setChecklist({ ...checklist, [name]: checked });
  };
  
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
                    <input type="checkbox" name={id} value=''onChange={handleInputChange}/>
                    <span className="custom-checkbox"> </span>
                    {title}
                  </label>
                );  
              })}
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