import { v1 as generateUID } from 'uuid'
import { ACTIVE_TODO_STATUS } from '../constants/todoStatus'

export const ADD_TODO = 'ADD_TODO'
export const ADD_PROJECT = 'ADD_PROJECT'
export const DEFAULT_PROJECT = 'Входящие'

export function addTodoAction ({ description, date, time, project }) {
  return {
    type: ADD_TODO,
    payload: {
      id: generateUID(),
      status: ACTIVE_TODO_STATUS,
      description,
      date,
      time,
      project,
    }
  }
}

export function addProjectAction (value) {
  return {
    type: ADD_PROJECT,
    payload: {
      projectName: value,
      todos: []
    }
  }
}




