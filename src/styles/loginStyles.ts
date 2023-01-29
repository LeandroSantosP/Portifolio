import styled from "styled-components";

export const LoginContainer = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   min-height: calc(100vh);
   justify-content: center;
   align-items: center;
   background-color: ${props => props.theme.colors.primary};
   padding: 0 10px;
`

/**
 * The login form component.           
 * @returns None           
 */
export const LoginForm = styled.form`
   display: flex;
   flex-direction: column;
   padding: 1rem;
   border-radius: 1rem;
   border: 1px solid  ${props => props.theme.colors.secondary};
   color:  ${props => props.theme.colors.secondary};

   button {
         width: 100px;
         border: none;
         border-radius: 5px;
         font-size: 1rem;
         background-color: ${props => props.theme.colors.secondary};
         color: ${props => props.theme.colors.primary};
         transition: all;
         cursor: pointer;
         

         &:hover {
            filter: brightness(1.1);
         }
   }

   div {
      display: flex;
      align-items: center;
      flex-direction: row;
      justify-content: space-between;
      margin: 0 ;
      gap: 1rem;

      p {
            font-size: 1rem;
            text-align: center;
            display: flex;
            align-items: center;
            margin: 0;

            span {
               margin-left: .5rem;
               text-decoration: underline;
               cursor: pointer;
               transition: all .3s;

               &:hover {
                  color:  ${props => props.theme.colors.secondary};
               }
            }
         }

         @media(max-width: 422px){
            p{
               font-size: .8rem;
            }
         }
   }




   input {
      background-color: #111;
      color: #fff;
      border: 1px solid #fff;
      padding: 1rem;
      border-radius: .5rem;
      margin-bottom: 1.5rem;
   }

`

