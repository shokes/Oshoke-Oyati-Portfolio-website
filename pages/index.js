import Head from 'next/head';
import Hero from '../components/Hero/Hero';

const Home = function () {
  return (
    <>
      <Head>
        <title>Oshoke Oyati - Frontend Developer</title>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
      </Head>
      <section>
        <Hero />
      </section>
    </>
  );
};
export default Home;
