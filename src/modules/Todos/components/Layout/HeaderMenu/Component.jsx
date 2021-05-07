import React from 'react'
import './style.css'
import { UserOutlined, HomeOutlined } from '@ant-design/icons'
import { user, app } from '../../../../../routes/rootRoutes'
import { Link } from 'react-router-dom'
import { Search } from '../../../../../components/Search'
import { AddTask } from '../../AddTask'
import { todayRoute } from '../../../../../routes/todo.routes/projectRoutes'

export function HeaderMenu () {
  return (
    <>
      <div className="header__menu-wrap">
        <div className="header__home-link">
          <Link to={`${app.path}${todayRoute.path}`} className="link">
            <HomeOutlined style={{fontSize: '1.5rem', color: '#FFFFFF'}}/>
          </Link>
        </div>

        <Search/>
      </div>

      <div className="header__menu-wrap">
        <div className="header__btn-add-task">
          <AddTask/>
        </div>

        <div className="header__user-prof-link">
          <Link to={user.path} className="link">
            <UserOutlined style={{fontSize: '1.5rem', color: '#FFFFFF'}}/>
          </Link>
        </div>
      </div>
    </>
  )
}