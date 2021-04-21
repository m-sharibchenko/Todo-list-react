import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { app, prefs } from '../../rootRoutes'
import { AddTask } from '../AddTask'
import './style.css'
import { Layout, Menu } from 'antd'
import { Input } from 'antd'

const { Search } = Input
const { Header } = Layout

export function HeaderCmp () {
  const [value, setValue] = useState('')

  const onInputChange = (evt) => {
    setValue(evt.target.value)
  }

  const onSearch = () => {
    //some action with value
    setValue('')
  }

  const onEnter = () => {
    //some action with value
    setValue('')
  }

  return (
    <Header className="header" style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[app.path]}>
        <Menu.Item key={app.path}>
          <Link to={app.path}>Home</Link>
        </Menu.Item>

        <Menu.Item key='search-input' className="header__search-wrapper">
          <Search
            className="header__input-search"
            value={value}
            placeholder="input search text"
            onChange={onInputChange}
            onSearch={onSearch}
            enterButton
            onPressEnter={onEnter}/>
        </Menu.Item>
      </Menu>

      <Menu theme="dark" mode="horizontal">
        <AddTask/>

        <Menu.Item key={prefs.path}>
          <Link to={prefs.path}>UserProfile</Link>
        </Menu.Item>
      </Menu>
    </Header>
  )
}
