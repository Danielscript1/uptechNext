import type { AppProps } from 'next/app'
import { NextPage } from 'next';
import { ReactElement, ReactNode } from 'react';
import { createGlobalStyle, DefaultTheme, ThemeProvider } from 'styled-components';
import {GlobalStyle} from '../styles/GlobalStyle';
import theme from '../styles/theme';



export type NextPageWithLayout = NextPage & {
 getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
Component: NextPageWithLayout
}

function App({ Component, pageProps }: AppPropsWithLayout) {
 const getLayout = Component.getLayout ?? ((page) => page)
 return getLayout(
  <>
  <GlobalStyle />
  <ThemeProvider theme={theme}>
  <Component {...pageProps} />
  </ThemeProvider>
 </>
 )
}

export default App

