import type { AppProps } from 'next/app';
import { AuthProvider } from '../src/contexts/AuthContenxt';

import { ThemeToggleProvider } from '../src/contexts/themeContentext'
import { GlobalStyles } from '../src/styles/GlobalStyles';
import { Layout } from '../src/components/Layout/';

/**
 * The main App component.           
 * @param {AppProps} props - The props passed to the App component.           
 * @returns None           
 */
export default function App({ Component, pageProps }: AppProps) {

  return (
    <>
      <ThemeToggleProvider>
        <AuthProvider>
          <GlobalStyles />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </AuthProvider>
      </ThemeToggleProvider>
    </>
  )
}
