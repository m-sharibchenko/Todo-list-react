import { connect } from 'react-redux'
import { EditUserInfoCmp } from './Component'
import { changeUserName } from '../../../../actions/user.action'

const mapDispatchToProps = (dispatch) => {
  return {
    saveChanges: (value, title) => dispatch(changeUserName(value, title))
  }
}

export const EditUserInfo = connect(null, mapDispatchToProps)(EditUserInfoCmp)