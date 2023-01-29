import React, { createContext, useContext, useState } from "react";
import { FlasMessage } from "../components/FlasMessage/FlasMessage";

interface FlashMessageProviderProps {
   children: React.ReactNode;
}

interface FlasMessageContextProps {
   handleMessages: (typeMessage: string, contentMessage: string) => void
   FlasMessage: {
      type: any
   } | undefined,
   typeMessage: string;
   messageContent: string;
   handleShowing: () => void
   handleClose: () => void
}

const FlasMessageContext = createContext({} as FlasMessageContextProps);

export const useFlashMessageContext = () => useContext(FlasMessageContext);

export const FlasMessageProvider = ({ children }: FlashMessageProviderProps) => {
   const [isShowing, setIsShowing] = useState(false);
   const [typeMessage, setTypeMessage] = useState('');
   const [messageContent, setMessageContent] = useState('');

   const handleMessages = (typeMessage: string, contentMessage: string) => {
      setMessageContent(contentMessage)
      setTypeMessage(typeMessage)
      return;
   }

   const handleShowing = () => {
      setIsShowing(true);
      setTimeout(() => {
         setIsShowing(false)
      }, 6000);
      return;
   }

   const handleClose = () => setIsShowing(false)

   return (
      <FlasMessageContext.Provider value={{
         handleShowing,
         messageContent,
         typeMessage,
         handleClose,
         handleMessages,
         FlasMessage:
            (isShowing ? <FlasMessage /> : undefined)
      }}>
         {children}
      </FlasMessageContext.Provider>
   )
}