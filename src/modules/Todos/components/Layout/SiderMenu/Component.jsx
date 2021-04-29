import React from 'react'
import { Menu } from 'antd'
import './style.css'
import { DEFAULT_PROJECT } from '../../../constants/projects'
import { Link, useRouteMatch } from 'react-router-dom'
import { AddProject } from '../../AddProject'
import { priorityRoutes } from '../../../../../routes/priorityRoutes'
import { projectsPropTypes } from '../../../../../propTypes'
import { ProjectItem } from '../../ProjectItem'

const { SubMenu } = Menu

export function SiderMenuCmp (props) {
  const { url } = useRouteMatch()

  return (
    <Menu defaultSelectedKeys="today" mode="inline" className="sider__main-menu">
      <Menu.Item key="incoming">
        {props.projectsArray.map(item => {
          if (item.projectName === DEFAULT_PROJECT) {
            return <Link key={item.id} to={`${url}/${item.id}`}>{item.projectName}</Link>
          }
        })}
      </Menu.Item>

      <Menu.Item key="today">
        <Link to={`${url}/today`}>Сегодня</Link>
      </Menu.Item>

      <Menu.Item key="upcoming">
        <Link to={`${url}/upcoming`}>Предстоящие</Link>
      </Menu.Item>

      <SubMenu key="projects" title="Проекты" className="sider__projects">
        <Menu.Item key="add-project">
          <AddProject/>
        </Menu.Item>

        {props.projectsArray.filter(item => item.projectName !== DEFAULT_PROJECT).map(item => {
          return (<Menu.Item key={item.id}>
            <ProjectItem item={item} url={url}/>
          </Menu.Item>)
        })}
      </SubMenu>

      <SubMenu key="priorities" title="Фильтр приоритетов">
        {priorityRoutes.map(({ path, title }) => {
          return (<Menu.Item key={path}>
            <Link to={`${url}${path}`}>{title}</Link>
          </Menu.Item>)
        })}
      </SubMenu>

      <Menu.Item key="deleted">
        <Link to={`${url}/deleted`}>Удаленные</Link>
      </Menu.Item>
    </Menu>
  )
}

SiderMenuCmp.propTypes = {
  projectsArray: projectsPropTypes,
}