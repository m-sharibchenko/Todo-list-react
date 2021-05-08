import { CHANGE_USER_INFO, USER_LOGIN } from '../actions/user.action'
import { ACCOUNT_INFO_TITLES } from '../modules/User/constants'

const initialState = {
  isLogged: false,
  id: '',
  userName: '',
  email: '',
}

export function userReducer (state = initialState, action) {
  switch (action.type) {
    case USER_LOGIN:
      const data = action.payload
      return {
        isLogged: data.isLogged,
        id: data.id,
        userName: data.username,
        email: data.email,
      }
    case CHANGE_USER_INFO:
      const changes = action.payload
      if (changes.title === ACCOUNT_INFO_TITLES.name) {
        return {
          ...state,
          userName: changes.value
        }
      } else {
        return {
          ...state,
          email: changes.value
        }
      }
    default:
      return state
  }
}