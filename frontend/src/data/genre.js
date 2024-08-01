
export const genres = [
  { id: 12, name: 'Aventura' },
  { id: 14, name: 'Fantasía' },
  { id: 16, name: 'Animación' },
  { id: 18, name: 'Drama' },
  { id: 27, name: 'Terror' },
  { id: 28, name: 'Acción' },
  { id: 35, name: 'Comedia' },
  { id: 36, name: 'Historia' },
  { id: 37, name: 'Western' },
  { id: 53, name: 'Suspense' },
  { id: 80, name: 'Crimen' },
  { id: 99, name: 'Documental' },
  { id: 878, name: 'Ciencia ficción' },
  { id: 9648, name: 'Misterio' },
  { id: 10402, name: 'Música' },
  { id: 10749, name: 'Romance' },
  { id: 10751, name: 'Familia' },
  { id: 10752, name: 'Bélica' },
  { id: 10759, name: 'Action & Adventure' },
  { id: 10762, name: 'Kids' },
  { id: 10763, name: 'News' },
  { id: 10764, name: 'Reality' },
  { id: 10765, name: 'Sci-Fi & Fantasy' },
  { id: 10766, name: 'Soap' },
  { id: 10767, name: 'Talk' },
  { id: 10768, name: 'War & Politics' },
  { id: 10770, name: 'Película de TV' }
];

export const getGenerics = (genreIds) => {
  const generosFilm = genres.filter((genre) => genreIds.includes(genre.id));
  const generos = generosFilm.map(genre => genre.name).join(', ');
  return generos;
};

