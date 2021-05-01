import React from 'react'
import { TodoList } from '../../modules/Todos/components/TodoList'
import { DONE_TODO_STATUS } from '../../modules/Todos/constants/todoStatus'

const today = new Date().toISOString().substring(0, 10)

export const todayRoute = {
  path: '/today',
  title: 'Сегодня',
  isExact: true,
  component: () => <TodoList filterProp="date" filterItem={today}/>,
}

export const upcomingRoute = {
  path: '/upcoming',
  title: 'Предстоящие',
  isExact: true,
  component: () => <div>upcoming</div>,
}

export const deletedRoute = {
  path: '/deleted',
  title: 'Удаленные',
  isExact: true,
  component: () => <TodoList filterProp="status" filterItem={DONE_TODO_STATUS}/>,
}

export const projectRoutes = [todayRoute, upcomingRoute, deletedRoute]
