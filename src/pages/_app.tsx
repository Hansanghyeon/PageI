import { AppProps, Container } from 'next/app';
// components
import MainLayout from '@view/components/layouts/Main';

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
