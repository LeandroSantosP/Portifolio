import styled from "styled-components";

export const NavBarContainer = styled.div`
   display: flex;
   align-items: center;
   background-color: ${props => props.theme.colors.primary};
   color: ${props => props.theme.colors.secondary};
   padding: 0%.5rem;
   min-height: 4rem;
   width: 100%;
   position: fixed;

   nav {
      display: flex;
      justify-content: center;
      align-items: center;
      flex: 1;

      ul {
         display: flex;
         text-decoration: none;
         list-style: none;
         width: 100%;
         gap: 1rem;
         padding-left: 30px;


         li {
            text-decoration: underline;
            cursor: pointer;
         }
      }


      @media(max-width: 380px){
        ul {
         padding: 0;
        }
      }
   }

   div{
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      font-size: 1rem;
      margin-right: 2rem;
      color: ${props => props.theme.colors.primary};
      /* padding: .2rem 1rem; */

      svg:nth-child(2) {
         cursor: pointer;
         background-color: ${props => props.theme.colors.secondary};
         padding: .1rem;
         border-radius: .2rem;
         transition:  .5s;


         &:hover{
            color: ${props => props.theme.colors.secondary};
            background-color: ${props => props.theme.colors.primary};

         }
      }
      a {
         background-color: ${props => props.theme.colors.secondary};
         padding: .2rem 1rem;
         border-radius: 5px;
         font-weight: ${props => props.theme.fontWeights.bold};
         transition:  .5s;

         &:hover{
            color: ${props => props.theme.colors.secondary};
            background-color: ${props => props.theme.colors.primary};

         }
      }

      @media(max-width: 380px){
         padding: 0;
      }
   }
`