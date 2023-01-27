import styled from "styled-components";

export const ProjectContainer = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   margin-top: calc(4rem);
   min-height: calc(100vh - 4rem);
   background-color: ${props => props.theme.colors.primary} ;
   padding: 0 10px;

   ul {
      display: flex;
      flex-direction: column;
      justify-content: center;
      justify-content: center;
      align-items: center;
      padding: 0;


      li {
         display: flex;
         margin-top: 1rem;
         flex-direction: column;
         border-bottom: 1px solid ${props => props.theme.colors.secondary};
         padding-bottom: 1rem;
         max-width: 700px;

         img {
            max-width: 100%;
            object-fit: cover;
            border-radius: .5rem;
         }


         h1 {
            color: ${props => props.theme.textColors.primary};
            margin: 0;
         }
         a {
            color: ${props => props.theme.textColors.primary};
            font-weight: ${props => props.theme.fontWeights.bold};
            margin-top: 1rem;
            &:hover {
            color: ${props => props.theme.colors.darkSienna};
            text-decoration: underline;
         }
         }

         p {
            color: ${props => props.theme.textColors.primary};

         }

         span {
            color: ${props => props.theme.colors.secondary};
         }

      }
   }
`