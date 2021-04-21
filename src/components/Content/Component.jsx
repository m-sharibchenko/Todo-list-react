import React from 'react'
import PropTypes from 'prop-types'
import { Layout } from 'antd'
import { ACTIVE_TODO_STATUS, DONE_TODO_STATUS } from '../../constants/todoStatus'

const { Content } = Layout

export function ContentComponent (props) {
  return (
    <Content style={{ margin: '0 16px', padding: '84px 0 0 0' }}>
      <ul>
        {props.todosArray.map(({ id, description, date, time }) => {
          return (
            <li key={id}>
              <p>{description}</p>
              <p>{date}{time ? `, ${time}` : ''}</p>
            </li>
          )
        })}
      </ul>
    </Content>
  )
}

ContentComponent.propTypes = {
  todosArray: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      status: PropTypes.oneOf([ACTIVE_TODO_STATUS, DONE_TODO_STATUS]),
      description: PropTypes.string,
      date: PropTypes.string,
      time: PropTypes.string,
      project: PropTypes.string,
    })
  )
}