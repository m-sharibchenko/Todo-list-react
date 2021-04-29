import React from 'react'
import PropTypes from 'prop-types'
import { List } from 'antd'
import './style.css'
import { todosPropTypes } from '../../../../propTypes'
import { TodoItem } from '../TodoItem'
import { ACTIVE_TODO_STATUS, DONE_TODO_STATUS } from '../../constants/todoStatus'

export function TodoListCmp (props) {
  const { filterProp, filterItem } = props

  return (
    <List className="todo-list">
      {filterProp === 'status' ?
        props.todosArray.filter(item => item.status === DONE_TODO_STATUS)
          .filter(item => item[filterProp] === filterItem)
          .map(item => {
            return (<TodoItem key={item.id} item={item}/>)
          })
        : props.todosArray.filter(item => item.status === ACTIVE_TODO_STATUS)
          .filter(item => item[filterProp] === filterItem)
        .map(item => {
        return (<TodoItem key={item.id} item={item}/>)
      })}
    </List>
  )
}

// .filter(item => item.status === ACTIVE_TODO_STATUS)

TodoListCmp.propTypes = {
  filterProp: PropTypes.string,
  filterItem: PropTypes.string,
  todosArray: todosPropTypes,
}


