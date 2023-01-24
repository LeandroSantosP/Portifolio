import React, { useState } from 'react'
import { useAuth } from '../../contexts/AuthContenxt';
import * as C from '../../styles/signupStyles';
import Router from 'next/router';

export default function Signup() {
   const { signup } = useAuth();
   const [error, setError] = useState('');
   const [email, setEmail] = useState('');
   const [confEmail, setConfEmail] = useState('');
   const [password, setPassword] = useState('');


   async function handleSubmit(e: React.SyntheticEvent) {
      e.preventDefault();

      if (email.length === 0 || password.length === 0) return setError("Campos Obrigatorios!");
      else if (email !== confEmail) return setError("Email Presisao ser indenticos");

      try {
         await signup(email, password);
         Router.push("/login")

      } catch (error: any) {
         if (error.code == "auth/email-already-in-use") {
            setError("O email ja Existe!");
         } else if (error.code == "auth/invalid-email") {
            setError("O endereco de email nao e valido.");
         } else if (error.code == "auth/operation-not-allowed") {
            setError("Operacao nao permitida.");
         } else if (error.code == "auth/weak-password") {
            setError("O senha e muito fraca.");
         }
      }
      setTimeout(() => {
         setError('')
      }, 2000);
   }

   return (
      <C.loginContainer onSubmit={handleSubmit}>
         <C.LoginForm>
            <h1>Cadraster-se</h1>
            <C.EmailContainer>
               <input
                  type="text"
                  style={{ borderColor: error.includes("email") ? "red" : "#fff" }}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder='Digite um email valido!'
               />

            </C.EmailContainer>
            <C.EmailContainer>
               <input
                  style={{ borderColor: error.includes("email") ? "red" : "#fff" }}
                  onBlur={() => console.log("ok")}
                  type="text"
                  onChange={(e) => setConfEmail(e.target.value)}
                  placeholder='Confirme seu Email'
               />
            </C.EmailContainer>

            <C.PasswordContainer>
               <input
                  style={{ borderColor: error.includes("senha") ? "red" : "#fff" }}
                  type="text"
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder='Digite uma Senha'
               />
            </C.PasswordContainer>

            <C.ButtonContainer>
               <button type="submit" >crair</button>
               <div>
                  <p>Ja tem conta? /</p>
                  <button type="button" onClick={() => Router.push("/login")}>logar</button>
               </div>
            </C.ButtonContainer>
         </C.LoginForm>
         <p>{error}</p>
      </C.loginContainer>
   )
}
