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