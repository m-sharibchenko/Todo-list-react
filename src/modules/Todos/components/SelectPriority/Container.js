import { SelectPriorityCmp } from './Component'
import { connect } from 'react-redux'
import { getTodos } from '../../../../selectors'

const mapStateToProps = (state) => {
  return {
    todos: getTodos(state)
  }
}

export const SelectPriority = connect(mapStateToProps)(SelectPriorityCmp)