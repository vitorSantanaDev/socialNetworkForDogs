import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../../Components/Forms/Button/Button";
import Input from "../../../Components/Forms/Input/Input";
import { LoginFormSection } from "./styled";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setpassword] = useState("");

  const handleClick = (event) => {
    event.preventDefault();
    fetch("https://dogsapi.origamid.dev/json/jwt-auth/v1/token", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({username, password}),
    }).then((response) => response.json()).then((json) => console.log(json));
  };

  return (
    <LoginFormSection>
      <h1>Login</h1>
      <form onSubmit={handleClick}>
        <Input label="User" type="text" name="username"/>
        <Input label="Password" type="password" name="password"/>
        <Button>Login</Button>
      </form>
      <Link to="/login/create">Create Acount</Link>
    </LoginFormSection>
  );
};

export default LoginForm;
