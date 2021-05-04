import React, { useState } from 'react'
import { Checkbox, Switch } from 'antd'
import { ACCOUNT_NOTIFICATION } from '../../constants/accountInfoTitles'

export function Notification () {
  const [disabled, setDisabled] = useState(true)

  const onChange = (checked) => {
    checked ? setDisabled(false) : setDisabled(true)
  }

  return (
    <>
      <p>Уведомления</p>
      <div>
        Включить уведомления
        <Switch defaultChecked onChange={onChange}/>
      </div>
      {ACCOUNT_NOTIFICATION.map(({title}) => {
        return (<Checkbox key={title} disabled={disabled}>{title}</Checkbox>)
      })}
    </>
  )
}