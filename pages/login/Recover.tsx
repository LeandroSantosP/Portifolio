import { useState } from "react";
import { useAuth } from "../../src/contexts/AuthContenxt";
import * as C from '../../src/styles/RocoverStyles';
import { ArrowLeft } from 'phosphor-react';

interface RecoverProps {
   handleShowRwcover: () => void;
}

export const Recover = ({ handleShowRwcover }: RecoverProps) => {
   const { recoverPassword, logout } = useAuth();
   const [email, setEmail] = useState('');
   const [erro, setError] = useState('')

   const handleSendEmail = async () => {
      if (email.length === 0) {
         return setError("Campo e obrigatorio");
      } else {
         try {
            const response = await recoverPassword(email)
            /* tartar os erros */
         } catch (err) {
            //
         }
      }
   }

   return (
      <C.RecoverContainer>
         <ArrowLeft onClick={handleShowRwcover} size={20} />
         <h1>Digite seu email</h1>
         <input
            type="text"
            onChange={({ target }) => setEmail(target.value)}
            placeholder="Ex:..Exemple@Exemple.com"
         />

         <button onClick={handleSendEmail}>Enviar</button>
      </C.RecoverContainer>
   )
}