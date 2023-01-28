import styled from "styled-components";

export const FooterContainer = styled.div`
   display: flex;
   width: 100%;
   justify-content: center;
   height: 300px;
   align-items: center;
   gap: 2rem;
   border-top: 1px solid ${props => props.theme.colors.secondary};

   ul {
      display: flex;
      font-size: 2rem;
      list-style: none;
      justify-content: center;
      align-items: center;
      height: 100%;
      padding: 0;

      gap: 2rem;
      li {
         display: flex;
         padding: .5rem;
         border: 1px solid #ffff;
         border-radius: .6rem;
         cursor: pointer;

         &:hover{
         background-color: #292E34;
      }

      }
   }



   div {

      p:first-child{
         margin-right: 1rem;
         margin-right: 1rem;
      }
      p {
         margin: 0;

      }

   }
`