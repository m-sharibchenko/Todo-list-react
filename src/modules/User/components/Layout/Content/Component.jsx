import React from 'react'
import { Switch, Route, useRouteMatch, Redirect } from 'react-router-dom'
import { userRoutes } from '../../../../../routes/user.routes/mainRoutes'
import { profile } from '../../../../../routes/user.routes/mainRoutes'

export function UserContent () {
  const { url } = useRouteMatch()

  return (
    <Switch>
      <Route
        key={url}
        path={url}
        exact
        render={() => <Redirect to={`${url}${profile.path}`}/>}
      />

      {userRoutes.map(({ path, isExact, component }) => {
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