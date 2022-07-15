import Shokes from '../public/shokes.jpeg';
import { Zoom, Slide } from 'react-awesome-reveal';
import { BsDashLg } from 'react-icons/bs';
import Image from 'next/image';

const About = function () {
  return (
    <section>
      <div className='container mt-20  pb-10 overflow-x-hidden'>
        <h2 className='mb-12 text-3xl text-text-color   font-semibold tracking-wider'>
          <BsDashLg className='text-text-link mr-1 inline' />
          about
        </h2>
        <div className='grid grid-cols-1  lg:flex space-x-0 lg:space-x-20 '>
          <Zoom triggerOnce>
            {/* <img className='w-50 h-50 rounded-lg' src={Shokes} alt='Shokes' /> */}
            <Image src={Shokes} alt='Shokes' width={900} height={1000} />
          </Zoom>
          <div>
            <h3 className='text-lg text-text-color font-bold mt-10 lg:mt-0'>
              Hello world. ✨
            </h3>
            <Slide triggerOnce direction='up' delay={200}>
              <p className='mb-6 mt-3 text-text-color text-xl tracking-wide para '>
                Hi, I’m Oshoke Oyati, a meticulous Frontend Developer currently
                based in Nigeria and I enjoy what I do. I am passionate about
                solving complex problems with responsive website design.
              </p>

              <p className='mb-6 text-text-color text-xl tracking-wide para'>
                Proficient in vanilla javascript, hence can easily adapt to any
                of its frameworks depending on the requirements of the job.
              </p>

              <p className='mb-6 text-text-color text-xl tracking-wide para'>
                I'm thrilled by logic; and I solve problems for fun. When I'm
                not working I'm either watching football games, catching up on
                my latest shows, listening to music or surfing the internet.
              </p>

              <a
                className='bg-text-link text-background font-semibold px-2 py-1 rounded-lg hover:bg-white hover:text-black ease-in duration-300 '
                href='https://drive.google.com/file/d/1XFaffEA1GGCd_RdK2xFsURu4qUJs-ZKe/view?usp=drivesdk'
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
                  languages/frameworks
                </div>
                <ul>
                  <li className='text-text-color text-lg '>HTML 5</li>
                  <li className='text-text-color text-lg'>CSS 3</li>
                  <li className='text-text-color text-lg'>TailwindCss</li>
                  <li className='text-text-color text-lg'>Styled components</li>
                  <li className='text-text-color text-lg'>JavaScript</li>
                  <li className='text-text-color text-lg'>ReactJs</li>
                  <li className='text-text-color text-lg'>Redux</li>
                  <li className='text-text-color text-lg'>NextJs</li>
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
                  IT Consultant
                </div>
                <span className='text-text-color'>2020-present</span>
              </div>

              <div className='md:w-1/2'>
                <div className='font-semibold text-xl capitalize  text-text-color md:text-2xl mt-4'>
                  {' '}
                  Frontend Developer
                </div>
                <p className='text-text-color text-lg'>
                  I help bring various clients' visions into reality through
                  seamless processes and on time delivery.
                </p>
              </div>
            </div>
          </Slide>
          <Slide direction='up' triggerOnce>
            <div className='grid grid-cols-1 md:flex'>
              <div className='md:w-1/2'>
                <div className='font-bold capitalize  text-text-color text-2xl mt-4'>
                  {' '}
                  Nestle
                </div>
                <span className='text-text-color'> June 2018-Dec 2018</span>
              </div>

              <div className='md:w-1/2'>
                <div className='font-semibold text-xl capitalize text-text-color md:text-2xl mt-4'>
                  {' '}
                  Mechanical Engineer
                </div>
                <p className='text-text-color text-lg'>
                  I managed a variety of customer services and administrative
                  tasks to resolve customer issues.
                </p>
              </div>
            </div>
          </Slide>

          <Slide direction='up' triggerOnce>
            <div className='grid grid-cols-1 md:flex'>
              <div className='md:w-1/2'>
                <div className='font-bold capitalize  text-text-color text-2xl mt-4'>
                  {' '}
                  AltSchool Africa
                </div>
                <span className='text-text-color'>Feb 2022-present</span>
              </div>

              <div className='md:w-1/2'>
                <div className='font-semibold text-xl capitalize  text-text-color md:text-2xl mt-4'>
                  {' '}
                  Frontend Developer Student
                </div>
                <p className='text-text-color text-lg'>
                  Excited to begin my journey at a very good school that teaches
                  skills that apply to my everyday work.
                </p>
              </div>
            </div>
          </Slide>
        </div>
      </div>
    </section>
  );
};

export default About;
