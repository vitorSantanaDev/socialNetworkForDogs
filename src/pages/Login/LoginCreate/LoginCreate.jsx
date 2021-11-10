import React, { useContext } from "react";
import { LoginCreateSection } from "./styled";
import { H1Element } from "../../../Components/Titles/H1/H1";
import Input from "../../../Components/Forms/Input/Input";
import Button from "../../../Components/Forms/Button/Button";
import useForm from "../../../hooks/useForm";
import { USER_POST } from "../../../api/api";
import { UserContext } from "../../../context/useContext";
import useFetch from "../../../hooks/useFetch";
import Error from "../../../Components/Helper/Error/Error"
import Head from "../../../Components/Helper/Head/Head";

const LoginCreate = () => {
  const username = useForm();
  const email = useForm("email");
  const password = useForm("password");

  const { error, loading, request } = useFetch();

  const { userLogin } = useContext(UserContext);

  async function createUser(event) {
    event.preventDefault();
    const { url, options } = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value,
    });
    const { response } = await request(url, options);
    if (response.ok) userLogin(username.value, password.value);
  }

  return (
    <LoginCreateSection className="leftAnimation">
      <Head title="Criar conta"/>
      <H1Element>Login Create</H1Element>
      <form onSubmit={createUser}>
        <Input label="Usuario" type="text" name="username" {...username} />
        <Input label="Email" type="email" name="email" {...email} />
        <Input label="Usuario" type="password" name="password" {...password} />
        {loading ? <Button disabled>Cadastrando...</Button> : <Button>Cadastrar</Button>}
      </form>
      <Error error={error}/>
    </LoginCreateSection>
  );
};

export default LoginCreate;
