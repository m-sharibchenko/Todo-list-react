import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Select } from 'antd'
import { priorities } from '../../constants/todoPriority'

const { Option } = Select

export function SelectPriorityCmp (props) {
  const { priorityValue } = props

  const [value, setValue] = useState(priorityValue ? priorityValue : undefined)

  const setPriority = (newValue) => {
    const { addPriority } = props

    setValue(newValue)
    addPriority(newValue)
  }

  return (
    <Select
      allowClear
      style={{ width: '100%', marginBottom: '0.5rem'}}
      placeholder="Выберите приоритет"
      defaultValue={value}
      onChange={setPriority}
    >
      {priorities.map(item => {
        return <Option key={item} value={item}>{item}</Option>
      })}
    </Select>
  )
}

SelectPriorityCmp.propTypes = {
  priorityValue: PropTypes.string,
  addPriority: PropTypes.func,
}
