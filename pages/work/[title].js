import projects from '../../data';
import Image from 'next/image';
import Link from 'next/link';
import { Zoom, Slide } from 'react-awesome-reveal';
import { BsToggleOff, BsToggleOn } from 'react-icons/bs';
import { useRouter } from 'next/router';
import { useGlobalContext } from '../../context';
import { useEffect, useState } from 'react';
import Head from 'next/head';

const WorkDetails = () => {
  const { theme, themeHandler } = useGlobalContext();
  const [theProject, setTheProject] = useState('30BG KICKS');

  // looking for the dynamic id
  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) return;
    // codes using router.query
    const { title } = router.query;

    setTheProject(title);
  }, [router.isReady, router.query]);

  const work = projects.find(
    (project) => project.title.toLowerCase() === theProject.toLowerCase()
  );

  const {
    id,
    title,
    desc,
    stack,
    github,
    website,
    image,
    role,
    para1,
    para2,
    para3,
    image2,
    year,
  } = work;

  return (
    <section>
      <Head>
        <title>{title} - Work</title>
        <meta
          name='description'
          content={`${title} - frontend develeper, Oshoke Oyati.`}
        />
        <meta property='og:title' content={`${title} - Oshoke Oyati.`} />
        <meta
          property='og:description'
          content={`${title} - frontend develeper, Oshoke Oyati.`}
        />
        <meta property='og:url' content={`https://oshoke.vercel.app/${id}`} />
        <meta property='og:type' content='website' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
      </Head>
      <div className='pt-12 container'>
        <nav className='  flex items-center justify-between text-text-color'>
          <Link href='/work'>
            <a
              className='text-xl lg:text-2xl tracking-wider font-extrabold
            underline underline-offset-4'
            >
              back to projects
            </a>
          </Link>

          <div className='text-4xl text-text-link' onClick={themeHandler}>
            <button>
              {theme === 'dark-theme' ? <BsToggleOff /> : <BsToggleOn />}
            </button>
          </div>
        </nav>

        <div className='pt-20 pb-10'>
          <h1 className='text-5xl title uppercase text-text-link font-semibold mb-6'>
            {title}
          </h1>
          <p className='text-2xl text-text-color lg:w-[35rem] mb-3'>{desc}</p>
          <div className='w-[22rem] text-xl'>
            <div className='flex items-center '>
              <div className=' text-text-color capitalize w-1/4'>role :</div>
              <span className='text-text-color capitalize w-3/4'> {role}</span>
            </div>

            <div className='flex items-center '>
              {' '}
              <div className=' text-text-color capitalize w-1/4'>stack :</div>
              <span className=' text-text-color capitalize w-3/4'>
                {stack.join(', ')}.
              </span>
            </div>
            <div className='flex items-center '>
              {' '}
              <div className=' text-text-color capitalize w-1/4'>year :</div>
              <span className=' text-text-color capitalize w-3/4'>{year}.</span>
            </div>
            <div className='flex items-center'>
              <div className='text-text-color capitalize w-1/4'>code : </div>
              <a
                className='text-text-link font-medium  w-3/4 underline underline-offset-4'
                target='_blank'
                href={github}
                rel='noreferrer'
              >
                GitHub repository
              </a>
            </div>
            <div className='flex items-center'>
              <div className=' text-text-color capitalize w-1/4'>live : </div>
              <a
                className='text-text-link font-medium  w-3/4 underline underline-offset-4'
                target='_blank'
                href={website}
                rel='noreferrer'
              >
                Live site
              </a>
            </div>
          </div>
          <div className='grid grid-cols-1 lg:flex gap-x-3 mt-7 mb-6'>
            <Zoom triggerOnce className='w-full lg:w-1/2 mb-3 lg:mb-0'>
              <Image
                src={image}
                width={600}
                height={300}
                alt='project'
                placeholder='blur'
              />
            </Zoom>
            <Zoom triggerOnce delay={600} className='w-full lg:w-1/2 '>
              <Image
                src={image2}
                width={600}
                height={300}
                alt='project'
                placeholder='blur'
              />
            </Zoom>
          </div>
          <h3 className='text-2xl font-semibold text-text-link mb-3'>
            About project
          </h3>
          <Slide
            direction='up'
            className='mb-6 text-text-color text-xl tracking-wide para'
          >
            <p>{para1} </p>
          </Slide>
          <Slide
            direction='up'
            className='mb-6 text-text-color text-xl tracking-wide para'
          >
            <p> {para2} </p>
          </Slide>
          <Slide
            direction='up'
            className='mb-6 text-text-color text-xl tracking-wide para'
          >
            <p> {para3} </p>
          </Slide>
          <div className='text-text-color text-xl'>
            <span className='mr-1'> I also built </span>
            {projects
              .filter(
                (project) =>
                  theProject.toLocaleLowerCase() !==
                  project.title.toLocaleLowerCase()
              )
              .map((project, index) => {
                let separator;
                if (index === projects.length - 3) {
                  separator = 'and';
                } else if (index === projects.length - 2) {
                  separator = '.';
                } else separator = ',';

                return (
                  <div key={project.id} className='inline-block'>
                    <Link href={`/work/${project.title.toLowerCase()}`}>
                      <a className='mb-6 text-text-link uppercase  para project-link'>
                        {project.title}
                      </a>
                    </Link>
                    <span
                      className={`mr-2 ${separator === 'and' ? 'ml-2' : null}`}
                    >
                      {separator}
                    </span>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
};
export default WorkDetails;
