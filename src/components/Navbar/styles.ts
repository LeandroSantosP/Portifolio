import styled from "styled-components";

export const NavBarContainer = styled.div`
   display: flex;
   align-items: center;
   background-color: ${props => props.theme.light.colors.white};
   color: ${props => props.theme.light.colors.dark};
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
      color: ${props => props.theme.light.colors.white};
      padding: .2rem 1rem;

      svg {
         cursor: pointer;
         background-color: ${props => props.theme.light.colors.dark};
         padding: .1rem;
         border-radius: .2rem;
         transition:  .5s;


         &:hover{
            color: ${props => props.theme.light.colors.dark};
            background-color: ${props => props.theme.light.colors.white};

         }
      }
      a {
         background-color: ${props => props.theme.light.colors.dark};
         padding: .2rem 1rem;
         border-radius: 5px;
         font-weight: ${props => props.theme.light.fontWeights.bold};
         transition:  .5s;

         &:hover{
            color: ${props => props.theme.light.colors.dark};
            background-color: ${props => props.theme.light.colors.white};

         }
      }

      @media(max-width: 380px){
         padding: 0;
      }
   }
`