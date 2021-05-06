import React from 'react'
import './style.css'
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
            <img src='/icons/home.png' alt="home"/>
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
            <img src='/icons/user.png' alt="user"/>
          </Link>
        </div>
      </div>
    </>
  )
}