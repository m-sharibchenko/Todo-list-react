export const USER_LOGIN = 'USER_LOGIN'
export const CHANGE_USER_INFO = 'CHANGE_USER_NAME'

export function userIsLogin (boolean, { id, email, username }) {
  return {
    type: USER_LOGIN,
    payload: {
      isLogged: boolean,
      id,
      username,
      email,
    }
  }
}

export function changeUserName (value, title) {
  return {
    type: CHANGE_USER_INFO,
    payload: {
      value,
      title,
    }
  }
}