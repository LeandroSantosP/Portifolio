import styled from "styled-components";

interface PropsStyles {
   isLive: boolean;
}

export const ProjectDetails = styled.div<PropsStyles>`
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;

   background-color: ${props => props.theme.colors.primary};
   margin-top: calc(4rem);
   min-height: calc(100vh - 4rem);

   section {
      display:flex;
      flex-direction: column;
      justify-content: center;
      border: 1px solid ${props => props.theme.colors.secondary};
      margin: 2rem 0;
      border-radius: .7rem;
      align-content: center;
      max-width: 900px;
      padding: 2rem;

      .isLive {
         display: flex;
         margin: 0;
         background-color: ${props => props.theme.colors.white};
         margin-top: 1rem;
         width: 70px;
         justify-content: center;
         align-items: center;
         border-radius: 2rem;
         transition: all.3s;
         cursor: ${props => props.isLive ? "pointer" : "not-allowed"};

         div {
            width: 100%;
            margin: 0;
            justify-content: center;

            div:first-child {
               margin: 0;
               background-color: ${props => props.isLive ? "red" : "gray"};
               height: 20px;
               width: 20px;
               border-radius: 50%;
            }
            span {
               color: ${props => props.isLive ? "red" : "gray"};
               text-decoration: ${props => !props.isLive && "line-through"};
               font-weight: bold;
            }  
         }

         &:hover {
            transform: scale(1.1);
         }
      }

      h1 {
         font-weight: bold;
         color: ${props => props.theme.colors.secondary};
         margin: 0;
         margin-bottom: 1rem;
      }

      img {
         border-radius: .5rem;
         width: 100%;
         height: 100%;
      }

      a{
         margin-top: 18px;
         width:90px;
         color: ${props => props.theme.colors.secondary};

         &:hover{
            color: ${props =>props.theme.colors.darkSienna};
         }
      }

      .markDown{
         display: flex;
         flex-direction: column;
         font-size: 1.2rem;
         border-radius: .2rem;
         margin: 0;
         img {
            max-width: 300px;
         }

         p{
            text-align: left;
         }
         color: ${props => props.theme.colors.darkLiver};
      }

      div {
         display: flex;
         text-align: center;
         align-content: center;
         align-self: center;
         width: 100%;
         gap: .4rem;
      }

   }

`