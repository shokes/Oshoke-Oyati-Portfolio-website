import projects from '../data';
import Project from '../components/Project/Project';
import { BsDashLg } from 'react-icons/bs';
import Head from 'next/head';

const Work = () => {
  return (
    <section>
      <Head>
        <title>Work - Oshoke Oyati</title>
      </Head>
      <div className='container mt-20 pb-20'>
        <h2 className='mb-12 text-3xl text-text-color mt-20 font-semibold tracking-wider'>
          <BsDashLg className='text-text-link mr-1 inline' />
          projects
        </h2>
        <div className='grid-cols-1'>
          {projects.map((project) => {
            return <Project key={project.id} {...project} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Work;
