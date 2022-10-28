import Head from 'next/head';
import Hero from '../components/Hero/Hero';
import Layout from '../components/Layout/Layout';

const Home = function () {
  return (
    <Layout>
      <Head>
        <title>Oshoke Oyati - Frontend Developer</title>
        <meta
          name='description'
          content='Porfolio website for frontend develeper, Oshoke Oyati.'
        />
        <meta property='og:title' content='Oshoke Oyati - Frontend Developer' />
        <meta
          property='og:description'
          content='Porfolio website for frontend develeper, Oshoke Oyati.'
        />
        <meta property='og:url' content='https://oshoke.vercel.app/' />
        <meta property='og:type' content='website' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
      </Head>
      <section>
        <Hero />
      </section>
    </Layout>
  );
};
export default Home;
