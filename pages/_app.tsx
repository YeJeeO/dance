import type { AppProps } from 'next/app';
import Nav from '../components/Nav';
import { NextUIProvider } from '@nextui-org/react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { Container } from '@mui/system';
import Footer from '../components/Footer';

export default function App({ Component, pageProps }: AppProps) {
  return <>
  <Container  sx={{ display: 'flex'}}>
  <Nav />
  <NextUIProvider>
    <Box>
       <CssBaseline />
      <Box>
              <Component {...pageProps} />
      </Box>
    </Box>
      </NextUIProvider>
  <Footer/>
    </Container>

  </>;
}