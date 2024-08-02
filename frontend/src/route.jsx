import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App.jsx';
import './main.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/home/home.jsx';
import List from './pages/list/list.jsx';
import YourList from './pages/yourList/yourList.jsx';
import Login from './pages/login/login.jsx';
import PublicLists from './pages/public-lists/publicList.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/ver-lista/:id',
    element: <List />,
  },
  {
    path: '/tus-listas',
    element: <YourList />,
  },
  {
    path: '/listas-publicas',
    element: <PublicLists />,
  },
  {
    path: '*',
    element: <h1>Error proximamente cartel error</h1>,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);