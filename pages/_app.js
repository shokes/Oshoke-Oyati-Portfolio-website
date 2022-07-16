import '../styles/globals.css';
import Header from '../components/Header/Header';
import Navigation from '../components/Navigation/Navigation';
import { useRouter } from 'next/router';
import { AppProvider } from '../context';

function MyApp({ Component, pageProps }) {
  // getting dynamic route file path
  const router = useRouter();
  const { id } = router.query;
  const { asPath } = router;

  if (asPath === `/${id}`) {
    return (
      <>
        <AppProvider>
          <Component {...pageProps} />
        </AppProvider>
      </>
    );
  } else {
    return (
      <>
        <AppProvider>
          <Header />
          <Component {...pageProps} />
          <Navigation />
        </AppProvider>
      </>
    );
  }
}

export default MyApp;
