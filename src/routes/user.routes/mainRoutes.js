import React from 'react'
import { UserAccount } from '../../modules/User/components/UserAccount'
import { Notification } from '../../modules/User/components/Notification'

const profile = {
  path: '/profile',
  title: 'Профиль',
  isExact: false,
  component: UserAccount,
}

const notification = {
  path: '/notification',
  title: 'Уведомления',
  isExact: false,
  component: Notification,
}

const otherSetting = {
  path: '/setting',
  title: 'Основное',
  isExact: false,
  component: () => <div>setting</div>
}

export const userRoutes = [profile, notification, otherSetting]