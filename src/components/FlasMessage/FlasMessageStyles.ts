import styled from 'styled-components'

type ContainerFlasMessageProps = {
  typeMessage: string | undefined
}

export const ContainerFlasMessage = styled.div<ContainerFlasMessageProps>`
  display: flex;
  flex-direction: column;
  bottom: 450px;
  right: 1rem;
  width: 200px;
  color: #111;
  height: 100px;
  position: absolute;
  justify-content: center;
  align-items: center;
  border-radius: 0.7rem;
  transition: 0.5s;
  background-color: ${props =>
    props.typeMessage?.includes('Sucesso') ? '#33ff57' : '#FF3111'};
  border: 1px solid #111;
  -webkit-animation-name: animatetop;
  -webkit-animation-duration: 0.4s;
  animation-name: animatetop;
  animation-duration: 0.4s;

  @-webkit-keyframes animatetop {
    from {top: -300px; opacity: 0}
    to {top: 0; opacity: 1}
  }

  @keyframes animatetop {
    from {top: -300px; opacity: 0}
    to {top: 0; opacity: 1}
  }

  h1 {
    margin: 0;
    font-size: 1rem;
    margin-top: 1rem;
  }

  p {
    font-size: 0.7rem;
    margin: 0;
    padding: 0.5rem;
    text-align: center;
  }
  svg {
    color: #111;
    position: absolute;
    right: 10px;
    top: 0.5rem;
    padding: 0.2rem;
    border-radius: 5px;
    transition: all.4s;
    cursor: pointer;

    &:hover {
      background-color: #fff;
      color: #111;
    }
  }
`
