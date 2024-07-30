import Body from '../../components/body/body';
import Menu from '../../components/menu/menu';
import Others from '../../components/others/others';


export const Home = () => {
  return (
    <div className="font-montserrat text-sm bg-white dark:bg-zinc-900 ">
      <div className="flex min-h-screen  2xl:max-w-screen-2xl 2xl:mx-auto 2xl:border-x-2 2xl:border-gray-200 dark:2xl:border-zinc-700 ">
        <Menu></Menu>
        <Body></Body>
        <Others></Others>
      </div>
    </div>
  );
};

export default Home;
