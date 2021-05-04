import { connect } from 'react-redux'
import { UserAccountCmp } from './Component'
import { getUserData } from '../../../../selectors'

const mapStateToProps = (state) => {
  return {
    userData: getUserData(state)
  }
}

export const UserAccount = connect(mapStateToProps)(UserAccountCmp)