import { AddProjectCmp } from './Component'
import { connect } from 'react-redux'
import { addProjectAction } from '../../actions/todos.action'

const mapDispatchToProps = (dispatch) => {
  return {
    onAddProject: (value) => dispatch(addProjectAction(value))
  }
}

export const AddProject = connect(null, mapDispatchToProps)(AddProjectCmp)