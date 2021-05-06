import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { projectsPropTypes } from '../../../../propTypes'
import { Select } from 'antd'
import './style.css'
import { DEFAULT_PROJECT } from '../../constants/projects'

const { Option } = Select

export function SelectProjectCmp (props) {
  const { projectValue } = props

  const [value, setValue] = useState(projectValue ? projectValue : props.projectsArray.find(item => item.projectName === DEFAULT_PROJECT).projectName)

  const setProject = (newValue) => {
    const { addProject } = props

    setValue(newValue)
    addProject(newValue)
  }

  return (
    <Select
      style={{ width: '100%' }}
      placeholder="Выбрать проект"
      defaultValue={value}
      onChange={setProject}
      className="select-project"
    >
      {props.projectsArray.map(item => {
        return <Option key={item.id} value={item.id}>{item.projectName}</Option>
      })}
    </Select>
  )
}

SelectProjectCmp.propTypes = {
  projectValue: PropTypes.string,
  addProject: PropTypes.func,
  projectsArray: projectsPropTypes,
}
