import styled from "styled-components";


export const loginContainer = styled.div`
   display: flex;
   flex-direction: column;
   height: 100vh;
   justify-content: center;   
   align-items: center;
   background-color: ${props => props.theme.colors.primary};

   h1 {
      font-size: 2rem;

      color: ${props => props.theme.colors.secondary};
   }

   p{
      color:  ${props => props.theme.colors.secondary};
   }
   

   .error {
      color: #FF3333;
      margin: 0;
   }
`

export const LoginForm = styled.form`
   display: flex;
   padding: 1rem;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   min-height: 300px;
   max-width: 600px;
   border-radius: 1rem;
   border: 1px solid  ${props => props.theme.colors.secondary};
`


export const EmailContainer = styled.div`
   display: flex;
   margin: 1rem 0;
   input {
      color: #fff;
      background-color: #111;
      border: 1px solid #fff;
      padding: 1rem;
      border-radius: .5rem;
   }
`

export const PasswordContainer = styled.div`
   display: flex;
   margin: 1rem 0;
   input {
      background-color: #111;
      color: #fff;
      border: 1px solid #fff;
      padding: 1rem;
      border-radius: .5rem;
   }

`

export const ButtonContainer = styled.div`
   width: 100%;
   display: flex;
   justify-content: space-evenly;
   max-height: 30px;
   align-items: center;
   padding: 1rem 0;

   button:first-child {
         width: 100px;
         border: none;
         border-radius: 5px;
         font-size: 1rem;
         background-color: #111;
         color: #fff;
         transition: all;
         cursor: pointer;

         &:hover {
            filter: brightness(1.1);
         }
   }

   div {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 5px;
      font-size: 12px;
   }

   p:nth-child(2) {
         font-size: 1rem;
         font-weight: bold;
         transition: all;
         cursor: pointer;

         &:hover {
            filter: brightness(1.1);
         }
   }
`