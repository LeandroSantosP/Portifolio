import type { AppProps } from 'next/app';
import { AuthProvider } from '../src/contexts/AuthContenxt';

import { ThemeProvider } from 'styled-components'
import theme from '../src/styles/theme';
import { GlobalStyles } from '../src/styles/GlobalStyles';

export default function App({ Component, pageProps }: AppProps) {

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <GlobalStyles />
          <Component {...pageProps} />
        </AuthProvider>
      </ThemeProvider>
    </>
  )
}
