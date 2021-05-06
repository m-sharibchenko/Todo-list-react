import React from 'react'
import { useHistory } from 'react-router-dom'
import { app } from '../../../../../routes/rootRoutes'
import { Button } from 'antd'
import './style.css'

export function SettingHeader () {
  const history = useHistory()

  const onCancelClick = () => {
    history.push(app.path)
  }

  return (
    <>
      <div className="user-page__title">
        Настройки
      </div>

      <Button
        onClick={onCancelClick}
        className="user-page__btn-close"
      >
        Close X
      </Button>
    </>
  )
}