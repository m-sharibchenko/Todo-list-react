import { ADD_PROJECT, ADD_TODO } from '../actions/todos.action'

const initialState = {
  todos: [],
  projects: [
    {
      projectName: 'Входящие',
      todos: []
    },
    {
      projectName: 'Попробовать доски',
      todos: []
    }
  ],
}

export function todosReducer (state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      const newTodo = action.payload
      const newProjects = state.projects.map(item => {
        if (item.projectName === newTodo.project) {
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
    default:
      return state
  }
}
