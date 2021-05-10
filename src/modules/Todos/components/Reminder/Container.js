import { connect } from 'react-redux'
import { ReminderCmp } from './Component'
import {showReminderChange} from '../../../../actions/todos.action'

const mapDispatchToProps = (dispatch) => {
  return {
    onShowReminderChange: (id, bool) => dispatch(showReminderChange(id, bool))
  }
}

export const Reminder = connect(null, mapDispatchToProps)(ReminderCmp)