import { useEffect } from 'react';
import '../styles/main.scss';
import '../styles/nprogress.scss';
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import NProgress from 'nprogress';

NProgress.configure({
  minimum: 0.6,
  easing: 'ease',
  speed: 800,
  showSpinner: false,
});

const App = ({ Component, pageProps}: AppProps) => {
  const router = useRouter();

  // show progress bar while waiting for page load on route change
  useEffect(() => {
    const handleStart = () => {
      NProgress.start();
    };
    const handleStop = () => {
      NProgress.done();
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleStop);
    router.events.on('routeChangeError', handleStop);
    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleStop);
      router.events.off('routeChangeError', handleStop);
    }
  }, [router]);

  return (
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
};

export default App;
