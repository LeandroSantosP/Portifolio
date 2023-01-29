import React from 'react';
import { useAuth } from '../../src/contexts/AuthContenxt';
import * as C from '../../src/styles/signupStyles';
import Router from 'next/router';
import { useForm } from 'react-hook-form';
import { useFlashMessageContext } from '../../src/contexts/FlasMessageContext';
import { ErrorMessage } from '@hookform/error-message';
import { CustomButton } from '../../src/components/Button/CustomButton';

interface Inputs {
   email: string;
   emailTwo: string;
   password: string;
}

export default function Signup() {
   const { signup, user } = useAuth();
   const { handleShowing, handleMessages } = useFlashMessageContext()
   const { register, handleSubmit, clearErrors, setError, formState: { errors } } = useForm<Inputs>()

   if (user) {
      Router.push("/")
   }

   /* validation Not Working  */
   // async function handleSubmit(e: React.SyntheticEvent) {
   //    e.preventDefault();

   //    if (email.length === 0 || password.length === 0) return setError("Campos Obrigatorios!");
   //    else if (email !== confEmail) return setError("Email Presisao ser indenticos");

   //    try {
   //       await signup(email, password);
   //       Router.push("/login")

   //    } catch (error: any) {
   //       if (error.code == "auth/email-already-in-use") {
   //          setError("O email ja Existe!");
   //       } else if (error.code == "auth/invalid-email") {
   //          setError("O endereço de email não é valido.");
   //       } else if (error.code == "auth/operation-not-allowed") {
   //          setError("Operacao não permitida.");
   //       } else if (error.code == "auth/weak-password") {
   //          setError("O senha muito fraca.");
   //       }
   //    }
   // }

   const handleCreateAccount = async (dados: Inputs) => {
      try {
         await signup(dados.email, dados.password);
         handleMessages("Sucesso", "Conta criada com sucesso!");
         handleShowing();
         clearErrors();
      } catch (error: any) {
         if (error.code == "auth/email-already-in-use") {
            setError("email", { type: "auth", message: "O email ja Existe!" });
         } else if (error.code == "auth/invalid-email") {
            setError("email", { type: "auth", message: "O endereço de email não é valido." });
         } else if (error.code == "auth/operation-not-allowed") {
            setError("password", { type: "auth", message: "Operacao não permitida." });
         } else if (error.code == "auth/weak-password") {
            setError("password", { type: "auth", message: "Senha muito fraca." });
         }
      }
   }
   const CompareEmailValidation = (value: string, allValue: Inputs) => {
      return value === allValue.email ? true : "Os Email devem ser identicos!";
   }

   return (
      <C.loginContainer onSubmit={handleSubmit(handleCreateAccount)}>
         <C.LoginForm>
            <h1>Cadraster-se</h1>
            <C.EmailContainer>

               <input type="text" placeholder='Ex:..exemplo@exeplo.com' {...register("email", {
                  required: "Campo Obrigatorio",
                  pattern: {
                     value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                     message: "Email nao valido!"
                  }
               })} />
            </C.EmailContainer>
            <ErrorMessage
               errors={errors}
               name="email"
               render={({ message }) => <p className="error">{message}</p>}
            />
            <C.EmailContainer>
               <input type="text" placeholder='Ex:..exemplo@exeplo.com' {...register("emailTwo", {
                  required: "Campo Obrigatorio",
                  pattern: {
                     value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                     message: "Email nao valido!"
                  },
                  validate: CompareEmailValidation
               })} />
            </C.EmailContainer>
            <ErrorMessage
               errors={errors}
               name="emailTwo"
               render={({ message }) => <p className="error">{message}</p>}
            />
            <C.PasswordContainer>
               <input type="text" placeholder='Digite sua senha' {...register("password", {
                  required: "Campo Obrigatorio",
                  minLength: {
                     value: 3,
                     message: "Minimo de 3 caracteres"
                  }
               })} />
            </C.PasswordContainer>
            <ErrorMessage
               errors={errors}
               name="password"
               render={({ message }) => <p className="error">{message}</p>}
            />

            <C.ButtonContainer>
               <CustomButton type='submit'>
                  Criar
               </CustomButton>
               <div>
                  <p>Ja tem conta? /</p>
                  <p onClick={() => Router.push("/login")}>logar</p>
               </div>
            </C.ButtonContainer>
         </C.LoginForm>
      </C.loginContainer>
   )
}

