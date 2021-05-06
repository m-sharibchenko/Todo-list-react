import React, { useState } from 'react'
import { Checkbox, Switch } from 'antd'
import './style.css'
import { ACCOUNT_NOTIFICATION } from '../../constants/accountInfoTitles'

export function Notification () {
  const [switchChecked, setSwitchChecked] = useState(true)

  const onChange = (checked) => {
    checked ? setSwitchChecked(true) : setSwitchChecked(false)
  }

  return (
    <>
      <p className="notification-title">Уведомления</p>
      <div className="notification-switch">
        <span>Включить уведомления</span>
        <Switch defaultChecked={switchChecked} onChange={onChange}/>
      </div>

      <div className="notification-checkboxes">
        {ACCOUNT_NOTIFICATION.map(({title}) => {
          return (<Checkbox className="notification-item" key={title} disabled={!switchChecked}>
            {title}
          </Checkbox>)
        })}
      </div>
    </>
  )
}