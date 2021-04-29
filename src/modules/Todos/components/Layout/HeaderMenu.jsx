import React from 'react'
import { Menu } from 'antd'
import { homePg, prefs } from '../../../../routes/rootRoutes'
import { Link } from 'react-router-dom'
import { Search } from '../../../../components/Search'
import { AddTask } from '../AddTask'

export function HeaderMenu () {
  return (
    <>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[homePg.path]}>
        <Menu.Item key={homePg.path}>
          <Link to={homePg.path}>Home</Link>
        </Menu.Item>

        <Menu.Item key='search-input' className="header__search-wrapper">
          <Search/>
        </Menu.Item>
      </Menu>

      <Menu theme="dark" mode="horizontal">
        <AddTask/>

        <Menu.Item key={prefs.path}>
          <Link to={prefs.path}>UserProfile</Link>
        </Menu.Item>
      </Menu>
    </>
  )
}