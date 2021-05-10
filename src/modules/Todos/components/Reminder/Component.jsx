import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Button, notification } from 'antd'
import 'antd/dist/antd.css'
import { todoPropTypes } from '../../../../propTypes'
import { TODAY } from '../../../../constants'

export function ReminderCmp (props) {
  const { todo, onShowReminderChange } = props
  const inputRef = React.useRef(null)

  const [ date ] = useState(TODAY)
  const [ time, setTime ] = useState(new Date().toLocaleTimeString().substring(0, 5))

  useEffect(() => {
    let secTimer = setInterval(() => {
      setTime(new Date().toLocaleTimeString().substring(0, 5))
    }, 1000)

    return () => clearInterval(secTimer);
  }, [])

  useEffect(() => {
    if (todo.reminder.wasShown === false && todo.time === time && todo.date === date) {
      inputRef.current.click()
      onShowReminderChange(todo.id, true)
    }

  }, [time])

  const openNotification = () => {
    notification.open({
      message: 'Напоминание о задаче',
      description: `${todo.description}, сегодня в ${todo.time}. ${todo.priority}`,
    });
  };

  return (
    <>
    <Button
      ref={inputRef}
      onClick={openNotification}
      style={{display: 'none'}}
    >
      Open
    </Button>
  </>
  )
}

ReminderCmp.propTypes = {
  todo: todoPropTypes,
  onShowReminderChange: PropTypes.func,
}