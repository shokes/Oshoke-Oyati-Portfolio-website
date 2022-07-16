import { BsToggleOff, BsToggleOn } from 'react-icons/bs';
import Link from 'next/link';
import { useGlobalContext } from '../../context';

const Header = () => {
  const { theme, themeHandler } = useGlobalContext();

  return (
    <section>
      <nav className=' pt-12 container flex items-center justify-between text-text-color'>
        <Link href='/'>
          <a className='text-2xl  tracking-wider uppercase font-extrabold'>
            {theme === 'dark-theme' ? 'shokes' : 'oshoke'}
          </a>
        </Link>

        <div className='text-4xl text-text-link' onClick={themeHandler}>
          <button>
            {theme === 'dark-theme' ? <BsToggleOff /> : <BsToggleOn />}
          </button>
        </div>
      </nav>
    </section>
  );
};
export default Header;
