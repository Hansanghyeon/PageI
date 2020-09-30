import { AppProps } from 'next/app';
// components
import MainLayout from '@view/components/layouts/Main';
import config from 'react-reveal/globals';
config({ ssrFadeout: true });

function App({ Component, pageProps }: AppProps) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}

export default App;
