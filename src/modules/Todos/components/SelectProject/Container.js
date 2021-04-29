import { SelectProjectCmp } from './Component'
import { connect } from 'react-redux'
import { getProjects } from '../../../../selectors'

const mapStateToProps = (state) => {
  return {
    projectsArray: getProjects(state)
  }
}

export const SelectProject = connect(mapStateToProps)(SelectProjectCmp)