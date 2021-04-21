import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Modal, Button, Input } from 'antd'
import { DateTime } from '../DateTime.jsx'
import { SelectProject } from '../SelectProject'
import { DEFAULT_PROJECT } from '../../actions/todos.action'

export function AddTaskCmp (props) {
  const [inputValue, setInputValue] = useState('')
  const [visible, setVisible] = useState(false)

  const [todo, setValue] = useState({ project: DEFAULT_PROJECT })

  const onHandleChange = (evt) => {
    setInputValue(evt.target.value)

    setValue(prevState => {
      return {
        ...prevState,
        description: evt.target.value
      }
    })
  }

  const showModal = () => {
    setVisible(true)
  }

  const handleCancel = () => {
    setVisible(false)
  }

  const onAddTask = () => {
    const { onAddTodo } = props
    onAddTodo(todo)

    setVisible(false)
    setInputValue('')
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

  return (
    <>
      <Button type="primary" onClick={showModal}>
        + Add task
      </Button>

      <Modal
        visible={visible}
        title="Добавление задачи"
        onOK={onAddTask}
        onCancel={handleCancel}
        footer={[<Button key='addTask' onClick={onAddTask}>Добавить</Button>]}
      >
        <Input value={inputValue} onChange={onHandleChange}/>
        <div>
          <DateTime addTime={onAddTime} addDate={onAddDate}/>
          <SelectProject addProject={onAddProject}/>
          <div>Приоритет</div>
          <div>Напоминание</div>
        </div>
      </Modal>
    </>
  )
}

AddTaskCmp.propTypes = {
  onAddTodo: PropTypes.func
}
