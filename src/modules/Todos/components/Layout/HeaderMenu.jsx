import React from 'react'
import { Menu } from 'antd'
import { user, app } from '../../../../routes/rootRoutes'
import { Link } from 'react-router-dom'
import { Search } from '../../../../components/Search'
import { AddTask } from '../AddTask'
import { todayRoute } from '../../../../routes/todo.routes/projectRoutes'

export function HeaderMenu () {
  return (
    <>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[app.path]}>
        <Menu.Item key={app.path}>
          <Link to={`${app.path}${todayRoute.path}`}>Home</Link>
        </Menu.Item>

        <Menu.Item key='search-input' className="header__search-wrapper">
          <Search/>
        </Menu.Item>
      </Menu>

      <Menu theme="dark" mode="horizontal">
        <AddTask/>

        <Menu.Item key={user.path}>
          <Link to={user.path}>UserProfile</Link>
        </Menu.Item>
      </Menu>
    </>
  )
}