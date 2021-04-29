import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import { TodoList } from '../../TodoList'
import { priorityRoutes } from '../../../../../routes/priorityRoutes'
import { projectsPropTypes } from '../../../../../propTypes'
import { DONE_TODO_STATUS } from '../../../constants/todoStatus'

export function ContentCmp (props) {
  const { url } = useRouteMatch()

  const today = new Date().toISOString().substring(0, 10)

  return (
    <>
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

        <Route path={`${url}/today`}
               exact
               render={() => (<TodoList filterProp="date" filterItem={today}/>)}/>

        <Route path={`${url}/deleted`}
               exact
               render={() => (<TodoList filterProp="status" filterItem={DONE_TODO_STATUS}/>)}/>

        <Route path={`${url}/upcoming`}
               exact
               render={() => (<div>upcoming</div>)}/>
      </Switch>
    </>
  )
}

ContentCmp.propTypes = {
  projectsArray: projectsPropTypes,
}
