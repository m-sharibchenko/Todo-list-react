import React from 'react'
import { Menu } from 'antd'
import './style.css'
import { DEFAULT_PROJECT } from '../../../constants/projects'
import { Link, useRouteMatch, useLocation } from 'react-router-dom'
import { AddProject } from '../../AddProject'
import { priorityRoutes } from '../../../../../routes/todo.routes/priorityRoutes'
import { projectsPropTypes } from '../../../../../propTypes'
import { ProjectItem } from '../../ProjectItem'
import { pastRoute, todayRoute, upcomingRoute } from '../../../../../routes/todo.routes/projectRoutes'

const { SubMenu } = Menu

export function SiderMenuCmp (props) {
  const { url } = useRouteMatch()
  const location = useLocation()

  return (
    <Menu
      mode="inline"
      selectedKeys={[location.pathname.replace(url, '')]}
      className="todo-sider__menu"
    >
      {props.projectsArray.map(item => {
        if (item.projectName === DEFAULT_PROJECT) {
          return (
            <Menu.Item key={`/${item.id}`}>
              <Link key={item.id} to={`${url}/${item.id}`}>{item.projectName}</Link>
            </Menu.Item>
          )
        }
      })}

      <Menu.Item key={todayRoute.path}>
        <Link to={`${url}${todayRoute.path}`}>{todayRoute.title}</Link>
      </Menu.Item>

      <Menu.Item key={upcomingRoute.path}>
        <Link to={`${url}${upcomingRoute.path}`}>{upcomingRoute.title}</Link>
      </Menu.Item>

      <SubMenu key="projects" title="Проекты" className="todo-sider__projects">
        <div className="todo-sider__btn-add-project">
          <AddProject/>
        </div>

        {props.projectsArray.filter(item => item.projectName !== DEFAULT_PROJECT).map(item => {
          return (
            <Menu.Item key={`/${item.id}`}>
              <ProjectItem item={item} url={url}/>
            </Menu.Item>
          )
        })}
      </SubMenu>

      <SubMenu key="priorities" title="Фильтр приоритетов" className="todo-sider__priority">
        {priorityRoutes.map(({ path, title }) => {
          return (
            <Menu.Item key={path}>
              <Link to={`${url}${path}`}>{title}</Link>
            </Menu.Item>
          )
        })}
      </SubMenu>

      <Menu.Item key={pastRoute.path}>
        <Link to={`${url}${pastRoute.path}`}>{pastRoute.title}</Link>
      </Menu.Item>
    </Menu>
  )
}

SiderMenuCmp.propTypes = {
  projectsArray: projectsPropTypes,
}