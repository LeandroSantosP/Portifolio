import * as  C from './styles';
import { Airplay, Moon } from "phosphor-react";
import Link from 'next/link';


export const Navbar = () => {
   return (
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
            <Moon size={28} />
         </div>
      </C.NavBarContainer>
   )
}