import { BsToggleOff, BsToggleOn } from 'react-icons/bs';
import Link from 'next/link';

const Header = () => {
  return (
    <section>
      <nav className=' pt-12 container flex items-center justify-between text-text-color'>
        <Link
          href='/'
          className='text-2xl  tracking-wider uppercase font-extrabold'
        >
          shokes
        </Link>

        {/* <div className='text-4xl text-text-link' onClick={themeHandler}> */}
        <div className='text-4xl text-text-link'>
          <button>
            <BsToggleOff />

            {/* {theme === 'dark-theme' ? <BsToggleOff /> : <BsToggleOn />} */}
          </button>
        </div>
      </nav>
    </section>
  );
};
export default Header;
