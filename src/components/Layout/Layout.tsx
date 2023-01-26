import { ThemeProvider } from 'styled-components';
import { useThemeContext } from '../../contexts/themeContentext';
import { Navbar } from '../Navbar/Navbar';
import * as C from './styled';

interface LayoutProps {
   children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
   const { theme } = useThemeContext();

   return (
      <C.LayoutContainer>
         <ThemeProvider theme={theme}>
            <Navbar />
            {children}
         </ThemeProvider>
      </C.LayoutContainer >
   )
}