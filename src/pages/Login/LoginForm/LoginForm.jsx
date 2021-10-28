import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { TOKEN_POST, USER_GET } from "../../../api/api";
import Button from "../../../Components/Forms/Button/Button";
import Input from "../../../Components/Forms/Input/Input";
import useForm from "../../../hooks/useForm";
import { LoginFormSection } from "./styled";

const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (token) getUser(token);
  }, []);

  const getUser = async (token) => {
    const { url, options } = USER_GET(token);
    const response = await fetch(url, options);
    const responseJson = await response.json();
    console.log(responseJson);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (username.validate() && password.validate()) {
      const { url, options } = TOKEN_POST({
        username: username.value,
        password: password.value,
      });
      const response = await fetch(url, options);
      const responseJson = await response.json();
      window.localStorage.setItem("token", responseJson.token);
      getUser(responseJson.token);
    }
  };

  return (
    <LoginFormSection>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <Input label="User" type="text" name="username" {...username} />
        <Input label="Password" type="password" name="password" {...password} />
        <Button>Login</Button>
      </form>
      <Link to="/login/create">Create Acount</Link>
    </LoginFormSection>
  );
};

export default LoginForm;
