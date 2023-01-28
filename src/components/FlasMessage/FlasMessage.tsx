import { X } from 'phosphor-react';
import * as C from './FlasMessageStyles';

interface FlashMessageProps {
   typeMessage?: string;
   messageContent?: string;
   handleClose?: () => void;
}

export const FlasMessage = ({
   typeMessage,
   messageContent,
   handleClose
}: FlashMessageProps) => {

   return (
      <C.ContainerFlasMessage typeMessage={typeMessage}>
         <X onClick={handleClose} />
         <h1>{typeMessage}</h1>
         <p>{messageContent}</p>
      </C.ContainerFlasMessage>
   )
}