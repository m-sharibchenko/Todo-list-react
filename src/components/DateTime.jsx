import React from 'react'
import PropTypes from 'prop-types'
import 'antd/dist/antd.css'
import { TimePicker, DatePicker } from 'antd'

export function DateTime (props) {
  const setDate = (date, dateString) => {
    const { addDate } = props
    addDate(dateString)
  }

  const setTime = (time, timeString) => {
    const { addTime } = props
    addTime(timeString)
  }

  return (
    <>
      <DatePicker onChange={setDate}/>
      <TimePicker
        format='HH:mm'
        showNow={false}
        onChange={setTime}
      />
    </>
  )
}

DateTime.propTypes = {
  addDate: PropTypes.func,
  addTime: PropTypes.func
}
