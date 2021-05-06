import React from 'react'
import { Link } from 'react-router-dom'
import { loginPg } from '../../routes/rootRoutes'
import './style.css'

export function SignupPg () {
  return (
    <div className="signup-page">
      <p className="signup-page__title">Регистрация</p>

      <div className="signup-page__login">
        <span className="signup-page__login-text">Зарегистрированы?</span>
        <Link to={loginPg.path}>Войти</Link>
      </div>
    </div>
  )
}