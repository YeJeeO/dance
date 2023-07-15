import type { AppProps } from 'next/app';
import Nav from '../components/Nav';

import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { Container } from '@mui/system';


export default function App({ Component, pageProps }: AppProps) {
  return <>
  <Container  sx={{ display: 'flex'}}>
  <Nav />
    <Box>
       <CssBaseline />
      <Box>
              <Component {...pageProps} />
      </Box>
    </Box>
    </Container>
  </>;
}