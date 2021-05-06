import React from 'react'
import { Menu } from 'antd'
import './style.css'
import { Link, useRouteMatch } from 'react-router-dom'
import { userRoutes } from '../../../../../routes/user.routes/mainRoutes'

export function UserSider () {
  const { url } = useRouteMatch()

  return (
    <Menu
      mode="inline"
      defaultOpenKeys="1"
      style={{ height: '100%' }}
      className="user__sider-menu"
    >
      {userRoutes.map(({path, title}) => {
        return (<Menu.Item key={path}>
          <Link to={`${url}${path}`}>{title}</Link>
        </Menu.Item>
        )
      })}
    </Menu>
  )
}