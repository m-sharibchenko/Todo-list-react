import React from 'react'
import 'antd/dist/antd.css'
import './index.css'
import { Switch, Route } from 'react-router-dom'
import { rootRoutes } from './routes/rootRoutes'

export function App () {
  return (
    <div className="App">
      <Switch>
        {rootRoutes.map(({ path, isExact, component }) => {
          return <Route key={path} path={path} exact={isExact} component={component}/>
        })}

        <Route>Not found</Route>
      </Switch>
    </div>
  )
}
