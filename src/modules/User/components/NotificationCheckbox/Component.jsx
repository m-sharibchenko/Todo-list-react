import React from 'react'
import PropTypes from 'prop-types'
import './style.css'
import { Checkbox } from 'antd'

export function NotificationCheckbox (props) {
  const {title, checked, notification} = props

  return (
    <Checkbox
      className="notification-item"
      key={title}
      disabled={!notification}
      checked={checked}
    >
      {title}
    </Checkbox>
  )
}

NotificationCheckbox.propTypes = {
  title: PropTypes.string,
  checked: PropTypes.bool,
  notification: PropTypes.bool,
}