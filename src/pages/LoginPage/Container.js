import { LoginPgCmp } from './Component'
import { connect } from 'react-redux'
import { userIsLogin } from '../../actions/user.action'
import { getUserTodos } from '../../actions/todos.action'

const mapStateToProps = (state) => {
  return {
    isLogged: state.user.isLogged
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    isUserExist: (data) => dispatch(userIsLogin(data)),
    getUserTodos: (userID) => dispatch(getUserTodos(userID)),
  }
}

export const LoginPg = connect(mapStateToProps, mapDispatchToProps)(LoginPgCmp)