import React from 'react'
import 'antd/dist/antd.css'
import { Switch, Route } from 'react-router-dom'
import { routes } from './rootRoutes'

// todo: использовать селекторы для путей

export function App () {
  return (
    <div className="App">
      <Switch>
        {routes.map(({ path, isExact, component }) => {
          return <Route key={path} path={path} exact={isExact} component={component}/>
        })}
      </Switch>
    </div>
  )
}
