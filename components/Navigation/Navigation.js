import Link from 'next/link';

const nav = [
  {
    id: 1,
    title: 'work',
    url: '/Work',
  },

  {
    id: 2,
    title: 'about',
    url: '/About',
  },

  {
    id: 3,
    title: 'contact',
    url: '/Contact',
  },
];

const Navigation = function () {
  return (
    <section className='px-48'>
      <div className='bottom-0 bg-background ease-in duration-300 left-0 right-0 fixed text-text-color pb-3 pt-3 '>
        <ul className='flex  justify-evenly text-xl capitalize'>
          {nav.map((item) => (
            <Link href={`${item.url}`} key={item.id}>
              <a className='hover-underline-animation font-semibold cursor-pointer'>
                {item.title}
              </a>
            </Link>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Navigation;
