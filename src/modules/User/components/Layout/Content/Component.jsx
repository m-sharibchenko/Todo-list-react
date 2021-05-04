import React from 'react'
import { Switch, Route, useRouteMatch } from 'react-router-dom'
import { userRoutes } from '../../../../../routes/user.routes/mainRoutes'

export function UserContent () {
  const { url } = useRouteMatch()

  return (
    <Switch>
      {userRoutes.map(({path, isExact, component}) => {
        return (
          <Route key={path}
                 path={`${url}${path}`}
                 exact={isExact}
                 component={component}
          />)
      })}
    </Switch>
  )
}