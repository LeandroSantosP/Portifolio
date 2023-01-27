import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
   @media (max-width: 1080px){
      html{
         font-size: 93.75%;
      }
   }

   @media (max-width: 720px){
      html{
         font-size: 87.5%;
      }
   }

   body {
      height: 100vh;
      background-color: #111;
      color: #fff;
      margin: 0;
      padding: 0;
      box-sizing: border-box;

   }

   body,input,select, textarea, button {
   font: 400 1rem 'Poppins', 'sans-serif';
}


a{
   color: inherit;
   text-decoration: none;
}

`