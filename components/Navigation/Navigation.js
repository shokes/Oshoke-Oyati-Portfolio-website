import Link from 'next/link';

const nav = [
  {
    id: 1,
    title: 'Work',
    url: '/Work',
  },

  {
    id: 2,
    title: 'About',
    url: '/About',
  },

  {
    id: 3,
    title: 'Contact',
    url: '/Contact',
  },
];

const Navigation = function ({ activePage }) {
  return (
    <section className='px-48'>
      <div className='bottom-0 bg-background ease-in duration-300 left-0 right-0 fixed  pb-3 pt-3 '>
        <ul className='flex  justify-evenly text-xl list-none'>
          {nav.map((item) => {
            return (
              <Link href={item.url} key={item.id}>
                <li
                  className={`hover-underline-animation font-semibold cursor-pointer ${
                    activePage === item.title
                      ? 'text-text-link'
                      : 'text-text-color'
                  }`}
                >
                  {item.title}
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Navigation;
