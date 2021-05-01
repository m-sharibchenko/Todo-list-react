import { USER_LOGIN } from '../actions/user.action'

const initialState = {
  isLogged: false
}

export function userReducer (state = initialState, action) {
  switch (action.type) {
    case USER_LOGIN:
      const bool = action.payload
      return {
        isLogged: bool.isLogged
      }
    default:
      return state
  }
}