import { TodoItemCmp } from './Component'
import { connect } from 'react-redux'
import { editTodo, todoStatusChange } from '../../../../actions/todos.action'
import { getProjects } from '../../../../selectors'

const mapStateToProps = (state) => {
  return {
    projectsArray: getProjects(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoStatusChange: (todo) => dispatch(todoStatusChange(todo)),
    onEditTodo: (todo) => dispatch(editTodo(todo)),
  }
}

export const TodoItem = connect(mapStateToProps, mapDispatchToProps)(TodoItemCmp)