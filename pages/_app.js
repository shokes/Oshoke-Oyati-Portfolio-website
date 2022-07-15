import '../styles/globals.css';
import Header from '../components/Header/Header';
import Navigation from '../components/Navigation/Navigation';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Navigation />
    </>
  );
}

export default MyApp;
