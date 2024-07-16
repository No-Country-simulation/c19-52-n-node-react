import Body from '../../components/body';
import { Menu } from '../../components/menu';
import { Others } from '../../components/others';

export const Home = () => {
  return (
    <body className="font-montserrat text-sm bg-white dark:bg-zinc-900 ">
      <div className="flex min-h-screen  2xl:max-w-screen-2xl 2xl:mx-auto 2xl:border-x-2 2xl:border-gray-200 dark:2xl:border-zinc-700 ">
        <Menu></Menu>
        <Body></Body>
        <Others></Others>
      </div>
    </body>
  );
};

export default Home;
