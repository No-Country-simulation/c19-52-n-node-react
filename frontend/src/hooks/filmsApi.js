export const getMovies = () => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOTVlM2Q4NTEwNjJjMTNjN2Y2MDI0YzdmYTBkZGEzNCIsIm5iZiI6MTcyMTE1NDYzNi44NzM0NSwic3ViIjoiNjY5MmQ5Zjc5YjZmZGY2ZjExODkzYjYwIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.odIa4vwxgItLyEOoqz1dNWHnYPowisrpI_JSZaO7w2M'
    }
  };
      
  return fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=es-MX&page=1&sort_by=popularity.desc', options)
    .then(response =>  response.json())
    .catch(err => console.error(err));
};


export const getSeries = () => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOTVlM2Q4NTEwNjJjMTNjN2Y2MDI0YzdmYTBkZGEzNCIsIm5iZiI6MTcyMTE1NDYzNi44NzM0NSwic3ViIjoiNjY5MmQ5Zjc5YjZmZGY2ZjExODkzYjYwIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.odIa4vwxgItLyEOoqz1dNWHnYPowisrpI_JSZaO7w2M'
    }
  };
      
  return fetch('https://api.themoviedb.org/3/discover/tv?include_adult=false&include_video=false&language=es-MX&page=1&sort_by=popularity.desc', options)
    .then(response =>  response.json())
    .catch(err => console.error(err));
};

export const getFilms = () => {
  return Promise.all([getMovies(), getSeries()])
    .then(([{ results: movies }, { results: series }]) => {
      return {
        movies,
        series 
      };
    });
};

export const getTypeFilms = (type) => {
  const typeSelected = type || 'movies';
  const types = {
    movies: getMovies,
    series: getSeries
  };
  return types[typeSelected]();
};

export const searchFilm = async ({ by, type, input }) => {
  const types = {
    movies: 'movie',
    series : 'tv'
  };
  const filterBy = {
    name: 'search',
    genre: 'discover'
  };
  const typeSelected = types[type];
  const filterSelected = filterBy[by];

  const params = {
    name: `query=${input}`,
    genre: `with_genres=${input}`
  };

  const paramSelected = params[by];
  
  
  const response = await fetch(`https://api.themoviedb.org/3/${filterSelected}/${typeSelected}?${paramSelected}&language=es-MX&page=1&sort_by=popularity.desc`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOTVlM2Q4NTEwNjJjMTNjN2Y2MDI0YzdmYTBkZGEzNCIsIm5iZiI6MTcyMTE1NDYzNi44NzM0NSwic3ViIjoiNjY5MmQ5Zjc5YjZmZGY2ZjExODkzYjYwIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.odIa4vwxgItLyEOoqz1dNWHnYPowisrpI_JSZaO7w2M'
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error('Error response: '+data.message);
  }
  return data;
};