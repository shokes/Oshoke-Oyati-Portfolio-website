import Head from 'next/head';
import Hero from '../components/Hero/Hero';
import Layout from '../components/Layout/Layout';

const Home = function () {
  return (
    <Layout>
      <Head>
        <title>Oshoke Oyati - Frontend Developer</title>
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
