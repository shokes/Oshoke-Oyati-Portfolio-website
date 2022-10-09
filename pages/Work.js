import projects from '../data';
import Project from '../components/Project/Project';
import { BsDashLg } from 'react-icons/bs';
import Layout from '../components/Layout/Layout';

const Work = () => {
  const activePage = 'Work';
  return (
    <Layout activePage={activePage}>
      <div className='container mt-20 pb-20'>
        <h2 className='mb-12 text-3xl text-text-color mt-20 font-semibold tracking-wider relative'>
          <BsDashLg className='text-text-link mr-1 inline' />
          projects{' '}
          <span className='text-sm text-text-link absolute left-[10.25rem]'>
            {projects.length}
          </span>
        </h2>
        <div className='grid-cols-1'>
          {projects.map((project) => {
            return <Project key={project.id} {...project} />;
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Work;
