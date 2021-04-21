import { SelectProjectCmp } from "./Component";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
  return {
    projectsArray: state.todos.projects
  }
}

export const SelectProject = connect(mapStateToProps)(SelectProjectCmp)