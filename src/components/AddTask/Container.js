import { AddTaskCmp } from "./Component";
import { addTodoAction } from "../../actions/todos.action";
import { connect } from "react-redux";

const mapDispatchToProps = (dispatch) => {
  return {
    onAddTodo: (todo) => dispatch(addTodoAction(todo)),
  }
}

export const AddTask = connect(null, mapDispatchToProps)(AddTaskCmp)