import { Envelope, GithubLogo, LinkedinLogo, TwitterLogo } from "phosphor-react"
import * as C from './stylesFooter';
export const Footer = () => {
   return (
      <C.FooterContainer>
         <ul>
            <li><TwitterLogo /></li>
            <li><GithubLogo /></li>
            <li><LinkedinLogo /></li>
            <li><Envelope /></li>
         </ul>
         <div>
            <p>Designing by Leandro Santos</p>
            <p>leandrobuy5@gmail.com</p>
         </div>
      </C.FooterContainer >
   )
}