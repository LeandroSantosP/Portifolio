import styled from "styled-components";
import { shade } from 'polished'

export const Container = styled.div`
   display: flex;
   flex-direction: column;
   margin-top: calc(4rem);
   min-height: calc(100vh - 4rem);
   background-color:${props => props.theme.colors.primary};


   section {
      display: flex;
      min-height: 400px;
      flex-direction: column;
      align-items: flex-start;
      margin: 0rem 5rem;

      h1 {
         font-size: 4rem;
         margin-bottom: 0;
         color: ${props => (shade(0.2, props.theme.textColors.primary))};
         line-height: 6rem;
      }

      p {
         font-size: 2rem;
         color: ${props => props.theme.colors.darkLiver};
         font-weight: bold;
         margin: 0;
      }

      span{
         color: ${props => (shade(0.2, props.theme.textColors.primary))};
      }
   }

   @media (max-width: 520px) {

     section {
      margin: 0;

      h1 {
                  line-height: 3rem;
      font-size: 2rem;
     }
     p{
      font-size: 1rem;
     }
     }
   }   

`

export const TechsContainer = styled.ul`
   display: flex;
   align-items: center;
   flex-wrap: wrap;
   gap: 1rem;
   text-decoration: none;
   color: ${props => props.theme.colors.secondary};
   list-style: none ;
   margin-left: 2rem;

   max-width: 1050px;
   font-size: .9rem;


   li {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border: 1px solid ${props => props.theme.colors.secondary};
      border-radius:.5rem;
      padding: 2rem;
      width: 60px;
      height: 60px;
      gap: .5rem;
      cursor: pointer;
      font-size: .7rem;

      &:hover {
         background-color: ${props => props.theme.colors.darkSienna};
         filter: brightness(1.1);
      }

      img {
         width: 50px;
      }
   }
`