import React from "react";

import useForm from "../../../hooks/useForm";
import useFetch from "../../../hooks/useFetch";

import { LOST_PASSWORD } from "../../../services/password.service";

import Head from "../../../Components/Helper/Head/Head";
import Input from "../../../Components/Forms/Input/Input";
import Error from "../../../Components/Helper/Error/Error";
import Button from "../../../Components/Forms/Button/Button";
import { H1Element } from "../../../Components/Titles/H1/H1";

const LostPassword = () => {
  const login = useForm();
  const { data, error, loading, request } = useFetch();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (login.validate()) {
      const { url, options } = LOST_PASSWORD({
        login: login.value,
        url: window.location.href.replace("lost", "reset"),
      });
      const { json } = await request(url, options);
      console.log(json);
    }
  };

  return (
    <section className="leftAnimation">
      <Head title="Perdeu a senha" />
      <H1Element>Perdeu a senha?</H1Element>
      {data ? (
        <p style={{ color: "#4c1" }}>{data}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <Input label="Email / Usuário" type="text" name="login" {...login} />
          {loading ? (
            <Button disabled>Enviando...</Button>
          ) : (
            <Button>Enviar email</Button>
          )}
        </form>
      )}
      <Error error={error} />
    </section>
  );
};

export default LostPassword;
