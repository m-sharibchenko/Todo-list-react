import { connect } from 'react-redux'
import { TodoListCmp } from './Component'
import { getTodos } from '../../../../selectors'

const mapStateToProps = (state) => {
  return {
    todosArray: getTodos(state)
  }
}

export const TodoList = connect(mapStateToProps)(TodoListCmp)