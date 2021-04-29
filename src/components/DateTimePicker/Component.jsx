import React, { useState } from 'react'
import PropTypes from 'prop-types'
import 'antd/dist/antd.css'
import { TimePicker, DatePicker } from 'antd'
import moment from 'moment'

export function DateTimePricker (props) {
  const { defaultDate, defaultTime } = props

  const date = defaultDate
  const time = defaultTime
  const dateFormat = 'YYYY-MM-DD'
  const timeFormat='HH:mm'

  const [dateWasSet, changeDateWasSet] = useState(!defaultTime)

  const disabledDate = (current) => {
    const tomorrow = new Date();
    return current && current.valueOf() < tomorrow.setDate(new Date().getDate()-1)
  }

  const setDate = (date, dateString) => {
    changeDateWasSet(false)
    const { addDate } = props
    addDate(dateString)
  }

  const setTime = (time, timeString) => {
    const { addTime } = props
    addTime(timeString)
  }

  return (
    <>
      <DatePicker
        defaultValue={date ? moment(date, dateFormat) : null}
        disabledDate={disabledDate}
        onChange={setDate}/>
      <TimePicker
        disabled={dateWasSet}
        defaultValue={time ? moment(time, timeFormat) : null}
        format={timeFormat}
        showNow={false}
        onChange={setTime}
      />
    </>
  )
}

DateTimePricker.propTypes = {
  defaultDate: PropTypes.string,
  defaultTime: PropTypes.string,
  addDate: PropTypes.func,
  addTime: PropTypes.func
}
