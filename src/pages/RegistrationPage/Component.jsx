import React from 'react'
import { Link } from 'react-router-dom'
import { loginPg } from '../../routes/rootRoutes'

export function RegistrationPg () {

  return (
    <div>
      REGISTRATION form
      <div>
        Зарегистрированы?
        <Link to={loginPg.path}>Войти</Link>
      </div>
    </div>
  )
}