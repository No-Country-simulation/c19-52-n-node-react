import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App.jsx';
import './main.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Template from './pages/template/template.jsx';
import Holah1 from './pages/holah1/holah1.jsx';
import Holah2 from './pages/holah2/holah2.jsx';
import Home from './pages/home/home.jsx';
import List from './pages/list/list.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/template',
    element: <Template />,
  },
  {
    path: '/ver-listados',
    element: <List />,
  },
  {
    path: '/holah1',
    element: <Holah1 />,
  },
  {
    path: '/holah2',
    element: <Holah2 />,
  },
  {
    path: '*',
    element: <h1>Error weon</h1>,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);