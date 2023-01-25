import * as  C from './styles';
import { Airplay, Moon } from "phosphor-react";
import Link from 'next/link';
import { useThemeContext } from '../../contexts/themeContentext';

export const Navbar = () => {
   const { toggleTheme, theme } = useThemeContext();


   return (
      <>
         <C.NavBarContainer>
            <nav>
               <Airplay size={50} />
               <ul>
                  <li>Home</li>
                  <li>Series</li>
                  <li>Sobre</li>
               </ul>
            </nav>

            <div>
               <Link href="/login">Entrar</Link>
               <Moon size={28} onClick={toggleTheme} />
            </div>

         </C.NavBarContainer>
      </>
   )
}

