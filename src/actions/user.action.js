export const USER_LOGIN = 'USER_LOGIN'

export function userIsLogin (boolean) {
  return {
    type: USER_LOGIN,
    payload: {
      isLogged: boolean,
    }
  }
}