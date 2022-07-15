import Link from 'next/link';
import { Fade, Slide } from 'react-awesome-reveal';
import Image from 'next/image';

const SingleWork = function ({ title, desc, mainImage, id }) {
  return (
    <section>
      <div className='grid grid-cols-1 lg:flex justify-between items-center mb-10 overflow-hidden'>
        <div className=''>
          {/* <Link to={`/work/${id}`}> */}
          {/* <Link href='/'> */}
          <Fade triggerOnce duration={2000}>
            <h2 className='text-5xl title uppercase text-text-link font-semibold cursor-pointer w-[25rem]'>
              {title}{' '}
            </h2>
          </Fade>

          <Slide delay={200} triggerOnce>
            {/* <div className='border-4 border-text-link  w-1/2 md:w-1/4 mb-6 lg:w-1/2'></div> */}
            <div className='border-4 border-red-600  w-1/2 md:w-1/4 mb-6 lg:w-1/2'></div>
          </Slide>
          {/* </Link> */}
          <Slide delay={400} triggerOnce direction='up'>
            <p className='text-text-color mb-3 lg:mb-0 text-2xl w-[18rem]'>
              {desc}
            </p>
          </Slide>
        </div>
        {/* <Link
          to={`/work/${id}`}
          className=' relative project w-full md:w-[29rem] '
        > */}
        {/* <Link href='/' className=' relative project w-full md:w-[29rem] '> */}
        {/* <img
          src={mainImage}
          alt='project'
          className='w-full md:w-[29rem] h-[30rem] lg:h-[35rem] project-image rounded-lg'
        /> */}
        <Image src={mainImage} alt='project' width={464} height={560} />
        <span className='absolute top-1/3 font-semibold right-1/2 bg-white translate-y-[1.5rem] translate-x-1/2  see-more     p-14 w-5 h-5 flex items-center justify-center rounded-full text-black'>
          See more
        </span>
        {/* </Link> */}
      </div>
    </section>
  );
};

export default SingleWork;
