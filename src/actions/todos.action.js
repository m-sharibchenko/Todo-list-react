import { v1 as generateUID } from 'uuid'
import { ACTIVE_TODO_STATUS } from '../modules/Todos/constants/todoStatus'

export const ADD_TODO = 'ADD_TODO'
export const ADD_PROJECT = 'ADD_PROJECT'
export const TODO_STATUS_CHANGE = 'TODO_STATUS_CHANGE'
export const EDIT_TODO = 'EDIT_TODO'
export const EDIT_PROJECT = 'EDIT_PROJECT'
export const SET_USER_TODOS = 'SET_USER_TODOS'
export const DELETE_TODO = 'DELETE_TODO'

export function addTodoAction ({ description, date, time, project, priority }) {
  return {
    type: ADD_TODO,
    payload: {
      id: generateUID(),
      status: ACTIVE_TODO_STATUS,
      description,
      date,
      time,
      project,
      priority,
    }
  }
}

export function addProjectAction (value) {
  return {
    type: ADD_PROJECT,
    payload: {
      id: generateUID(),
      projectName: value,
      todos: []
    }
  }
}

export function todoStatusChange ({id, status}) {
  return {
    type: TODO_STATUS_CHANGE,
    payload: {
      id,
      status,
    }
  }
}

export function editTodo ({ id, description, date, time, project, priority }) {
  return {
    type: EDIT_TODO,
    payload: {
      id,
      description,
      date,
      time,
      project,
      priority,
    }
  }
}

export function editProject ({ id, projectName}) {
  return {
    type: EDIT_PROJECT,
    payload: {
      id,
      projectName
    }
  }
}

export function deleteTodo (todoId) {
  return {
    type: DELETE_TODO,
    payload: {
      todoId,
    }
  }
}

export function getUserTodos (userID) {
  return async (dispatch) => {
    const response = await fetch(`https://79d612a8-51e0-4fbe-898f-334e0704db14.mock.pstmn.io/test?userID=${userID}`)
    const userTodos = await response.json()

    dispatch({
      type: SET_USER_TODOS,
      payload: {
        ...userTodos
      }
    })
  }
}