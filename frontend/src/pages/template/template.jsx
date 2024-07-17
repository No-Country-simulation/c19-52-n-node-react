/* eslint-disable react/no-unknown-property */

import Aside from '../../components/menu';
import AsideTwo from './components/asideTwo';
import Main from './components/main';

// import './template.scss' // comentar
const Template = () => {
 
  return (
    <>
      <html lang="en" /* :class="isDark ? 'dark' : 'light'" */ /* class="dark" */ /* x-data="{ isDark: true }" */ />
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="author" content="Mazyar" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* <link href="/styles/style.css" rel="stylesheet" /> */}
        <meta name="author" content="Mazyar" />
        <title>Movie Management Dashboard</title>
        <script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>
  
      </head>
      <body class="font-montserrat text-sm bg-white dark:bg-zinc-900 ">
        <div class="flex min-h-screen  2xl:max-w-screen-2xl 2xl:mx-auto 2xl:border-x-2 2xl:border-gray-200 dark:2xl:border-zinc-700 ">
          <Aside></Aside>
          <Main></Main>
          <AsideTwo></AsideTwo>
        </div>
      </body>
    </>
  );
};
export default Template;
  