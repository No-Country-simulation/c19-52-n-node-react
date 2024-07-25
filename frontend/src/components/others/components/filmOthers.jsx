import { getGenerics } from '../../../data/genre';

export const FilmOthers = ({ film }) => {
  const { id, title = '', name = '', vote_average = '', poster_path ='', genre_ids: genreIds = [] } = film;
  return (
    <li key={id} className="flex space-y-3 space-x-3 ">
      <img src={`https://image.tmdb.org/t/p/w92${poster_path}`}
        className="w-1/3 rounded-md" alt="" />
      <div className="flex flex-col justify-between  ">
        <div className="flex flex-col space-y-1">
          <span className="text-gray-700 dark:text-white font-semibold">{title || name}</span>
          <span className="text-xxs hidden xl:block">{getGenerics(genreIds)}</span>
        </div>
        <div className="flex space-x-2 items-center">
          <svg className='w-8 h-5' viewBox="0 0 24 24" fill='#FFD700' width="64" height="32">
            <path d="M12 2L14.09 8.26L21 9.27L16 14.14L17.18 21.02L12 17.77L6.82 21.02L8 14.14L3 9.27L9.91 8.26L12 2Z"/>
          </svg>
          <span>{Number(vote_average).toFixed(2)}</span>
        </div>
      </div>
    </li>
  );
};
export default FilmOthers;