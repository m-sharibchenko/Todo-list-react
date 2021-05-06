import React from 'react'
import { Todos } from '../modules/Todos'
import { Redirect } from 'react-router-dom'
import { HomePg } from '../pages/HomePage'
import { LoginPg } from '../pages/LoginPage'
import { SignupPg } from '../pages/SignupPg'
import { UserProfile } from '../modules/User'
import { pricing } from './user.routes/pricingRoutes'

export const startPg = {
  path: '/',
  isExact: true,
  component: () => <Redirect to={homePg.path}/>,
}

export const homePg = {
  path: '/home',
  isExact: false,
  component: HomePg,
}

export const loginPg = {
  path: '/login',
  isExact: false,
  component: LoginPg,
}

export const signupPg = {
  path: '/registration',
  isExact: false,
  component: SignupPg,
}

export const app = {
  path: '/app',
  isExact: false,
  component: Todos,
}

export const user = {
  path: '/user',
  isExact: false,
  component: UserProfile,
}

export const rootRoutes = [startPg, homePg, app, user, loginPg, signupPg, pricing]
