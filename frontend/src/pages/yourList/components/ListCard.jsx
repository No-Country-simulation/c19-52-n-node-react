import { deleteList } from '../../../hooks/listsApi';

export const ListCard = ({ name='', idList ='', movies= [] }) => {
  const renderImages = () => {
    if (movies.length === 0) {
      return <>
        <div className='image-list-card'>
          <img src="/images/vacio.png"
            className="object-cover w-full  " alt="" />
        </div>
        <div className='image-list-card'> 
          <img src="/images/vacio.png"
            className="object-cover w-full  " alt="" />
        </div>
        <div className='image-list-card'> 
          <img src="/images/vacio.png"
            className=" object-cover w-full  " alt="" />
        </div>
        <div className='image-list-card'>
          <img src="/images/vacio.png"
            className=" object-cover w-full  " />
        </div>
      </>;
    }
    
    const [first, second, third, fourth] = movies || []; 
    return (
      <><div className='image-list-card'>
        <img src={first?.movie?.thumbnail || '/images/vacio.png'}
          className="object-cover w-full" alt="" />
      </div><div className='image-list-card'>
        <img src={second?.movie?.thumbnail || '/images/vacio.png'}
          className="object-cover w-full" alt="" />
      </div><div className='image-list-card'>
        <img src={third?.movie?.thumbnail || '/images/vacio.png'}
          className="object-cover w-full" alt="" />
      </div><div className='image-list-card'>
        <img src={fourth?.movie?.thumbnail || '/images/vacio.png'}
          className="object-cover w-full" alt="" />
      </div></>
    );
  };

  const deleteListButton = async() => {
    event.preventDefault();
    try {
      await deleteList({ idList });
      window.location.reload();
    } catch (error) {
      console.log('🚀 :', error.message);
    } 
  };
  
  return (
    <a href={`/ver-lista/${idList}`}>
      <div className='list-card flex flex-row rounded-xl overflow-hidden aspect-square border dark:border-zinc-600'>
        {renderImages()}
        <div
          className="w-full h-1/5 bg-white dark:bg-zinc-800 dark:text-white px-3 flex items-center justify-between border-t-2 border-t-red-600">
          <span className="capitalize  font-medium truncate">{name}</span>
          <div onClick={deleteListButton} className="flex space-x-1 items-center text-xs bg-red-600 hover:bg-red-700 rounded-lg button-delete">
            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"/>
            </svg>
          </div>
        </div>
      </div>
    </a>
  );   
};

export default ListCard;
