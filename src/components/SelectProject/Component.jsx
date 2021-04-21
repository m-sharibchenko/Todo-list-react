import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Select } from 'antd'

const { Option } = Select

export function SelectProjectCmp (props) {
  const [value, setValue] = useState(props.projectsArray[0].projectName)

  const setProject = (newValue) => {
    const { addProject } = props

    setValue(newValue)
    addProject(newValue)
  }

  return (
    <Select
      allowClear
      style={{ width: '100%' }}
      placeholder="Please select"
      defaultValue={value}
      onChange={setProject}
    >
      {props.projectsArray.map(item => {
        return <Option key={item.projectName} value={item.projectName}>{item.projectName}</Option>
      })}
    </Select>
  )
}

SelectProjectCmp.propTypes = {
  addProject: PropTypes.func,
  projectsArray: PropTypes.arrayOf(
    PropTypes.shape({
      projectName: PropTypes.string,
      todos: PropTypes.arrayOf(PropTypes.string)
    })
  )
}
