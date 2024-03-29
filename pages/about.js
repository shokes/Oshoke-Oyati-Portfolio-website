import Shokes from '../public/shokes.jpeg';
import { Zoom, Slide } from 'react-awesome-reveal';
import { BsDashLg } from 'react-icons/bs';
import Image from 'next/image';
import Layout from '../components/Layout/Layout';
import Head from 'next/head';

const About = function () {
  const activePage = 'About';
  return (
    <Layout className='overflow-hidden' activePage={activePage}>
      <Head>
        <title>{activePage} - Oshoke Oyati</title>
        <meta
          name='description'
          content='About frontend develeper, Oshoke Oyati.'
        />
        <meta property='og:title' content='About - Oshoke Oyati.' />
        <meta
          property='og:description'
          content='About frontend develeper, Oshoke Oyati.'
        />
        <meta property='og:url' content='https://oshoke.vercel.app/About' />
        <meta property='og:type' content='website' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
      </Head>
      <div className='container mt-20  pb-10 '>
        <h2 className='mb-12 text-3xl text-text-color   font-semibold tracking-wider'>
          <BsDashLg className='text-text-link mr-1 inline' />
          about
        </h2>
        <div className='grid grid-cols-1  lg:flex items-center space-x-0 lg:space-x-20 '>
          <Zoom triggerOnce>
            <Image
              src={Shokes}
              alt='Shokes'
              width={1100}
              height={1250}
              placeholder='blur'
            />
          </Zoom>
          <div>
            <h3 className='text-lg text-text-color font-bold mt-10 lg:mt-0'>
              Hello world. ✨
            </h3>
            <Slide triggerOnce direction='up' delay={200}>
              <p className='mb-5 mt-3 text-text-color text-xl tracking-wide para '>
                Hi, I&apos;m Oshoke Oyati, a meticulous Frontend Developer
                currently based in Nigeria. I am passionate about solving
                complex problems with responsive website design.
              </p>

              <p className='mb-5 text-text-color text-xl tracking-wide para'>
                Proficient in vanilla JavaScript, hence can easily adapt to any
                of its frameworks depending on the requirements of the job.
              </p>

              <p className='mb-5 text-text-color text-xl tracking-wide para'>
                I&apos;m thrilled by logic and I solve problems for fun. When
                I&apos;m not writing code, I&apos;m either watching football
                games, catching up on the latest TV shows, listening to music or
                surfing the internet.
              </p>

              <a
                className='bg-text-link text-background font-semibold px-2 py-2 rounded-sm hover:bg-white hover:text-black ease-in duration-300 '
                href='https://drive.google.com/file/d/1fn0-pBB_kmesRFMNGrtvbAzSVThpfmiA/view?usp=share_link'
                target='_blank'
                rel='noreferrer'
              >
                Resume →
              </a>
            </Slide>
          </div>
        </div>

        <div className='mt-20 md:mt-36 '>
          <h3 className='text-text-color font-extrabold text-3xl capitalize mb-4 tracking-widest '>
            skills
          </h3>
          <Slide direction='right' duration={2000} triggerOnce>
            <div className='w-full border boder-b border-border'></div>
          </Slide>

          <Slide direction='up' triggerOnce>
            <div className='grid grid-cols-1 md:flex '>
              <div className='w-1/2'>
                <div className='font-bold capitalize text-text-color text-2xl mt-4 mb-2'>
                  technologies
                </div>
                <ul>
                  <li className='text-text-color text-lg '>HTML/CSS</li>
                  <li className='text-text-color text-lg'>TailwindCSS</li>
                  <li className='text-text-color text-lg'>Styled Components</li>
                  <li className='text-text-color text-lg'>JavaScript</li>
                  <li className='text-text-color text-lg'>TypeScript</li>
                  <li className='text-text-color text-lg'>ReactJs</li>
                  <li className='text-text-color text-lg'>Redux</li>
                  <li className='text-text-color text-lg'>NextJs</li>
                  <li className='text-text-color text-lg'>
                    React Testing Library
                  </li>
                  <li className='text-text-color text-lg'>Firebase</li>
                  <li className='text-text-color text-lg'>Jest</li>
                  <li className='text-text-color text-lg'>GraphQL</li>
                </ul>
              </div>

              <div className='w-1/2'>
                <div className='font-bold capitalize  text-text-color text-2xl mt-4 mb-2'>
                  tools
                </div>
                <ul>
                  <li className='text-text-color text-lg '>Git/GitHub</li>
                  <li className='text-text-color text-lg '> Vs Code</li>
                  <li className='text-text-color  text-lg'>Command Line</li>
                </ul>
              </div>
            </div>
          </Slide>
        </div>

        <div>
          <h3 className='text-text-color font-extrabold text-3xl capitalize mb-4 tracking-widest mt-8'>
            education
          </h3>
          <Slide direction='left' duration={2000} triggerOnce>
            <div className='w-full border boder-b border-border '></div>
          </Slide>
          <div>
            <Slide direction='up' triggerOnce>
              <div>
                <div className='font-bold capitalize  text-text-color text-2xl mt-4'>
                  AltSchool Africa
                </div>
                <div className=' capitalize   text-text-color text-base'>
                  Software Engineering
                </div>
                <span className='text-text-color'>2022-present</span>
              </div>
              <div>
                <div className='font-bold capitalize  text-text-color text-2xl mt-4'>
                  Ambrose Alli University
                </div>
                <div className=' capitalize   text-text-color text-base'>
                  B.Eng Mechanical Engineering
                </div>
                <span className='text-text-color'>2014-2019</span>
              </div>
            </Slide>
          </div>
        </div>

        <div className='pb-24'>
          <h3 className='text-text-color font-extrabold text-3xl capitalize mb-4 tracking-widest mt-8 '>
            experience
          </h3>
          <Slide direction='right' duration={2000} triggerOnce>
            <div className='w-full border boder-b border-border'></div>
          </Slide>

          <Slide direction='up' triggerOnce>
            <div className='grid grid-cols-1 md:flex '>
              <div className='md:w-1/2'>
                <div className='font-bold capitalize  text-text-color text-2xl mt-4'>
                  2b Creative
                </div>
                <span className='text-text-color'>2022-2023</span>
              </div>

              <div className='md:w-1/2'>
                <div className='font-semibold text-xl capitalize  text-text-color md:text-2xl mt-4'>
                  {' '}
                  Frontend Developer
                </div>
                <p className='text-text-color text-lg'>
                  Collaborated in the development and maintenance of a range of
                  NextJS websites.
                </p>
              </div>
            </div>
          </Slide>

          <Slide direction='up' triggerOnce>
            <div className='grid grid-cols-1 md:flex '>
              <div className='md:w-1/2'>
                <div className='font-bold capitalize  text-text-color text-2xl mt-4'>
                  Easepay
                </div>
                <span className='text-text-color'>2023-Present</span>
              </div>

              <div className='md:w-1/2'>
                <div className='font-semibold text-xl capitalize  text-text-color md:text-2xl mt-4'>
                  {' '}
                  Frontend Developer
                </div>
                <p className='text-text-color text-lg'>
                  Collaborated with the design and product teams to translate
                  designs into high quality code and user interface.
                </p>
              </div>
            </div>
          </Slide>
        </div>
      </div>
    </Layout>
  );
};

export default About;
