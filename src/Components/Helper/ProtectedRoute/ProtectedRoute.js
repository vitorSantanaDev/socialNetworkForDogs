import React, { useContext } from 'react'
import { Navigate, Route } from 'react-router'
import { UserContext } from '../../../context/useContext'

const ProtectedRoute = (props) => {

  const { login } = useContext(UserContext)

  if(login === true) return <Route {...props}/>
  else if (login === false) return <Navigate to="/login"/>
  return null
}

export default ProtectedRoute
