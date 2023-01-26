import * as  C from './styles';
import { Airplay, Moon, User } from "phosphor-react";
import Link from 'next/link';
import { useThemeContext } from '../../contexts/themeContentext';
import { ActiveLink } from './ActiveLink';
import { useAuth } from '../../contexts/AuthContenxt';

export const Navbar = () => {
   const { toggleTheme } = useThemeContext();
   const { user, logout } = useAuth();

   return (
      <>
         <C.NavBarContainer>
            <nav>
               <Airplay size={50} />
               <ul>
                  <li>
                     <ActiveLink href="/" ActiveClass='active'>
                        Home
                     </ActiveLink>
                  </li>
                  <li>
                     <Link href="/">
                        Series
                     </Link>
                  </li>
                  <li> Sobre</li>
               </ul>
            </nav>

            <div>
               {user ? (
                  <>
                     <div>
                        <User size={30} />
                        <button onClick={logout}>
                           Sair
                        </button>
                     </div>
                  </>
               ) : (
                  <Link href="/login">Entrar</Link>
               )}
               <Moon size={28} onClick={toggleTheme} />
            </div>

         </C.NavBarContainer>
      </>
   )
}

