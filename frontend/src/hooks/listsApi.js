
export const createList = async ({ title }) => {
  const url = `${import.meta.env.APP_API_URL}api/lists/`;
  const dataBody = { title };
  
  const response = await fetch(url, {
    method: 'POST',
    credentials :'include',
    body: JSON.stringify(dataBody),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  
  if (!response.ok) {
    throw new Error('Error response: '+data.message);
  }
  return data;
};
  

export const getYourLists = async () => {
  const id = localStorage.getItem('idUser').trim();
  const url = `${import.meta.env.APP_API_URL}api/lists/?userId=${id}`;
    
  const response = await fetch(url, {
    method: 'GET',
    credentials :'include',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
    
  if (!response.ok) {
    throw new Error('Error response: '+data.message);
  }
  return data;
};



export const saveFilm = async (film) => {
  const url = `${import.meta.env.APP_API_URL}api/movies/`;
  const response = await fetch(url, {
    method: 'POST',
    credentials :'include',
    body: JSON.stringify(film),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
      
  if (!response.ok) {
    throw new Error('Error response: '+data.message);
  }
  return data;
};


export const saveInList = async ({ idList, idFilm }) => {
  const url = `${import.meta.env.APP_API_URL}api/lists/${idList}/${idFilm}`;

  const response = await fetch(url, {
    method: 'POST',
    credentials :'include',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
    
  if (!response.ok) {
    throw new Error('Error response: '+data.message);
  }
  return data;
};

export const getList = async ({ idList }) => {
  const url = `${import.meta.env.APP_API_URL}api/lists/${idList}`;
      
  const response = await fetch(url, {
    method: 'GET',
    credentials :'include',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
      
  if (!response.ok) {
    throw new Error('Error response: '+data.message);
  }
  return data;
};
  

export const deleteFilmOFList = async ({ idList, idFilm }) => {
  const url = `${import.meta.env.APP_API_URL}api/lists/${idList}/movie/${idFilm}`;

  const response = await fetch(url, {
    method: 'DELETE',
    credentials :'include',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
    
  if (!response.ok) {
    throw new Error('Error response: '+data.message);
  }
  return data;
};

export const deleteList = async ({ idList }) => {
  const url = `${import.meta.env.APP_API_URL}api/lists/${idList}/`;

  const response = await fetch(url, {
    method: 'DELETE',
    credentials :'include',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
    
  if (!response.ok) {
    throw new Error('Error response: '+data.message);
  }
  return data;
};
