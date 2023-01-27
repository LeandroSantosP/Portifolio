import styled from "styled-components";

export const SliderStyles = styled.div`
background-color: ${props => props.theme.colors.primary};
border: 1px solid ${props => props.theme.colors.secondary};
display: flex;
padding: 1rem;
justify-content: center;
border-radius: .5rem;
margin: 2rem 2rem;
align-items: center;

img {
   width: 250px;
   border-radius: .5rem;
}

p{
   position: absolute;
   top: 0;
   font-size: 10px;
   left: 10;
}


@media(max-width: 1000px) {
   margin-left: 10px;

   margin-right: 10px;
}

`