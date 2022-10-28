import { BsDashLg } from 'react-icons/bs';
import { Slide } from 'react-awesome-reveal';
import Layout from '../components/Layout/Layout';
import Head from 'next/head';

const Contact = function () {
  const activePage = 'Contact';
  return (
    <Layout activePage={activePage}>
      <Head>
        <title>{activePage} - Oshoke Oyati</title>
        <meta
          name='description'
          content='Contact frontend develeper, Oshoke Oyati.'
        />
        <meta property='og:title' content='Contact - Oshoke Oyati.' />
        <meta
          property='og:description'
          content='Contact frontend develeper, Oshoke Oyati.'
        />
        <meta property='og:url' content='https://oshoke.vercel.app/Contact' />
        <meta property='og:type' content='website' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
      </Head>
      <div className='container mt-20 pb-20'>
        <h2 className='mb-12 text-3xl text-text-color mt-20 font-semibold tracking-wider'>
          <BsDashLg className='text-text-link mr-1 inline ' />
          contact
        </h2>
        <div className='text-center'>
          <h4 className=' uppercase text-xl text-text-color mb-4'>
            send me a message
          </h4>
          <Slide direction='up' duration={200}>
            <a
              className=' text-5xl lg:text-6xl font-semibold text-text-color underline underline-offset-4 mail'
              href='mailto:oyatioshoke@yahoo.com'
              target='_blank'
              rel='noreferrer'
            >
              oyatioshoke@yahoo.com
            </a>
          </Slide>

          <h4 className=' uppercase text-xl text-text-color mt-10 mb-4'>
            OR CONNECT WITH ME ON SOCIALS
          </h4>
          <div className='grid grid-cols-1'>
            <Slide direction='up' delay={200} duration={300} className=' mb-1'>
              <a
                href='https://twitter.com/Airshokes'
                target='_blank'
                rel='noreferrer'
                className='underline underline-offset-4 text-5xl lg:text-6xl  uppercase  text-text-color'
              >
                Twitter
              </a>
            </Slide>
            <Slide direction='up' delay={400} duration={300} className=' mb-1'>
              <a
                className='underline underline-offset-4 uppercase text-5xl lg:text-6xl  text-text-color '
                href='https://github.com/shokes'
                target='_blank'
                rel='noreferrer'
              >
                github
              </a>
            </Slide>
            <Slide direction='up' delay={600} duration={300} className=' mb-1'>
              <a
                className='underline underline-offset-4 uppercase text-5xl lg:text-6xl text-text-color'
                href='https://www.linkedin.com/in/oshoke-oyati?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B7bIwlnH1TeKUJ6r3jWAS6g%3D%3D'
                rel='noreferrer'
                target='_blank'
              >
                linkedin
              </a>
            </Slide>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
