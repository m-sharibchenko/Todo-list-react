import React from 'react'
import PropTypes from 'prop-types'
import { AddProject } from '../AddProject'
import { Layout, Menu, } from 'antd'
import './style.css'
import { DEFAULT_PROJECT } from '../../actions/todos.action'

const { Sider } = Layout
const { SubMenu } = Menu

export function SiderCmp (props) {
  return (
    <Sider className="Sider">
      <Menu defaultSelectedKeys={['1']}
            mode="inline"
            className="sider__main-menu">
        <Menu.Item key='11'>
          Входящие
        </Menu.Item>

        <Menu.Item key='12'>
          Сегодня
        </Menu.Item>

        <Menu.Item key='13'>
          Предстоящие
        </Menu.Item>
      </Menu>

      <Menu mode="inline">
        <SubMenu key="sub1" title="Проекты" className="sider__projects">
          <Menu.Item key="9">
            <AddProject/>
          </Menu.Item>

          {props.projectsArray.filter(item => item.projectName !== DEFAULT_PROJECT).map(item => {
            return (<Menu.Item key={item.projectName}>{item.projectName}</Menu.Item>)
          })}
        </SubMenu>

        <SubMenu key="sub2" title="Фильтры">
          <Menu.Item key="6">Team 1</Menu.Item>
          <Menu.Item key="8">Team 2</Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  )
}

SiderCmp.propTypes = {
  projectsArray: PropTypes.arrayOf(
    PropTypes.shape({
        projectName: PropTypes.string,
        todos: PropTypes.arrayOf(PropTypes.string)
    })
  )
}
