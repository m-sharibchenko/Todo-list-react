import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Route, useHistory } from 'react-router-dom'
import { app } from '../routes/rootRoutes'
import { connect } from 'react-redux'

export function SecureRouteCmp (props) {
  const history = useHistory()

  useEffect(() => {
    console.log(props.isLogged)
    if (props.isLogged) {
      history.push(app.path)
    }
  }, [])

  return <Route {...props} />
}

SecureRouteCmp.propTypes = {
  isLogged: PropTypes.bool,
}

const mapStateToProps = (state) => {
  return {
    isLogged: state.user.isLogged
  }
}

export const SecureRoute = connect(mapStateToProps)(SecureRouteCmp)