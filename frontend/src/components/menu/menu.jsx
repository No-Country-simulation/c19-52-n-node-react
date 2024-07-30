import { useLocation } from 'react-router-dom';
import ModalLogin from '../modal-login/modal-login';
import { useState } from 'react';

export const Menu = () => {
  const [showModal, setShowLogin] = useState(false);
  
  const { pathname } = useLocation();
  const section = pathname.split('/');
  const currentSection = section[1] || 'inicio';
  const theme = localStorage.getItem('theme');
  
  if(theme) {
    window.document.getElementsByTagName('html')[0].className = theme;
  }
  function border(section) {
    return currentSection === section ? 'font-semibold border-r-4 border-r-red-600' : '';
  }
  function fill(section) {
    return currentSection === section ? 'fill-red-600' : '';
  }
  const darkMode = () => {
    const mode = window.document.getElementsByTagName('html')[0].className;
    if (mode === 'dark') {
      localStorage.setItem('theme', 'light');
      window.document.getElementsByTagName('html')[0].className = 'light';
    }
    else {
      localStorage.setItem('theme', 'dark');
      window.document.getElementsByTagName('html')[0].className = 'dark';
    }
  };

  const openModal = () => {
    setShowLogin(true);
  };

  const closeLogin = () => {
    setShowLogin(false);    
  };


  return (
    <aside className=" w-1/6 py-10 pl-10  min-w-min  border-r border-gray-300 dark:border-zinc-700  hidden md:block ">
  
      <div className=" font-bold text-lg flex items-center gap-x-3">
        <svg className="h-8 w-8 fill-red-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path
            d="M10 15.5v-7c0-.41.47-.65.8-.4l4.67 3.5c.27.2.27.6 0 .8l-4.67 3.5c-.33.25-.8.01-.8-.4Zm11.96-4.45c.58 6.26-4.64 11.48-10.9 10.9 -4.43-.41-8.12-3.85-8.9-8.23 -.26-1.42-.19-2.78.12-4.04 .14-.58.76-.9 1.31-.7v0c.47.17.75.67.63 1.16 -.2.82-.27 1.7-.19 2.61 .37 4.04 3.89 7.25 7.95 7.26 4.79.01 8.61-4.21 7.94-9.12 -.51-3.7-3.66-6.62-7.39-6.86 -.83-.06-1.63.02-2.38.2 -.49.11-.99-.16-1.16-.64v0c-.2-.56.12-1.17.69-1.31 1.79-.43 3.75-.41 5.78.37 3.56 1.35 6.15 4.62 6.5 8.4ZM5.5 4C4.67 4 4 4.67 4 5.5 4 6.33 4.67 7 5.5 7 6.33 7 7 6.33 7 5.5 7 4.67 6.33 4 5.5 4Z">
          </path>
        </svg>
        <div className="tracking-wide dark:text-white">FlickTracker<span className="text-red-600">.</span></div>
      </div>
      <div className="mt-12 flex flex-col gap-y-4 text-gray-500 fill-gray-500 text-sm dark:text-white">
        <div className="text-gray-400/70  font-medium uppercase">Menu</div>
        <a className={`${border('inicio')} flex items-center space-x-2 py-1 group hover:border-r-4 hover:border-r-red-600 hover:font-semibold dark:hover:text-white`}
          href="/">
          <svg className={`${fill('inicio')} h-5 w-5 group-hover:fill-red-600 dark:fill-white`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              d="M5 22h14v0c1.1 0 2-.9 2-2v-9 0c0-.27-.11-.53-.29-.71l-8-8v0c-.4-.39-1.02-.39-1.41 0l-8 8h0c-.2.18-.3.44-.3.71v9 0c0 1.1.89 2 2 2Zm5-2v-5h4v5Zm-5-8.59l7-7 7 7V20h-3v-5 0c0-1.11-.9-2-2-2h-4v0c-1.11 0-2 .89-2 2v5H5Z">
            </path>
          </svg>
          <span>Inicio</span>
        </a>
        <a className={`${border('tus-listas')} flex items-center space-x-2 py-1 group hover:border-r-4 hover:border-r-red-600 hover:font-semibold dark:hover:text-white`}
          href="/tus-listas">
          <svg className={`${fill('tus-listas')} h-5 w-5 group-hover:fill-red-600 dark:fill-white`} xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24">
            <g>
              <path
                d="M19 2H9c-1.11 0-2 .89-2 2v5.586l-4.707 4.7v0c-.4.39-.4 1.02 0 1.41 .18.18.44.29.7.29v5 0c0 .55.44 1 1 1h16v0c.55 0 1-.45 1-1v-17c0-1.11-.9-2-2-2Zm-8 18H5v-5.586l3-3 3 3V20Zm8 0h-6v-4 0c.55 0 .99-.45 1-1 0-.27-.11-.53-.3-.72L8.99 9.57V3.984h10v16Z">
              </path>
              <path d="M11 6h2v2h-2Zm4 0h2v2h-2Zm0 4.03h2v1.96h-2Zm0 3.96h2v2h-2Zm-8 1h2v2H7Z"></path>
            </g>
          </svg>
          <span>Tus Listas</span>
        </a>
        <div className="mt-8 text-gray-400/70  font-medium uppercase">Social</div>
        <a className=" flex items-center space-x-2 py-1  group hover:border-r-4 hover:border-r-red-600 hover:font-semibold dark:hover:text-white "
          href="#">
          <svg className="dark:fill-white h-5 w-5 group-hover:fill-red-600 " xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24">
            <path
              d="M12 2v0C9.23 2 7 4.23 7 7c0 2.76 2.23 5 5 5 2.76 0 5-2.24 5-5v0c0-2.77-2.24-5-5-5Zm0 8v0c-1.66 0-3-1.35-3-3 0-1.66 1.34-3 3-3 1.65 0 3 1.34 3 3v0c0 1.65-1.35 3-3 3Zm9 11v-1 0c0-3.87-3.14-7-7-7h-4v0c-3.87 0-7 3.13-7 7v1h2v-1 0c0-2.77 2.23-5 5-5h4v0c2.76 0 5 2.23 5 5v1Z">
            </path>
          </svg>
          <span>Perfil</span>
        </a>
        <div className="mt-8 text-gray-400/70  font-medium uppercase">General</div>
        <a className=" flex items-center space-x-2 py-1  group hover:border-r-4 hover:border-r-red-600 hover:font-semibold dark:hover:text-white "
          href="#">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:stroke-red-600" fill="none"
            viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span>Ajustes</span>
        </a>
        <a onClick={openModal} className=" flex items-center space-x-2 py-1  group hover:border-r-4 hover:border-r-red-600 hover:font-semibold dark:hover:text-white"
          href="#">
          <svg className="dark:fill-white h-5 w-5 group-hover:fill-red-600 svg-login " xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24">
            <g>
              <path d="M16 13v-2H7V8l-5 4 5 4v-3Z"></path>
              <path
                d="M20 3h-9c-1.11 0-2 .89-2 2v4h2V5h9v14h-9v-4H9v4c0 1.1.89 2 2 2h9c1.1 0 2-.9 2-2V5c0-1.11-.9-2-2-2Z">
              </path>
            </g>
          </svg>
          <span>Iniciar sesión</span>
        </a>
        <a onClick={openModal} className=" flex items-center space-x-2 py-1  group hover:border-r-4 hover:border-r-red-600 hover:font-semibold dark:hover:text-white"
          href="#">
          <svg className="dark:fill-white h-5 w-5 group-hover:fill-red-600 " xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24">
            <g>
              <path d="M16 13v-2H7V8l-5 4 5 4v-3Z"></path>
              <path
                d="M20 3h-9c-1.11 0-2 .89-2 2v4h2V5h9v14h-9v-4H9v4c0 1.1.89 2 2 2h9c1.1 0 2-.9 2-2V5c0-1.11-.9-2-2-2Z">
              </path>
            </g>
          </svg>
          <span>Cerrar sesión</span>
        </a>
        <a className=" flex items-center space-x-2 py-1 mt-4" href="#">
          <div
            className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in"
          >
            <input type="checkbox" name="toggle" id="toggle"
              onClick={darkMode}
              className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 border-gray-300 appearance-none cursor-pointer"
            />
            <label htmlFor="toggle"
              className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
          </div>
          <label htmlFor="toggle" className="">Modo oscuro</label>
        </a>
        {showModal && <ModalLogin closeModal={closeLogin}/>}

      </div>

    </aside>
  );

  
};

export default Menu;
