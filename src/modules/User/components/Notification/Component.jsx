import React, { useState } from 'react'
import { Checkbox, Switch } from 'antd'
import './style.css'
import { ACCOUNT_NOTIFICATION } from '../../constants'

export function Notification () {
  const [notificationChecked, setNotificationChecked] = useState(true)
  const [remindersChecked, setRemindersChecked] = useState(true)

  const onNotificationChange = (checked) => {
    checked ? setNotificationChecked(true) : setNotificationChecked(false)
  }

  const onRemindersChange = (checked) => {
    checked ? setRemindersChecked(true) : setRemindersChecked(false)
  }

  return (
    <>
      <p className="notification-title">Уведомления</p>
      <div className="notification-switch-wrapper">
        <div>
          <span className="notification-switch">Включить уведомления</span>
          <Switch defaultChecked={notificationChecked} onChange={onNotificationChange}/>
        </div>

        <span className="notification-switch__comment">
          Вы будете получать уведомления на e-mail
        </span>
      </div>

      <div className="notification-checkboxes">
        {ACCOUNT_NOTIFICATION.map(({title, checked}) => {
          return (
            <Checkbox
              className="notification-item"
              key={title}
              disabled={!notificationChecked}
              checked={checked}
            >
              {title}
            </Checkbox>
          )
        })}
      </div>

      <div className="reminders-switch-wrapper">
        <div>
          <span className="reminders-switch">Включить напоминания</span>
          <Switch defaultChecked={remindersChecked} onChange={onRemindersChange}/>
        </div>

        <span className="reminders-switch__comment">
          Всплывающие напоминания будут появляться в приложении
        </span>
      </div>
    </>
  )
}