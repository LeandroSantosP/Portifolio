import { useState } from "react";
import { useAuth } from "../../src/contexts/AuthContenxt";
import * as C from '../../src/styles/RocoverStyles'
import { ArrowLeft } from 'phosphor-react'

interface RecoverProps {
   handleShowRwcover: () => void;
}

export const Recover = ({ handleShowRwcover }: RecoverProps) => {
   const { recoverPassword, logout } = useAuth();
   const [email, setEmail] = useState('');
   const [ConfEmail, setConfEmail] = useState('');
   const [erro, setError] = useState('')

   const handleSendEmail = async () => {
      if (email.length === 0 || ConfEmail.length === 0) {
         return setError("Campos são obrigatorios")
      } else if (email !== ConfEmail) {
         return setError("Os e mails precisam ser iguais")
      } else {
         try {
            const response = await recoverPassword(email)
            console.log(response.code)
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
         <input
            type="text"
            onChange={({ target }) => setConfEmail(target.value)}
            placeholder="Ex:..Exemple@Exemple.com"
         />
         <button onClick={handleSendEmail}>Enviar</button>
      </C.RecoverContainer>
   )
}