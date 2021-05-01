import React from 'react'
import { FIRST_PRIORITY, SECOND_PRIORITY, THIRD_PRIORITY } from '../../modules/Todos/constants/todoPriority'
import { TodoList } from '../../modules/Todos/components/TodoList'

const firstPriority = {
  path: '/priority1',
  title: FIRST_PRIORITY,
  isExact: true,
  component: () => <TodoList filterProp="priority" filterItem={FIRST_PRIORITY}/>,
}

const secondPriority = {
  path: '/priority2',
  title: SECOND_PRIORITY,
  isExact: true,
  component: () => <TodoList filterProp="priority" filterItem={SECOND_PRIORITY}/>,
}

const thirdPriority = {
  path: '/priority3',
  title: THIRD_PRIORITY,
  isExact: true,
  component: () => <TodoList filterProp="priority" filterItem={THIRD_PRIORITY}/>,
}

export const priorityRoutes = [firstPriority, secondPriority, thirdPriority]