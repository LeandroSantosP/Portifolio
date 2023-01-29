import { useAuth } from '../../src/contexts/AuthContenxt';
import React, { useState } from 'react';
import { Recover } from './Recover';
import Router from 'next/router';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { useFlashMessageContext } from '../../src/contexts/FlasMessageContext';
import *  as C from '../../src/styles/loginStyles';
import { CustomButton } from '../../src/components/Button/CustomButton';
import { Loading } from '../../src/components/Loading/Loading';

interface Inputs {
   email: string;
   password: string;
}


export default function Login() {
   const { login, user } = useAuth();
   const { handleShowing, handleMessages } = useFlashMessageContext()
   const [recover, setRecover] = useState(false);
   const { register, handleSubmit, clearErrors, setError, formState: { errors } } = useForm<Inputs>();
   const [isLoading, setLoading] = useState(false);

   if (user) {
      Router.push("/")
   }

   /* validation Not Working  */
   // const handleLogin = (e: React.SyntheticEvent) => {
   //    e.preventDefault();
   //    let loginData = {
   //       email,
   //       password,
   //    }

   //    ValidationShema.validate(loginData, { abortEarly: false }).then(async (validateData) => {
   //       try {
   //          await login(validateData.email, validateData.password)
   //          Router.push("/")
   //       } catch (error: any) {

   //          let filterError: string[] = [];
   //          if (error.code === 'auth/user-not-found') {
   //             filterError = ["Usuario nao encontrado"]
   //          } else if (error.code === 'auth/too-many-requests') {
   //             filterError = [...filterError, "Seu acceso foi temporariamente removido por muito requisições!"]
   //          } else if (error.code === "auth/wrong-password") {
   //             filterError = ["Senha Incorreta"]
   //          }

   //          setFireError(filterError)
   //       }
   //       setEmailError('');
   //       setPasswordError('');
   //    }).catch((err: yup.ValidationError) => {
   //       err.inner.forEach(error => {
   //          if (!error.path) return;
   //          if (error.path === "email") {
   //             setEmailError(error.message);
   //          } else if (error.path === "password") {
   //             setPasswordError(error.message)
   //          } else {
   //             setEmailError('');
   //             setPasswordError('');
   //          }
   //       });
   //    });
   // }

   const handleShowRwcover = () => {
      return setRecover(!recover)
   }

   const handleSubmitUseFrom = async (dados: Inputs) => {
      setLoading(true)
      try {
         await login(dados.email, dados.password);
         Router.push("/");
         handleMessages("Sucesso", "Login efetuado com sucesso!")
         handleShowing();
         clearErrors();
         setLoading(false)
      } catch (error: any) {
         if (error.code === 'auth/user-not-found') {
            return setError("password", { type: "auth", message: "Usuario não encontrado" })
         } else if (error.code === 'auth/too-many-requests') {
            return setError("password", { type: "auth", message: "Voce fez muitas requisições!" })
         } else if (error.code === "auth/wrong-password") {
            return setError("password", { type: "auth", message: "Senha incorreta" })
         }
      }
      setLoading(false)
   }

   return (
      <C.LoginContainer>
         {isLoading && (
            <Loading />
         )}
         {!recover ? (
            <>
               <C.LoginForm onSubmit={handleSubmit(handleSubmitUseFrom)}>
                  <h1>Login</h1>

                  <input type="text" placeholder='Ex:..exemplo@exeplo.com' {...register("email", {
                     required: "Campo Obrigatorio",
                     pattern: {
                        value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                        message: "Email nao valido!"
                     }
                  })} />
                  <ErrorMessage
                     errors={errors}
                     name="email"
                     render={({ message }) => <p>{message}</p>}
                  />

                  <input type="text" placeholder='Digite sua senha' {...register("password", {
                     required: "Campo Obrigatorio",
                     minLength: {
                        value: 3,
                        message: "Minimo de 3 caracteres"
                     }
                  })} />

                  <ErrorMessage
                     errors={errors}
                     name="password"
                     render={({ message }) => <p>{message}</p>}
                  />

                  <div>
                     <CustomButton type='submit'>
                        Logar
                     </CustomButton>
                     <p>Ainda nao tem conta? <span onClick={() => Router.push("/signup")}>Register-se</span></p>
                  </div>

                  <p onClick={handleShowRwcover} style={{ cursor: "pointer" }}>
                     Esqueceu a senha?
                  </p>

               </C.LoginForm>
            </>
         ) : (
            <>
               <Recover handleShowRwcover={handleShowRwcover} />
            </>
         )}
      </C.LoginContainer>
   )
}
