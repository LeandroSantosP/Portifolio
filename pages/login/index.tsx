import Router from 'next/router';
import React, { useState } from 'react';
import *  as C from '../../src/styles/loginStyles';
import * as yup from 'yup'
import { useAuth } from '../../src/contexts/AuthContenxt';


interface LoginFormProps {
   email: string;
   password: string;
}

const ValidationShema: yup.SchemaOf<LoginFormProps> = yup.object().shape({
   email: yup.string().email('Percha um email valido!').required('Email e obrigatorio!'),
   password: yup.string()
      .required('No password provided.')
      .min(8, 'A senha e muito curta - Deve contar no minimo 8 caracteres.')
      .matches(/[a-zA-Z]/, 'A senha somente pode conter letras A/Z.')
})


export default function Login() {
   const { login } = useAuth();
   const [fireError, setFireError] = useState<string[]>([])
   const [passwordError, setPasswordError] = useState('')
   const [emailError, setEmailError] = useState('');
   const [password, setPassword] = useState('');
   const [email, setEmail] = useState('');

   const handleLogin = (e: React.SyntheticEvent) => {
      e.preventDefault();
      let loginData = {
         email,
         password,
      }

      ValidationShema.validate(loginData, { abortEarly: false }).then(async (validateData) => {
         try {
            await login(validateData.email, validateData.password)
            Router.push("/")
         } catch (error: any) {

            let filterError: string[] = [];
            if (error.code === 'auth/user-not-found') {
               filterError = ["Usuario nao encontrado"]
            } else if (error.code === 'auth/too-many-requests') {
               filterError = [...filterError, "Seu acceso foi temporariamente removido por muito requisições!"]
            } else if (error.code === "auth/wrong-password") {
               filterError = ["Senha Incorreta"]
            }

            setFireError(filterError)
         }
         setEmailError('');
         setPasswordError('');
      }).catch((err: yup.ValidationError) => {
         err.inner.forEach(error => {
            if (!error.path) return;
            if (error.path === "email") {
               setEmailError(error.message);
            } else if (error.path === "password") {
               setPasswordError(error.message)
            } else {
               setEmailError('');
               setPasswordError('');
            }
         });
      });
   }

   return (
      <C.LoginContainer>
         <h1>Login</h1>
         <C.LoginForm onSubmit={handleLogin}>
            <input
               onChange={(e) => setEmail(e.target.value)}
               style={{ borderColor: emailError.length > 1 ? "red" : "#fff" }}
               placeholder={"Digite seu Email"}
               type="text"
            />
            <p>{emailError.length > 1 && emailError}</p>
            <input
               type="text"
               style={{ borderColor: emailError.length > 1 ? "red" : "#fff" }}
               placeholder={"Digite sua senha"}
               onChange={(e) => setPassword(e.target.value)}
            />
            <p>{passwordError.length > 1 && passwordError || fireError[0]}</p>
            <div>
               <button type='submit'>Logar</button>
               <p>Ainda nao tem conta? <span onClick={() => Router.push("/signup")}>Register-se</span></p>
            </div>
         </C.LoginForm>
      </C.LoginContainer>
   )
}
