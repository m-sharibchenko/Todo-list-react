import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Checkbox, List, Popconfirm, Button } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'
import './style.css'
import { projectsPropTypes, todoPropTypes } from '../../../../propTypes'
import { formatDate } from './sevices/formatDate'
import { FIRST_PRIORITY, SECOND_PRIORITY, THIRD_PRIORITY } from '../../constants/todoPriority'
import { ModalWindow } from '../../../../components/Modal'
import { DateTimePricker } from '../../../../components/DateTimePicker'
import { SelectProject } from '../SelectProject'
import { SelectPriority } from '../SelectPriority'
import { DONE_TODO_STATUS } from '../../constants/todoStatus'

export function TodoItemCmp (props) {
  const { item } = props

  const [todo, setValue] = useState(item)

  const onStatusChange = () => {
    const {onTodoStatusChange} = props

    onTodoStatusChange(todo)
  }

  const onHandleChange = (evt) => {
    setValue(prevState => {
      return {
        ...prevState,
        description: evt.target.value
      }
    })
  }

  const onEditDate = (date) => {
    setValue(prevState => {
      return { ...prevState, date }
    })
  }

  const onEditTime = (time) => {
    setValue(prevState => {
      return { ...prevState, time }
    })
  }

  const onEditItem = () => {
    const { onEditTodo } = props
    onEditTodo(todo)
  }

  const onEditPriority = (priority) => {
    setValue(prevState => {
      return { ...prevState, priority }
    })
  }

  const onEditProject = (project) => {
    setValue(prevState => {
      return { ...prevState, project }
    })
  }

  const onRestoreClick = () => {
  //  НЕЛЬЗЯ В ПРОПСЫ ЗНАЧЕНИЯ ДОБАВЛЯТЬ!!
  }

  const onConfirm = () => {
    console.log(todo.id)
    const { onDeleteTodo } = props
    onDeleteTodo(todo.id)
  }

  return (
    <List.Item className="todo-item">
      <div className="todo-item__main-info">
        <div className="todo-item__description">
          <Checkbox
            onChange={onStatusChange}
            checked={todo.status === DONE_TODO_STATUS}
            className="todo-item__checkbox"
          />
          <p key={todo.description}>{todo.description}</p>
        </div>

        <div>
          <ModalWindow
            onAddItem={onEditItem}
            btnType="text"
            styleClass="btn-edit"
            title="Редактировать"
            onChange={onHandleChange}
            descriptionValue={todo.description}
          >
            <div>
              <DateTimePricker addTime={onEditTime} addDate={onEditDate} defaultDate={todo.date} defaultTime={todo.time}/>
              <SelectProject addProject={onEditProject} projectValue={todo.project}/>
              <SelectPriority addPriority={onEditPriority} priorityValue={todo.priority}/>
              {/*<div>Напоминание</div>*/}
            </div>
          </ModalWindow>

          <Popconfirm
            title="Вы уверены?"
            cancelText="Отменить"
            okText="Принять"
            onConfirm={onConfirm}
          >
            <Button type="text" className="todo-item__btn-delete">
              <DeleteOutlined style={{fontSize: '1rem'}}/>
            </Button>
          </Popconfirm>
        </div>

        {todo.status === DONE_TODO_STATUS
          ? <button onClick={onRestoreClick}>Restore</button>
          : <></>
        }
      </div>

      <div className="todo-item__info">

        <div className="todo-item__date-priority">
          {todo.date ?
            <p className="todo-item__date">
              {formatDate(todo.date)}{todo.time ? `, ${todo.time}`  : ''}
            </p>
            : ''
          }

          <p
            className={todo.priority === FIRST_PRIORITY && 'first-priority'
            || todo.priority === SECOND_PRIORITY && 'second-priority'
            || todo.priority === THIRD_PRIORITY && 'third-priority'}
          >
            {todo.priority}
          </p>
        </div>

        <p>{props.projectsArray.find(item => item.id === todo.project).projectName}</p>
      </div>
    </List.Item>
  )
}

TodoItemCmp.propTypes = {
  projectsArray: projectsPropTypes,
  item: todoPropTypes,
  onTodoStatusChange: PropTypes.func,
  onEditTodo: PropTypes.func,
  onDeleteTodo: PropTypes.func,
}