import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Link, useHistory } from 'react-router-dom'
import { Input } from 'antd'
import './style.css'
import { app, signupPg } from '../../routes/rootRoutes'

export function LoginPgCmp (props) {
  const [value, setValue] = useState('')
  const [showError, setShowError] = useState(false)

  const history = useHistory()

  useEffect(() => {
    if (props.isLogged) {
      history.push(app.path)
    }
  }, [props.isLogged])

  const onHandleChange = (evt) => {
    setValue(evt.target.value)
  }

  const onSubmitForm = async (evt) => {
    const { isUserExist, getUserTodos } = props

    evt.preventDefault()

    try {
      const response = await fetch('https://fakestoreapi.com/users')
      const data = await response.json()

      if (data.find(({ email }) => email === value)) {
        const user = data.find(({ email }) => email === value)
        const userID = user.id

        setShowError(false)
        isUserExist(true, user)
        getUserTodos(userID)
      } else {
        setShowError(true)
        isUserExist(false)
      }

    } catch (error) {
      throw new Error(error)
    }
  }

  return (
    <div className="login-page">
      <form className="login-page__form" name="form" onSubmit={onSubmitForm}>
        <p className="login-page__form-title">Вход</p>

        <div className="login-page__form-email-wrap">
          <label>Email</label>
          <Input type="text" name="email" className="login-page__form-email" value={value} onChange={onHandleChange}/>
        </div>

        <button type="submit" className="login-page__btn-form-submit">Войти</button>
      </form>

      {showError ?
        <p className="login-page__user-not-found">
          Пользователь не найден. Проверьте правильность введенных данных
        </p>
        : null
      }

      <div className="login-page__signup">
        <span className="login-page__signup-text">Нет аккаунта?</span>
        <Link to={signupPg.path}>Зарегистрироваться</Link>
      </div>
    </div>
  )
}

LoginPgCmp.propTypes = {
  isUserExist: PropTypes.func,
  isLogged: PropTypes.bool,
  getUserTodos: PropTypes.func,
}
