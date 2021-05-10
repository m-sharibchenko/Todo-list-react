import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Checkbox, List, Popconfirm, Button } from 'antd'
import { DeleteOutlined, RollbackOutlined } from '@ant-design/icons'
import './style.css'
import { projectsPropTypes, todoPropTypes } from '../../../../propTypes'
import { formatDate } from './sevices/formatDate'
import { FIRST_PRIORITY, SECOND_PRIORITY, THIRD_PRIORITY } from '../../constants/todoPriority'
import { ModalWindow } from '../../../../components/Modal'
import { DateTimePricker } from '../../../../components/DateTimePicker'
import { SelectProject } from '../SelectProject'
import { SelectPriority } from '../SelectPriority'
import { ACTIVE_TODO_STATUS, DONE_TODO_STATUS } from '../../constants/todoStatus'
import { Reminder } from '../Reminder'

export function TodoItemCmp (props) {
  const { item } = props
  const {onTodoStatusChange} = props

  const [todo, setTodo] = useState(item)

  const onStatusChange = () => {
    onTodoStatusChange(todo)
  }

  const onHandleChange = (evt) => {
    setTodo(prevState => {
      return {
        ...prevState,
        description: evt.target.value
      }
    })
  }

  const onEditDate = (date) => {
    setTodo(prevState => {
      return {
        ...prevState,
        date,
        reminder: {
          status: todo.status,
          wasShown: false
        }
      }
    })
  }

  const onEditTime = (time) => {
    setTodo(prevState => {
      return {
        ...prevState,
        time,
        reminder: {
          status: todo.status,
          wasShown: false
        }
      }
    })
  }

  const onEditItem = () => {
    const { onEditTodo } = props
    onEditTodo(todo)
  }

  const onEditPriority = (priority) => {
    setTodo(prevState => {
      return { ...prevState, priority }
    })
  }

  const onEditProject = (project) => {
    setTodo(prevState => {
      return { ...prevState, project }
    })
  }

  const onRestoreClick = () => {
    setTodo(prevState => {
      return {
        ...prevState,
        status: ACTIVE_TODO_STATUS,
      }
    })

    onTodoStatusChange(todo)
  }

  const onConfirm = () => {
    const { onDeleteTodo } = props
    onDeleteTodo(todo.id)
  }

  const onSetReminder = (e) => {
    setTodo(prevState => {
      return {
        ...prevState,
        reminder: {
          status: e.target.checked,
          wasShown: false
        }
      }
    })
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
              <DateTimePricker
                addTime={onEditTime}
                addDate={onEditDate}
                defaultDate={todo.date}
                defaultTime={todo.time}
              />
              <SelectProject addProject={onEditProject} projectValue={todo.project}/>
              <SelectPriority addPriority={onEditPriority} priorityValue={todo.priority}/>
              <Checkbox onChange={onSetReminder}
                        defaultChecked={todo.reminder.status}
              >
                Добавить напоминание
              </Checkbox>
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

          <Button
            type="text"
            onClick={onRestoreClick}
            style={{display: todo.status === DONE_TODO_STATUS ? null : 'none'}}
            className="todo-item__btn-restore"
          >
            <RollbackOutlined style={{fontSize: '1rem'}}/>
          </Button>
        </div>

        {props.reminders && todo.reminder.status ? <Reminder todo={todo}/> : ''}
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
  reminders: PropTypes.bool,
  projectsArray: projectsPropTypes,
  item: todoPropTypes,
  onTodoStatusChange: PropTypes.func,
  onEditTodo: PropTypes.func,
  onDeleteTodo: PropTypes.func,
}