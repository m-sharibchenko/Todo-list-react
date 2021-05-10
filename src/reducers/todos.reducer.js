import {
  ADD_PROJECT,
  ADD_TODO,
  EDIT_TODO,
  EDIT_PROJECT,
  TODO_STATUS_CHANGE,
  SET_USER_TODOS, DELETE_TODO, SHOW_REMINDER_CHANGE
} from '../actions/todos.action'
import { DEFAULT_PROJECT, FIRST_PROJECT } from '../modules/Todos/constants/projects'
import { ACTIVE_TODO_STATUS, DONE_TODO_STATUS } from '../modules/Todos/constants/todoStatus'

const initialState = {
  todos: [],
  projects: [
    {
      id: "6ec0bd7f-11c0-43da-975e-2a8ad9ebae0b",
      projectName: DEFAULT_PROJECT,
      todos: []
    },
    {
      id: "1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed",
      projectName: FIRST_PROJECT,
      todos: []
    }
  ],
}

export function todosReducer (state = initialState, action) {
  switch (action.type) {
    case SET_USER_TODOS:
      return action.payload
    case ADD_TODO:
      const newTodo = action.payload
      const newProjects = state.projects.map(item => {
        if (item.id === newTodo.project) {
          return {
            ...item,
            todos: [...item.todos, newTodo.id]
          }
        }

        return item
      })

      return {
        todos: [...state.todos, newTodo],
        projects: newProjects
      }
    case ADD_PROJECT:
      const newProject = action.payload
      return {
        todos: [...state.todos],
        projects: [...state.projects, newProject]
      }
    case TODO_STATUS_CHANGE:
      const todo = action.payload
      const newTodos = state.todos.map(item => {
        if (item.id === todo.id) {
          return {
            ...item,
            status: todo.status === ACTIVE_TODO_STATUS ? DONE_TODO_STATUS : ACTIVE_TODO_STATUS
          }
        }

        return item
      })

      return {
        todos: newTodos,
        projects: [...state.projects]
      }
    case EDIT_TODO:
      const newItem = action.payload
      const newTodosArray = state.todos.map(item => {
        if (item.id === newItem.id) {
          return {
            ...item,
            description: newItem.description,
            date: newItem.date,
            time: newItem.time,
            project: newItem.project,
            priority: newItem.priority,
          }
        }

        return item
      })

      return {
        todos: newTodosArray,
        projects: [...state.projects]
      }
    case EDIT_PROJECT:
      const project = action.payload
      const newProjectsArr = state.projects.map(item => {
        if (item.id === project.id) {
          return {
            ...item,
            projectName: project.projectName,
          }
        }

        return item
      })

      return {
        todos: [...state.todos],
        projects: newProjectsArr,
      }
    case DELETE_TODO:
      const todoID = action.payload.todoId
      const newProjectsArray = state.projects.map(item => {
        if (item.todos.find(todo => todo === todoID)) {
          const id = item.todos.find(todo => todo === todoID)
          const newTodos = item.todos.filter(todo => todo !== id)

          return {
            ...item,
            todos: newTodos
          }
        }

        return item
      })

      const newTodosArr = state.todos.filter(item => item.id !== todoID)

      return {
        todos: newTodosArr,
        projects: newProjectsArray,
      }
    case SHOW_REMINDER_CHANGE:
      const payload = action.payload
      const todosArrNew = state.todos.map(item => {
        if (item.id === payload.id) {
          return {
            ...item,
            reminder: {
              status: item.reminder.status,
              wasShown: payload.bool
            }
          }
        }

        return item
      })

      return {
        todos: todosArrNew,
        projects: [...state.projects],
      }
    default:
      return state
  }
}
