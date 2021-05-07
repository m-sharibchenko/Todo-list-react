import React from 'react'
import { TodoList } from '../../modules/Todos/components/TodoList'
import { DONE_TODO_STATUS } from '../../modules/Todos/constants/todoStatus'
import { TODAY, TOMORROW } from '../../constants'

export const todayRoute = {
  path: '/today',
  title: 'Сегодня',
  isExact: true,
  component: () => <TodoList filterProp="date" filterItem={TODAY}/>,
}

export const upcomingRoute = {
  path: '/upcoming',
  title: 'Предстоящие',
  isExact: true,
  component: () => <TodoList filterProp="date" filterItem={TOMORROW}/>,
}

export const pastRoute = {
  path: '/past',
  title: 'Выполненные',
  isExact: true,
  component: () => <TodoList filterProp="status" filterItem={DONE_TODO_STATUS}/>,
}

export const projectRoutes = [todayRoute, upcomingRoute, pastRoute]
