import React from 'react'
import { Link } from 'react-router-dom'
import { loginPg, registrationPg } from '../../routes/rootRoutes'

export function HomePg () {
  return (
    <div>
      <h1>
        HomePg
      </h1>
      <button>
        <Link to={`${loginPg.path}`}>Войти</Link>
      </button>
      <button>
        <Link to={`${registrationPg.path}`}>Зарегистрироваться</Link>
      </button>
    </div>
  )
}