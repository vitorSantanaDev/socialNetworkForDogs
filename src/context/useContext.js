import React, { createContext, useState } from "react";
import { TOKEN_POST, USER_GET } from "../api/api";

export const UserContext = createContext();

export const UserStorage = ({ children }) => {

  const [data, setData] = useState(null)
  const [login, setLogin] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const getUser = async (token) => {
    const { url, options } = USER_GET(token)
    const response = await fetch(url, options)
    const responseJson = await response.json()
    setData(responseJson)
    setLogin(true)
  }

  const userLogin = async (username, password) => {
    const { url, options } = TOKEN_POST({ username, password })
    const response = await fetch(url, options)
    const responseJson = await response.json()
    window.localStorage.setItem('token', responseJson.token)
    getUser(responseJson.token)
  }
  return (
    <UserContext.Provider value={{ userLogin, data }}>
      {children}
    </UserContext.Provider>
  );
};
