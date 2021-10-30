import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Button from "../../../Components/Forms/Button/Button";
import { ButtonElement } from "../../../Components/Forms/Button/styled";
import Input from "../../../Components/Forms/Input/Input";
import Error from "../../../Components/Helper/Error/Error";
import { H1Element } from "../../../Components/Titles/H1/H1";
import { H2Element } from "../../../Components/Titles/H2/H2";
import { UserContext } from "../../../context/useContext";
import useForm from "../../../hooks/useForm";
import { FormElement, LoginFormSection, RegistrationDiv } from "./styled";

const LoginForm = () => {
  const username = useForm();
  const password = useForm();
  const { userLogin, error, loading } = useContext(UserContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  };

  return (
    <LoginFormSection className="leftAnimation">
      <H1Element>Login</H1Element>
      <FormElement onSubmit={handleSubmit}>
        <Input label="User" type="text" name="username" {...username} />
        <Input label="Password" type="password" name="password" {...password} />
        {loading ? (
          <Button disabled>Entrando...</Button>
        ) : (
          <Button>Login</Button>
        )}
        {error && <Error error={error} />}
      </FormElement>
      <Link className="lostPassword" to="/login/lost">
        Perdeu a senha?
      </Link>
      <RegistrationDiv>
        <H2Element>Cadastre-se</H2Element>
        <p>Ainda não possui conta? Cadastre-se no site.</p>
        <ButtonElement>
          <Link className="buttonCreate" to="/login/create">
            Cadastre-se
          </Link>
        </ButtonElement>
      </RegistrationDiv>
    </LoginFormSection>
  );
};

export default LoginForm;
