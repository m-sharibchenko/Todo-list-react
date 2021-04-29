import { ProjectItemCmp } from './Component'
import { connect } from 'react-redux'
import { editProject } from '../../../../actions/todos.action'

const mapDispatchToProps = (dispatch) => {
  return {
    onEditProject: (project) => dispatch(editProject(project))
  }
}

export const ProjectItem = connect(null, mapDispatchToProps)(ProjectItemCmp)
