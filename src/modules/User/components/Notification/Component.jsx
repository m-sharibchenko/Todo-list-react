import React from 'react'
import PropTypes from 'prop-types'
import { Switch } from 'antd'
import './style.css'
import { ACCOUNT_NOTIFICATION } from '../../constants'
import { NotificationCheckbox } from '../NotificationCheckbox'

export function NotificationCmp (props) {
  const onNotificationsChange = (checked) => {
    const { notificationsChange } = props
    checked ?
      notificationsChange(true)
      : notificationsChange(false)
  }

  const onRemindersChange = (checked) => {
    const { remindersChange } = props
    checked ?
      remindersChange(true)
      : remindersChange(false)

  }

  return (
    <>
      <p className="notifications-title">Уведомления</p>
      <div className="notifications-switch-wrapper">
        <div>
          <span className="notifications-switch">Включить уведомления</span>
          <Switch defaultChecked={props.notifications} onChange={onNotificationsChange}/>
        </div>

        <span className="notifications-switch__comment">
          Вы будете получать уведомления на e-mail
        </span>
      </div>

      <div className="notifications-checkboxes">
        {ACCOUNT_NOTIFICATION.map(({title}) => {
          return (
            <NotificationCheckbox
              key={title}
              title={title}
              notification={props.notifications}
            />
            )
        })}
      </div>

      <div className="reminders-switch-wrapper">
        <div>
          <span className="reminders-switch">Включить напоминания</span>
          <Switch defaultChecked={props.reminders} onChange={onRemindersChange}/>
        </div>

        <span className="reminders-switch__comment">
          Всплывающие напоминания будут появляться в приложении
        </span>
      </div>
    </>
  )
}

NotificationCmp.propTypes = {
  reminders: PropTypes.bool,
  notifications: PropTypes.bool,
  notificationsChange: PropTypes.func,
  remindersChange: PropTypes.func,
}