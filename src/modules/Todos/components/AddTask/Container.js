import { AddTaskCmp } from './Component'
import { addTodoAction } from '../../../../actions/todos.action'
import { connect } from 'react-redux'
import { getProjects } from '../../../../selectors'

const mapStateToProps = (state) => {
  return {
    projectsArray: getProjects(state),
    reminders: state.user.reminders
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddTodo: (todo) => dispatch(addTodoAction(todo)),
  }
}

export const AddTask = connect(mapStateToProps, mapDispatchToProps)(AddTaskCmp)