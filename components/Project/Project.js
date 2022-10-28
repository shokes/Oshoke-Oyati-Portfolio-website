import Link from 'next/link';
import { Fade, Slide } from 'react-awesome-reveal';
import Image from 'next/image';

const SingleWork = function ({ title, desc, mainImage, id }) {
  return (
    <section>
      <div className='grid grid-cols-1 lg:flex justify-between items-center mb-14 overflow-hidden'>
        <div className=''>
          <Link href={`/${id}`}>
            <div>
              <Fade triggerOnce duration={2000}>
                <h2 className='text-5xl title uppercase text-text-link font-semibold cursor-pointer w-[25rem]'>
                  {title}{' '}
                </h2>
              </Fade>
            </div>
          </Link>

          <Slide delay={200} triggerOnce>
            <div className='border-4 border-text-link  w-1/2 md:w-1/4 mb-6 lg:w-1/2'></div>
          </Slide>

          <Slide delay={400} triggerOnce direction='up'>
            <p className='text-text-color mb-3 lg:mb-0 text-2xl w-[18rem]'>
              {desc}
            </p>
          </Slide>
        </div>

        <Link href={`/${id}`}>
          <div className='relative cursor-pointer project w-full md:w-[464px]'>
            <Image
              src={mainImage}
              alt='project'
              className='project-image'
              width={664}
              height={760}
            />
            <span className='absolute top-1/3 font-semibold right-1/2 bg-white translate-y-[1.5rem] translate-x-1/2  see-more     p-14 w-5 h-5 flex items-center justify-center rounded-full text-black'>
              See more
            </span>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default SingleWork;
