import projects from '../data';
import Project from '../components/Project/Project';
import { BsDashLg } from 'react-icons/bs';
import Layout from '../components/Layout/Layout';
import Head from 'next/head';

const Work = () => {
  const activePage = 'Work';
  return (
    <Layout activePage={activePage}>
      <Head>
        <title>{activePage} - Frontend Developer</title>
        <meta
          name='description'
          content='Work of frontend develeper, Oshoke Oyati.'
        />
        <meta property='og:title' content='Work -  Oshoke Oyati' />
        <meta
          property='og:description'
          content='Work of frontend develeper, Oshoke Oyati.'
        />
        <meta property='og:url' content='https://oshoke.vercel.app/Work' />
        <meta property='og:type' content='website' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
      </Head>
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
