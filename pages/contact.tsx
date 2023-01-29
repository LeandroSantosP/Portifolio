import { useFlashMessageContext } from '../src/contexts/FlasMessageContext';
import { CustomButton } from '../src/components/Button/CustomButton';
import { Loading } from '../src/components/Loading/Loading';
import { ErrorMessage } from '@hookform/error-message';
import { useForm, Controller } from 'react-hook-form';
import React, { useState } from 'react';
import emailjs from '@emailjs/browser'
import Router from 'next/router';
import * as C from '../src/styles/ContactStyles';

type Inputs = {
  name: string;
  email: string;
  message: string;
};

export default function Contact() {
  const { register, control, handleSubmit, clearErrors, formState: { errors } } = useForm<Inputs>();
  const { handleMessages, handleShowing } = useFlashMessageContext();
  const [isLoading, setLoading] = useState(false);


  const onSubmit = (data: Inputs) => {
    setLoading(true)
    const templeteParams = {
      from_name: data.name,
      message: data.message,
      email: data.email
    }

    emailjs.send("service_4a3m78k", "template_k7bfm4f", templeteParams, "XyMLvqcHm8Mq-KVej")
      .then(res => {
        if (res.status === 200) {
          clearErrors();
          setLoading(false);
          handleMessages("Sucesso", "Mensagem enviado com sucesso!");
          handleShowing();
          Router.push("/")
        } else {
          handleMessages("Error", "Algo deu Errado!");
          setLoading(false);
        };
      });
  }

  return (
    <C.ContactStyles>
      {isLoading && (
        <Loading />
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Contato!</h1>
        <input type="hidden" name='accessKey' value={process.env.NEXT_TOKEN_KEY} />
        <label htmlFor="name">Nome</label>
        <input id='name' type="text" placeholder='Digite seu nome' {...register("name", {
          required: 'Campo e obrigatorio!',
          minLength: {
            value: 3,
            message: "O Minimo de caracteres e 3"
          }
        })} />
        <ErrorMessage
          errors={errors}
          name="name"
          render={({ message }) => <p>{message}</p>}
        />
        <label htmlFor="email">E-mail</label>
        <input
          id='email'
          type="text"
          placeholder='Ex:.exemplo@exemplo.com'
          {...register("email", {
            required: 'Campo obrigatorio!',
            pattern: {
              value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
              message: "Email nao valido!"
            }
          })}
        />
        <ErrorMessage
          errors={errors}
          name="email"
          render={({ message }) => <p>{message}</p>}
        />

        <Controller
          render={({ field }) => {
            return <textarea placeholder='Digite sua messegem aqui...' {...field} />
          }}
          control={control}
          name="message"
          rules={{
            required: 'Campo e obrigatorio', minLength: {
              value: 10,
              message: "Minimo de 10 caracteres!"
            }
          }}
        />

        <ErrorMessage
          errors={errors}
          name="message"
          render={({ message }) => <p>{message}</p>}
        />

        <CustomButton type='submit'>
          Enviar
        </CustomButton>
      </form>
    </C.ContactStyles>
  )
}

