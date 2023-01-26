import styled from "styled-components";

export const RecoverContainer = styled.div`
   display: flex;
   flex-direction: column;
   border: 1px solid ${props => props.theme.colors.secondary};
   padding: 1rem;
   border-radius: .5rem;

   svg {
      cursor: pointer;
      color: ${props => props.theme.colors.secondary};
      margin: 0;
   }

   h1 {
      margin: .7rem 0;
      color: ${props => props.theme.colors.secondary};
   }

   input {
      background-color: #111;
      color: #fff;
      
      border: 1px solid #fff;
      padding: .5rem;
      border-radius: .5rem;
      margin-bottom: .7rem;
   }

   button {
      width: 100px;
         border: none;
         border-radius: 5px;
         font-size: 1rem;
         font-weight: bold;
         transition: all;
         cursor: pointer;
   }
`