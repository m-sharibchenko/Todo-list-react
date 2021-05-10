export const USER_LOGIN = 'USER_LOGIN'
export const CHANGE_USER_INFO = 'CHANGE_USER_NAME'
export const CHANGE_NOTIFICATIONS_STATUS = 'CHANGE_NOTIFICATIONS_STATUS'
export const CHANGE_REMINDERS_STATUS = 'CHANGE_REMINDERS_STATUS'

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

export function changeNotificationsStatus (bool) {
  return {
    type: CHANGE_NOTIFICATIONS_STATUS,
    payload: {
      notification: bool,
    }
  }
}

export function changeRemindersStatus (bool) {
  return {
    type: CHANGE_REMINDERS_STATUS,
    payload: {
      reminders: bool,
    }
  }
}