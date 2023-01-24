import { Navbar } from '../Navbar/Navbar';
import * as C from './styled';

interface LayoutProps {
   children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {



   return (
      <C.LayoutContainer>
         <Navbar />
         {children}
      </C.LayoutContainer >
   )
}