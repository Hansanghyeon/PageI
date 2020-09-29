import { AppProps, Container } from 'next/app';
// components
import MainLayout from '@view/components/layouts/Main';
import config from 'react-reveal/globals';
config({ ssrFadeout: true });

function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </Container>
  );
}

export default App;
