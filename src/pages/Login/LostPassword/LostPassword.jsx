import React from "react";
import { H1Element } from "../../../Components/Titles/H1/H1";
import Input from "../../../Components/Forms/Input/Input";
import Button from "../../../Components/Forms/Button/Button";
import useForm from "../../../hooks/useForm";
import useFetch from "../../../hooks/useFetch";
import { LOST_PASSWORD } from "../../../api/api";
import Error from "../../../Components/Helper/Error/Error";
import Head from "../../../Components/Helper/Head/Head";

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
    <>
    <Head title="Perdeu a senha"/>
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
    </>
  );
};

export default LostPassword;
