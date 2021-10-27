import React, { useState } from "react";
import { Link } from "react-router-dom";
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
        <input
          type="text"
          value={username}
          onChange={({ target }) => setUsername(target.value)}
        />
        <input
          type="text"
          value={password}
          onChange={({ target }) => setpassword(target.value)}
        />
        <button>Enviar</button>
      </form>
      <Link to="/login/create">Create Acount</Link>
    </LoginFormSection>
  );
};

export default LoginForm;
