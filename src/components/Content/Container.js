import { ContentComponent } from './Component'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    todosArray: state.todos.todos
  }
}

export const ContentCmp = connect(mapStateToProps)(ContentComponent)
