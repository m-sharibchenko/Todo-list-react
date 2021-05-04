import React from 'react'
import { useHistory } from 'react-router-dom'
import { app } from '../../../../../routes/rootRoutes'
import { Button } from 'antd'

export function SettingHeader () {
  const history = useHistory()

  const onCancelClick = () => {
    history.push(app.path)
  }

  return (
    <>
      <div>
        Настройки
      </div>

      <Button onClick={onCancelClick}>X</Button>
    </>
  )
}