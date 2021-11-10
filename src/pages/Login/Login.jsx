import NotFound from "../../Components/NotFound/NotFound";
import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router";
import { UserContext } from "../../context/useContext";
import LoginCreate from "./LoginCreate/LoginCreate";
import LoginForm from "./LoginForm/LoginForm";
import LostPassword from "./LostPassword/LostPassword";
import ResetPassword from "./ResetPassword/ResetPassword";
import { DivForms, LoginSection } from "./styled";
import Head from "../../Components/Helper/Head/Head";

const Login = () => {
  const { login } = useContext(UserContext);

  if (login === true) return <Navigate to="/account" />;
  return (
    <LoginSection>
      <Head title="Login" description="Faça seu login agora"/>
      <DivForms>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="create" element={<LoginCreate />} />
          <Route path="lost" element={<LostPassword />} />
          <Route path="reset" element={<ResetPassword />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </DivForms>
    </LoginSection>
  );
};

export default Login;
