import * as React from 'react';
import { useCallback, useState } from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { Container, CssBaseline, ThemeProvider, Typography, styled } from '@mui/material';
import { CacheProvider, EmotionCache } from '@emotion/react';
import theme from '../src/theme';
import createEmotionCache from '../src/createEmotionCache';
import { Link, WrapperContext } from '../src/Components';
import './prism.css';
import './index.css';

const Home = styled(Link)(() => ({
  textDecoration: 'none',
}));

const Footer = styled('footer')(() => ({
  bottom: 0,
  height: 45,
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

const Main = styled(Container)(({ theme }) => ({
  minHeight: 'calc(100vh - 45px)',
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    width: '80%',
  },
  [theme.breakpoints.up('md')]: {
    width: '70%',
  },
  [theme.breakpoints.up('lg')]: {
    width: '60%',
  },
  [theme.breakpoints.up('xl')]: {
    width: '50%',
  },
}))

const Nav = styled(Typography)(({ theme }) => ({
  color: '#eee',
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(0.5),
  paddingBottom: theme.spacing(4),
}));

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const App: React.FC<MyAppProps> = ({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}) => {
  const [showWrapper, setShowWrapper] = useState(true);
  const hideWrapper = useCallback(() => {
    setShowWrapper(false);
  }, [setShowWrapper]);

  return <CacheProvider value={emotionCache}>
    <WrapperContext.Provider value={{ hideWrapper }}>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Main>
          {showWrapper && <>
            <Typography variant="h1" color="primary" fontWeight={700} pt={2}>
              <Home href="/">
                jannes.io
              </Home>
            </Typography>
            <nav>
              <Nav variant="caption">
                <Link color="inherit" href="https://github.com/jannes-io">GitHub</Link>
                |
                <Link color="inherit" href="https://twitter.com/jannesio">Twitter</Link>
                |
                <Link color="inherit"
                  href="https://www.linkedin.com/in/jannes-drijkoningen/">LinkedIn</Link>
                |
                <img src="/img/discord.svg" alt="" width={16} height={16} />
                pvtHenk#8008
              </Nav>
            </nav>
          </>}
          <Component {...pageProps} />
        </Main>
        {showWrapper && <Footer>
          <Typography variant="caption">
            <Link href="https://jannes.io/">jannes.io</Link> © 2023 by Jannes.IO is licensed under
            CC BY 4.0
          </Typography>
        </Footer>}
      </ThemeProvider>
    </WrapperContext.Provider>
  </CacheProvider>;
}

export default App;
