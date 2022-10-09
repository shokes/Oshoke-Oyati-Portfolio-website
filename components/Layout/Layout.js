import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import Head from 'next/head';

const Layout = ({ children, activePage }) => {
  return (
    <section>
      <Head>
        <title>{activePage} - Oshoke Oyati</title>
      </Head>
      <Header />
      {children}
      <Navigation activePage={activePage} />
    </section>
  );
};

export default Layout;
