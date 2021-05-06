export const USER_LOGIN = 'USER_LOGIN'
export const CHANGE_USER_INFO = 'CHANGE_USER_NAME'

export function userIsLogin (boolean, user) {
  if (user) {
    return {
      type: USER_LOGIN,
      payload: {
        isLogged: boolean,
        id: user.id,
        username: user.username,
        email: user.email,
      }
    }
  }
  return {
    type: USER_LOGIN,
    payload: {
      isLogged: boolean,
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