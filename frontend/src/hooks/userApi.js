export const currentUser = async () => {
  const url = `${import.meta.env.APP_API_URL}api/users/current/`;
  return fetch(url)
    .then((res) => res.json())
    .catch((error) => console.error('Error:', error));
};

export const login = async ({ email, password }) => {
  const url = `${import.meta.env.APP_API_URL}api/users/login/`;
  const dataBody = { email, password };

  const response = await fetch(url, {
    method: 'POST',
    credentials: 'include', 
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

export const logout = async () => {
  const url = `${import.meta.env.APP_API_URL}api/users/logout/`;

  const response = await fetch(url, {
    method: 'POST',
    credentials: 'include',
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

/* export const register = async({ name, lastname, email, password }) => {

};  */
