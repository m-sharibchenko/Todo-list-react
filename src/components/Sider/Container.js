import { SiderCmp } from './Component'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    projectsArray: state.todos.projects
  }
}

export const Sider = connect(mapStateToProps)(SiderCmp)