export const ListCard = ({ name='', movies= [] }) => {
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
    return movies.map(({ id, poster_path }) => {
      return (
        <div key={id} className='image-list-card'>
          <img src={`https://image.tmdb.org/t/p/w154/${poster_path}`}
            className="object-cover w-full" alt="" />
        </div>
      )

      ;
    });
  };
  
  return (
    <a href="/ver-lista/asd">
      <div className='list-card flex flex-row rounded-xl overflow-hidden aspect-square border dark:border-zinc-600'>
        {renderImages()}
        <div
          className="w-full h-1/5 bg-white dark:bg-zinc-800 dark:text-white px-3 flex items-center justify-between border-t-2 border-t-red-600">
          <span className="capitalize  font-medium truncate">{name}</span>
          <div className="flex space-x-1 items-center text-xs">
            <svg className="w-8 h-5" viewBox="0 0 24 24" fill="#FFD700" width="64" height="32"><path d="M12 2L14.09 8.26L21 9.27L16 14.14L17.18 21.02L12 17.77L6.82 21.02L8 14.14L3 9.27L9.91 8.26L12 2Z"></path></svg>
            <span>8.8</span>
          </div>
        </div>
      </div>
    </a>
  );   
};

export default ListCard;
