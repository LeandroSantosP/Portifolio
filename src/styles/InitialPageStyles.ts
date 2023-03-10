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
         box-shadow: 0px 0px 9px 2px rgba(0,0,0,0.63);
         border-radius: 10px;
         padding: 1rem;
      }
   }

   @media (max-width: 1000px) {

     section {
      margin: 0;

      h1 {
            font-size: 3rem;
            line-height: 4rem;
      }
      p  {
         font-size: 1rem;
         margin: 0 10px;
      }

      span {
         margin: 0 10px;
      }
     }
   }   

   @media (max-width: 500px) {
      section {
         h1{
            text-align: center;
            width: 100%;
            font-size: 2.5rem;
            line-height: 4rem;
         }
      }
   }  

   @media (max-width: 370px) {
      section {
         h1{
            width: 100%;
            font-size: 2rem;
            line-height: 4rem;
         }
      }
   }  
 

`

export const Divider = styled.div`
   width: 95%;
   height: 1px;
   
   margin: 1rem auto;
   background-color: ${props => props.theme.colors.secondary};
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

   @media(max-width: 1000px){
      margin: 0 ;
      padding: 0;
      align-content: center;
      justify-content: center;
   } 

 
`