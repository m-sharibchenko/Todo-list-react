import { connect } from 'react-redux'
import { SearchCmp } from './Component'
import { getProjects } from '../../selectors'

const mapStateToProps = (state) => {
  return {
    projectsArray: getProjects(state)
  }
}

export const Search = connect(mapStateToProps)(SearchCmp)
