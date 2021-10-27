import React from "react";
import { Route, Routes } from "react-router";
import LoginCreate from "./LoginCreate/LoginCreate";
import LoginForm from "./LoginForm/LoginForm";
import LostPassword from "./LostPassword/LostPassword";
import ResetPassword from "./ResetPassword/ResetPassword";

const Login = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="create" element={<LoginCreate />} />
        <Route path="lost" element={<LostPassword />} />
        <Route path="reset" element={<ResetPassword />} />
      </Routes>
    </>
  );
};

export default Login;
