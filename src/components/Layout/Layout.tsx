import { ThemeProvider } from 'styled-components';
import { useFlashMessageContext } from '../../contexts/FlasMessageContext';
import { useThemeContext } from '../../contexts/themeContentext';
import { Footer } from '../footer/Fotter';
import { Navbar } from '../Navbar/Navbar';
import * as C from './styled';

interface LayoutProps {
   children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
   const { theme } = useThemeContext();
   const { FlasMessage, messageContent, typeMessage, handleClose } = useFlashMessageContext();

   return (
      <C.LayoutContainer>
         <ThemeProvider theme={theme}>
            {FlasMessage && (
               <FlasMessage.type messageContent={messageContent} typeMessage={typeMessage} handleClose={handleClose} />
            )}
            <Navbar />
            {children}
            <Footer />
         </ThemeProvider>
      </C.LayoutContainer >
   )
}