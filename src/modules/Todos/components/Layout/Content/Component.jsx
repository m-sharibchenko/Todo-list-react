import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import { TodoList } from '../../TodoList'
import { priorityRoutes } from '../../../../../routes/todo.routes/priorityRoutes'
import { projectsPropTypes } from '../../../../../propTypes'
import { projectRoutes } from '../../../../../routes/todo.routes/projectRoutes'

export function ContentCmp (props) {
  const { url } = useRouteMatch()

  return (
    <Switch>
      {props.projectsArray.map(item => {
        return (
          <Route key={item.id}
                 path={`${url}/${item.id}`}
                 exact
                 render={() => (<TodoList filterProp="project" filterItem={item.id}/>)}
          />)
      })}

      {priorityRoutes.map(({ path, isExact, component }) => {
        return (
          <Route key={path}
                 path={`${url}${path}`}
                 exact={isExact}
                 component={component}
          />)
      })}

      {projectRoutes.map(({ path, isExact, component }) => {
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

ContentCmp.propTypes = {
  projectsArray: projectsPropTypes,
}
