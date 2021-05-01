import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Link, useHistory } from 'react-router-dom'
import { app, registrationPg } from '../../routes/rootRoutes'

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
        const userID = data.find(({ email }) => email === value).id

        setShowError(false)

        isUserExist(true)
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
    <div>
      <p>Login form</p>
      <form name="form" onSubmit={onSubmitForm}>
        <input type="text" name="email" value={value} onChange={onHandleChange}/>
        <button type="submit">Войти</button>
      </form>

      {showError ? <p>Пользователь не найден. Проверьте прявильность введенных данных</p> : null}

      <div>
        Нет аккаунта?
        <Link to={registrationPg.path}>Зарегестрироваться</Link>
      </div>
    </div>
  )
}

LoginPgCmp.propTypes = {
  isUserExist: PropTypes.func,
  isLogged: PropTypes.bool,
  getUserTodos: PropTypes.func,
}
