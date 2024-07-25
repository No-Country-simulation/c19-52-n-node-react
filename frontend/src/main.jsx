import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App.jsx';
import './main.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/home/home.jsx';
import List from './pages/list/list.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/ver-listados',
    element: <List />,
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