import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { ModalWindow } from '../../../../components/Modal'
import { DateTimePricker } from '../../../../components/DateTimePicker'
import { SelectProject } from '../SelectProject'
import { DEFAULT_PROJECT } from '../../constants/projects'
import { SelectPriority } from '../SelectPriority'
import { THIRD_PRIORITY } from '../../constants/todoPriority'
import { projectsPropTypes } from '../../../../propTypes'

export function AddTaskCmp (props) {
  const [todo, setValue] = useState({ project: props.projectsArray.find(item => item.projectName === DEFAULT_PROJECT).id, priority: THIRD_PRIORITY })

  const onHandleChange = (evt) => {
    setValue(prevState => {
      return {
        ...prevState,
        description: evt.target.value
      }
    })
  }

  const onAdd = () => {
    const { onAddTodo } = props
    onAddTodo(todo)
  }

  const onAddTime = (time) => {
    setValue(prevState => {
      return { ...prevState, time }
    })
  }

  const onAddDate = (date) => {
    setValue(prevState => {
      return { ...prevState, date }
    })
  }

  const onAddProject = (project) => {
    setValue(prevState => {
      return { ...prevState, project }
    })
  }

  const onAddPriority = (priority) => {
    setValue(prevState => {
      return { ...prevState, priority }
    })
  }

  return (
    <ModalWindow
      onAddItem={onAdd}
      btnType="primary"
      btnText="+ Новая задача"
      title="Добавление задачи"
      onChange={onHandleChange}>
        <div>
          <DateTimePricker addTime={onAddTime} addDate={onAddDate}/>
          <SelectProject addProject={onAddProject}/>
          <SelectPriority addPriority={onAddPriority}/>
          {/*<div>Напоминание</div>*/}
        </div>
    </ModalWindow>
  )
}

AddTaskCmp.propTypes = {
  onAddTodo: PropTypes.func,
  projectsArray: projectsPropTypes,
}
