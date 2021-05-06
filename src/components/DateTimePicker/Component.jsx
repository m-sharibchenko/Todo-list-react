import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './style.css'
import { DatePicker, Input } from 'antd'
import moment from 'moment'

export function DateTimePricker (props) {
  const { defaultDate, defaultTime } = props

  const date = defaultDate
  const time = defaultTime
  const dateFormat = 'YYYY-MM-DD'

  const [dateWasSet, changeDateWasSet] = useState(!defaultDate)

  const disabledDate = (current) => {
    const tomorrow = new Date();
    return current && current.valueOf() < tomorrow.setDate(new Date().getDate()-1)
  }

  const setDate = (date, dateString) => {
    changeDateWasSet(false)
    const { addDate } = props
    addDate(dateString)
  }

  const setTime = (evt) => {
    const { addTime } = props
    addTime(evt.target.value)
  }

  return (
    <div className="date-time-picker">
      <DatePicker
        defaultValue={date ? moment(date, dateFormat) : null}
        disabledDate={disabledDate}
        onChange={setDate}
        placeholder="Дата"
        className="date-picker"
      />
      <Input
        type="time"
        className="time-picker"
        disabled={dateWasSet}
        value={time}
        onInput={setTime}
      />
    </div>
  )
}

DateTimePricker.propTypes = {
  defaultDate: PropTypes.string,
  defaultTime: PropTypes.string,
  addDate: PropTypes.func,
  addTime: PropTypes.func
}
