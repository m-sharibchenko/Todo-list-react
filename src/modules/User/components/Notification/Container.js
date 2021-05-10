import { NotificationCmp } from './Component'
import { connect } from 'react-redux'
import { changeNotificationsStatus, changeRemindersStatus } from '../../../../actions/user.action'

const mapStateToProps = (state) => {
  return {
    reminders: state.user.reminders,
    notifications: state.user.notifications,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    notificationsChange: (bool) => dispatch(changeNotificationsStatus(bool)),
    remindersChange: (bool) => dispatch(changeRemindersStatus(bool)),
  }
}

export const Notification = connect(mapStateToProps, mapDispatchToProps)(NotificationCmp)