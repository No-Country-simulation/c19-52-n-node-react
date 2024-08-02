import { useEffect, useState } from 'react';
import { Film } from '../../components/film/film';
import Menu from '../../components/menu/menu';
import Others from '../../components/others/others';
import { useParams } from 'react-router-dom';
import { changeVisibility, getList } from '../../hooks/listsApi';
import Toast from '../../components/common/toast/toast';

export const List = () => {
  const [movies, setMovies] = useState([]);
  const [title, setTitle] = useState('');
  const [owner, setOwner] = useState('');

  const [ , setIsLoaded] = useState(false);
  const [ , setError] = useState(null);
  const [message, setMessage] = useState('');
  const [visibility, setVisibility] = useState('');

  const { id:idList }=useParams();
  const updateMovies = async () => {
    try {
      const { payload } = await getList({ idList });
      setVisibility(payload?.visibility);
      setOwner(payload?.owner);
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
    setMessage('');
  }, []);


  const copyListLink = async() => {
    try {
      await navigator.clipboard.writeText(window.location);
      setMessage('Enlace copiado !');
      console.log('Link copiado');
    } catch (err) {
      console.error('Error al copiar: ', err);
    }
  };
  
  const handleChange = (event) => {
    setVisibility(event.target.value);
  };

  const editVisibility = async() => {
    try {
      await changeVisibility({ idList, visibility });
      setMessage('Se guardo los cambios !');
      console.log('Cambio de visibilidad');
    } catch (err) {
      console.error('Error al cambiar visibilidad: ', err);
    }

  };
  const idUser = localStorage.getItem('idUser');
  return (
    <body className="font-montserrat text-sm bg-white dark:bg-zinc-900 ">
      <div className="flex min-h-screen  2xl:max-w-screen-2xl 2xl:mx-auto 2xl:border-x-2 2xl:border-gray-200 dark:2xl:border-zinc-700 ">
        <Menu></Menu>
        <main className=" flex-1 py-10  px-5 sm:px-10 ">
          <section className="mt-9">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-gray-700 text-base dark:text-white">{title}</span>
            </div>
            <div className="flex flex-space-between">
              <div className='flex flex-space-between px-3 py-2.5 text-gray-700 text-base dark:text-white'>
                
                {idUser === owner && <div className="radio-container">
                  <label htmlFor="public" className='radio-wrapper secondary'>
                    <input type="radio" id="public" name="visibility" value="public" checked={visibility === 'public'} onChange={handleChange} />
                    <span className="custom-radio"></span>
                  Publica
                  </label>
                  
                  <label htmlFor="private" className='radio-wrapper secondary'>
                    <input type="radio" id="private" name="visibility" value="private" checked={visibility === 'private'} onChange={handleChange} />
                    <span className="custom-radio"></span>
                  Privada
                  </label>
                </div>}
                {idUser === owner &&  <button onClick={editVisibility} className="px-5 py-2.5 bg-red-600  hover:bg-red-700 rounded-lg text-center font-medium block text-white px-2">Editar</button>}
                
                
              </div>
              <div onClick={copyListLink} className='flex px-3 py-2.5 bg-red-600 hover:bg-red-700 rounded-lg copy'>
                <span className="text-white">Copiar link de lista</span>
                <svg className="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 4h3a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3m0 3h6m-6 5h6m-6 4h6M10 3v4h4V3h-4Z"/>
                </svg>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-2  sm:grid-cols-4 gap-x-5 gap-y-5">
              {movies?.length === 0 && <p className='font-semibold text-gray-700 text-base dark:text-white'>Aun no tienes peliculas o series agregadas</p>}
              {movies && movies.map(({ movie }) => {
                const { id, _id:idFilm, title = '', description = '', thumbnail ='' } = movie;
                return <Film owner={idUser === owner} key={id} idList={idList} idFilm={id || idFilm} title={title} imgUrl={thumbnail} overview={description} isListPage></Film>;
              })}
            </div>
          </section>
        </main>
        <Others></Others>
      </div>
      <Toast message={message}></Toast>
    </body>
  );
};

export default List;