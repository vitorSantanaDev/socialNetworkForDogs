import React, { useContext } from "react";
import { LoginCreateSection } from "./styled";
import { H1Element } from "../../../Components/Titles/H1/H1";
import Input from "../../../Components/Forms/Input/Input";
import Button from "../../../Components/Forms/Button/Button";
import useForm from "../../../hooks/useForm";
import { USER_POST } from "../../../api/api";
import { UserContext } from "../../../context/useContext";
const LoginCreate = () => {
  const username = useForm();
  const email = useForm("email");
  const password = useForm("password");

  const { userLogin } = useContext(UserContext);

  async function createUser(event) {
    event.preventDefault();
    const { url, options } = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value,
    });
    const response = await fetch(url, options);
    if (!response.ok) throw new Error("Usuário já existe");
    userLogin(username.value, password.value);
  }

  return (
    <LoginCreateSection className="leftAnimation">
      <H1Element>Login Create</H1Element>
      <form onSubmit={createUser}>
        <Input label="Usuario" type="text" name="username" {...username} />
        <Input label="Email" type="email" name="email" {...email} />
        <Input label="Usuario" type="password" name="password" {...password} />
        <Button>Cadastrar</Button>
      </form>
    </LoginCreateSection>
  );
};

export default LoginCreate;
