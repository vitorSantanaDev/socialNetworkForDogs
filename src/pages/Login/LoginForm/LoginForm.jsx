import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Button from "../../../Components/Forms/Button/Button";
import Input from "../../../Components/Forms/Input/Input";
import { UserContext } from "../../../context/useContext";
import useForm from "../../../hooks/useForm";
import { LoginFormSection } from "./styled";

const LoginForm = () => {
  const username = useForm();
  const password = useForm();
  const { userLogin } = useContext(UserContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
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
