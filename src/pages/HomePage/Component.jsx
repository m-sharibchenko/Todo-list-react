import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'
import { loginPg, signupPg } from '../../routes/rootRoutes'
import { Button } from 'antd'

export function HomePg () {
  return (
    <div className="home-page">
      <div className="home-page__login-wrapper">
        <Button className="home-page__btn-login">
          <Link to={`${loginPg.path}`}>Войти</Link>
        </Button>
        <Button className="home-page__btn-signup">
          <Link to={`${signupPg.path}`}>Зарегистрироваться</Link>
        </Button>
      </div>

      <h1 className="home-page__title">
        Create your ToDo
      </h1>

      <Button type="primary" className="home-page__btn-start">
        <Link to={`${loginPg.path}`}>Начать</Link>
      </Button>
    </div>
  )
}