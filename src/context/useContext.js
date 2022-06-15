import React, { createContext, useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router";

import { USER_GET } from "../services/user.service";
import { TOKEN_POST, TOKEN_VALIDATE_POST } from "../services/token.service";

export const UserContext = createContext();

export const UserStorage = ({ children }) => {
  const [data, setData] = useState(null);
  const [login, setLogin] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const userLogout = useCallback(async () => {
    setData(null);
    setError(null);
    setLoading(false);
    setLogin(false);
    window.localStorage.removeItem("token");
    navigate("/login");
  }, [navigate]);

  const getUser = async (token) => {
    const { url, options } = USER_GET(token);
    const response = await fetch(url, options);
    const responseJson = await response.json();
    setData(responseJson);
    setLogin(true);
  };

  const userLogin = async (username, password) => {
    try {
      setError(null);
      setLoading(true);
      const { url, options } = TOKEN_POST({ username, password });
      const response = await fetch(url, options);
      if (!response.ok)
        throw new Error(`Usuário inválido / Ou dados incorretos`);
      const responseJson = await response.json();
      window.localStorage.setItem("token", responseJson.token);
      await getUser(responseJson.token);
      navigate("/account");
    } catch (erro) {
      setError(erro.message);
      setLogin(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const autoLogin = async () => {
      const token = window.localStorage.getItem("token");
      if (token) {
        try {
          setError(null);
          setLoading(true);
          const { url, options } = TOKEN_VALIDATE_POST(token);
          const response = await fetch(url, options);
          if (!response.ok) throw new Error("Token invalido");
          await getUser(token);
        } catch (erro) {
          userLogout();
        } finally {
          setLoading(false);
        }
      } else {
        setLogin(false);
      }
    };
    autoLogin();
  }, [userLogout]);

  return (
    <UserContext.Provider
      value={{ userLogin, userLogout, data, error, loading, login }}
    >
      {children}
    </UserContext.Provider>
  );
};
