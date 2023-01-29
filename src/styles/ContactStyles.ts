import styled from "styled-components";

export const ContactStyles = styled.section`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   width: 100%;
   height: 100vh;
   align-items: center;
   min-height: calc(100vh - 4rem);

   label {
      margin-bottom: .2rem;
   }

   form {
      display: flex;
      min-height: 400px;
      border-radius: .5rem;
      max-width: 300px;
      margin-top: 4rem;
      padding: .7rem;
      justify-content: space-between;
      border: 2px solid ${props => props.theme.colors.darkLiver};
      background-color: #111;
      padding: 0 2rem;
      flex-direction: column;

      h1 {
         text-align: center;
         color: #fff;
         margin-top: 1rem;
      }
      
      p {
         font-size: .7rem;
         color: red;
         margin-bottom: 1rem;
      }

      input {
         color: #fff;
         background-color: #111;
         border: 1px solid #fff;
         padding: 1rem;
         margin-bottom: 1rem;
         border-radius: .5rem;
      }

      textarea {
         height: 100px;
         color: #fff;
         background-color: #111;
         border: 1px solid #fff;
         padding: 1rem;
         border-radius: .5rem;

      }

      button {
         margin: 1rem auto;
      }

   }
`